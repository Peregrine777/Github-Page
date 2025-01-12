import * as THREE from 'three'; 

import { FBM } from '../Utils/FBM.js';
import { randFloat, randInt, smoothstep } from '../Utils/MathUtils.js';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { quadtree } from './quadtree.js';
import { LandShader } from '../Shaders/LandShader.js';
import { GUI } from 'dat.gui';


const _NUM_WORKERS = 23;

let _IDs = 0;

class WorkerThread {
  constructor(s) {
    this._worker = new Worker(s, {type: 'module'});
    this._worker.onmessage = (e) => {
      this._OnMessage(e);
    };
    this._resolve = null;
    this._id = _IDs++;
  }

  _OnMessage(e) {
    const resolve = this._resolve;
    this._resolve = null;
    resolve(e.data);
  }

  get id() {
    return this._id;
  }

  postMessage(s, resolve, transferList = []) {
    this._resolve = resolve;
    console.log('Sending message to worker:', s);
    this._worker.postMessage(s, transferList);
  }
}

class WorkerThreadPool {
  constructor(sz, entry) {
    this._workers = [...Array(sz)].map(_ => new WorkerThread(entry));
    this._free = [...this._workers];
    this._busy = {};
    this._queue = [];
    this._queueMaxLength = this._workers.length * 4;
  }

  get length() {
    return this._workers.length;
  }

  get Busy() {
    return this._queue.length > 0 || Object.keys(this._busy).length > 0;
  }


  _CullQueue(){
    // Remove any work items beyond max queue length
    const [workItem, workResolve] = this._queue.pop();
  }

  Enqueue(workItem, resolve) {
    this._queue.push([workItem, resolve]);
    this._PumpQueue();
    if (this._queue.length > this._queueMaxLength) {
      //this._CullQueue();
    }
  }


  _PumpQueue() {
    while (this._free.length > 0 && this._queue.length > 0) {
      const w = this._free.pop();
      this._busy[w.id] = w;

      const [workItem, workResolve] = this._queue.shift();

      w.postMessage(workItem, (v) => {
        delete this._busy[w.id];
        this._free.push(w);
        workResolve(v);
        this._PumpQueue();
      });
    }
  }
}

export class TerrainBuilder_threaded{
    constructor(params){
        this.camera = params.camera;
        this.scene = params.scene;
        this.gui = params.gui;
        this.wireframe = false;

        this.updateTerrain = true;
        const workerPath = new URL('./TerrainBuilder_threaded_worker.js', import.meta.url)
        this._workerPool = new WorkerThreadPool(
          _NUM_WORKERS, workerPath);

        this.updateInProgress = false;
    
        // Flat quadtree parameters
        this.FLAT_PLANE_SIZE = params.flat_plane_size || 10000; // Set the plane size
        this.MIN_CELL_SIZE = params.min_cell_size || 16;     // Minimum quadtree cell size
        // For each child, we will create with x segments
        this.CELL_RESOLUTION = params.cell_resolution || 256;   

        this.noise = new ImprovedNoise();
        this.noiseZ = randFloat(0, 1000); // Randomize the noise function
        this.noiseParams = {
          amplitude: 10,
          octaves: 16,
          frequency: 1,
          persistence: 0.5,
          lacunarity: 2,
          exponentiation: 2.0,
          noiseZ: this.noiseZ
        };

        // Initialize FlatQuadTree
        this.quadTree = new quadtree.FlatQuadTree({
            size: this.FLAT_PLANE_SIZE,
            min_node_size: this.MIN_CELL_SIZE,
            cell_resolution: this.CELL_RESOLUTION
        });


        // Dictionary to track existing terrain chunks
        this.terrainChunks = {};
        
        // Initial rendering based on the camera position
        this.updateQuadtreeTiles();

        this._initGUI();
    }

    _initGUI(){
      let terrainGUI = this.gui.addFolder('Terrain');
      // Add a boolean to whether the terrain updates or not
      terrainGUI.add(this, 'updateTerrain').name('Update Terrain');
      terrainGUI.add(this, 'wireframe').onChange(() => {
          this.updateTerrainMesh();
      });

      terrainGUI.add(this, 'FLAT_PLANE_SIZE')
          .name('Terrain Size')
          .min(100)
          .max(10000)
          .step(100)
          .onChange(() => {
              this.updateTerrainParams({
                  flat_plane_size: this.FLAT_PLANE_SIZE
              });
          });
      terrainGUI.add(this, 'MIN_CELL_SIZE').name('Min Cell Size')
          .min(1)
          .max(512)
          .step(32)
          .onChange(() => {
              this.updateTerrainParams({
                  min_cell_size: this.MIN_CELL_SIZE
              });
          });
      terrainGUI.add(this, 'CELL_RESOLUTION').name('Cell Resolution').min(16).max(512).step(16).onChange(() => {
        this.updateTerrainParams({
          cell_resolution: this.CELL_RESOLUTION
        });
      });
      let noiseParams = terrainGUI.addFolder('NoiseParams');
      noiseParams.add(this.noiseParams, 'octaves').min(1).max(16).step(1).name('Octaves').onChange(() => {
        console.log("Octaves changed:", this.noiseParams.octaves);
        this.updateTerrainParams({
          octaves: this.noiseParams.octaves
        });
        noiseParams.updateDisplay(); 
      });
      noiseParams.add(this.noiseParams, 'frequency').min(0.1).max(2).step(0.1).name('Frequency').onChange(() => {
        this.updateTerrainParams({
          frequency: this.noiseParams.frequency
        });
      });
      noiseParams.add(this.noiseParams, 'amplitude').min(0.1).max(10).step(0.1).name('Amplitude').onChange(() => {
        this.updateTerrainParams({
          amplitude: this.noiseParams.amplitude
        });
      });
      noiseParams.add(this.noiseParams, 'persistence').min(0.1).max(2).step(0.1).name('Persistence').onChange(() => {
        this.updateTerrainParams({
          persistence: this.noiseParams.persistence
        });
      });
      noiseParams.add(this.noiseParams, 'lacunarity').min(1).max(4).step(0.1).name('Lacunarity').onChange(() => {
        this.updateTerrainParams({
          lacunarity: this.noiseParams.lacunarity
        });
      });
      noiseParams.add(this.noiseParams, 'exponentiation').min(1).max(10).step(0.1).name('Exponentiation').onChange(() => {
        this.updateTerrainParams({
          exponentiation: this.noiseParams.exponentiation
        });
      });
    }

    updateTerrainMesh(){
        for (let key in this.terrainChunks){
            this.terrainChunks[key].material.wireframe = this.wireframe;
        }
    }


    updateTerrainParams(params) {
      this.FLAT_PLANE_SIZE = params.flat_plane_size || this.FLAT_PLANE_SIZE;
      this.MIN_CELL_SIZE = params.min_cell_size || this.MIN_CELL_SIZE;
      this.CELL_RESOLUTION = params.cell_resolution || this.CELL_RESOLUTION;
      this.noiseParams.octaves = params.octaves || this.noiseParams.octaves;
      this.noiseParams.frequency = params.frequency || this.noiseParams.frequency;
      this.noiseParams.amplitude = params.amplitude || this.noiseParams.amplitude;
      this.noiseParams.persistence = params.persistence || this.noiseParams.persistence;
      this.noiseParams.lacunarity = params.lacunarity || this.noiseParams.lacunarity;
      this.noiseParams.exponentiation = params.exponentiation || this.noiseParams.exponentiation;
      this.quadTree = new quadtree.FlatQuadTree({
        size: this.FLAT_PLANE_SIZE,
        min_node_size: this.MIN_CELL_SIZE,
        cell_resolution: this.CELL_RESOLUTION
      });

      this.updateQuadtreeTiles();
    }

    async updateQuadtreeTiles() {

      if (this.updateInProgress) {
        return; // Skip if already running
      }
      this.updateInProgress = true;

      this.quadTree.Insert(this.camera.position);
  
      const children = this.quadTree.GetChildren();
      const newTerrainChunks = {};
      const center = new THREE.Vector3();
      const dimensions = new THREE.Vector3();
  
      const promises = []; // Store all asynchronous tile generation promises
  
      for (let node of children) {
          const c = node.bounds.getCenter(center);
          const s = node.bounds.getSize(dimensions);
  
          const size = dimensions.x;
          const color = new THREE.Color(0x999999);
          const resolution = this.quadTree._params.cell_resolution;
  
          const key = `${c.x}_${c.z}_${node.depth}`;
  
          if (this.terrainChunks[key]) {
              newTerrainChunks[key] = this.terrainChunks[key];
              delete this.terrainChunks[key];
          } else {
              promises.push(
                  this.generateTile(center, size, resolution)
                  .then((mesh) => {
                      newTerrainChunks[key] = mesh;
                  })
                  .catch((e) => {
                      console.error(e);
                  })
              );
          }
      }

      try {
        await Promise.all(promises);
        for (const key in this.terrainChunks) {
            this.scene.remove(this.terrainChunks[key]);
        }
        this.terrainChunks = newTerrainChunks;
      } finally {
          this.updateInProgress = false;
      }
    }    


    generateTile(center, size, resolution) {
      const params = {
          center: { x: center.x, y: center.y, z: center.z },
          size: size,
          planeSize: this.FLAT_PLANE_SIZE,
          resolution: resolution,
          noiseParams: this.noiseParams,
          noiseZ: this.noiseZ
      };
  
      return new Promise((resolve) => {
          this._workerPool.Enqueue(
            { subject: 'generate_tile', params: params },
            (result) => {
                const geometry = new THREE.PlaneGeometry(size, size, resolution, resolution);
                let landMaterial = new THREE.ShaderMaterial({ side: THREE.DoubleSide});
                landMaterial.uniforms = LandShader.uniforms
                landMaterial.vertexShader = LandShader.vertexShader;
                landMaterial.fragmentShader = LandShader.fragmentShader;
                landMaterial.uniforms.size.value = this.FLAT_PLANE_SIZE;
                landMaterial.uniforms.enableFog.value = true;
                landMaterial.uniforms.showNormals.value = false;
                landMaterial.wireframe = this.wireframe;


                const mesh = new THREE.Mesh(geometry, landMaterial);
                mesh.position.set( params.center.x, params.center.y, params.center.z);
                mesh.rotation.x = -Math.PI / 2;

                // Apply the positions array from the worker
                let meshPositions = mesh.geometry.attributes.position; 
                for (let i = 0; i < meshPositions.count; i++) {
                    let height = result.data.positions[i];
                    meshPositions.setZ(i, height);

                }

                // let meshNormals = mesh.geometry.attributes.normal;
                // for (let i = 0; i < meshNormals.count; i++) {
                //   const nx = result.positions.normals[i * 3 + 0];
                //   const ny = result.positions.normals[i * 3 + 1];
                //   const nz = result.positions.normals[i * 3 + 2];
                //   meshNormals.setXYZ(i, -nx, nz, -ny);
                // }

                //meshNormals.needsUpdate = true;
                meshPositions.needsUpdate = true;
                //geometry.computeVertexNormals();
                this.scene.add(mesh);
                resolve(mesh);
            }
          );
      });
  }
  
    
    update() {
      if (this.updateTerrain) {
          // Check if the camera has moved significantly since the last update
          const cameraPosition = this.camera.position;
          if (this.needsUpdate(cameraPosition)) {
              this.updateQuadtreeTiles();
          }
      }
    }

    needsUpdate(cameraPosition) {
        // Implement logic to decide if a quadtree update is needed based on camera position
        if (!this.lastCameraPosition) {
            this.lastCameraPosition = new THREE.Vector3().copy(cameraPosition);
            return true;
        }
  
        const distanceMoved = this.lastCameraPosition.distanceTo(cameraPosition);
        if (distanceMoved > 1) { // Adjust threshold as needed
            this.lastCameraPosition.copy(cameraPosition);
            return true;
        }
  
        return false;
    }
}