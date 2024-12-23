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
        this.wireframe = false;

        this._workerPool = new WorkerThreadPool(
          _NUM_WORKERS, 'src/Terrain/TerrainBuilder_threaded_worker.js');

        this.updateInProgress = false;
    
        // Flat quadtree parameters
        this.FLAT_PLANE_SIZE = params.flat_plane_size || 1000; // Set the plane size
        this.MIN_CELL_SIZE = params.min_cell_size || 4;     // Minimum quadtree cell size
        // For each child, we will create with x segments
        this.CELL_RESOLUTION = params.cell_resolution || 64;   

        this.noise = new ImprovedNoise();
        this.noiseZ = randFloat(0, 1000); // Randomize the noise function

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
                landMaterial.uniforms.enableFog.value = false;
                landMaterial.uniforms.showNormals.value = false;
                landMaterial.wireframe = this.wireframe;


                const mesh = new THREE.Mesh(geometry, landMaterial);
                mesh.position.set( params.center.x, params.center.y, params.center.z);
                mesh.rotation.x = -Math.PI / 2;

                // Apply the positions array from the worker
                let meshPositions = mesh.geometry.attributes.position; 
                for (let i = 0; i < meshPositions.count; i++) {
                    let height = result.positions.positions[i];
                    meshPositions.setZ(i, height);

                }

                let meshNormals = mesh.geometry.attributes.normal;
                for (let i = 0; i < meshNormals.count; i++) {
                  const nx = result.positions.normals[i * 3 + 0];
                  const ny = result.positions.normals[i * 3 + 1];
                  const nz = result.positions.normals[i * 3 + 2];
                  meshNormals.setXYZ(i, -nx, nz, -ny);
                }

                meshNormals.needsUpdate = true;
                meshPositions.needsUpdate = true;
                //geometry.computeVertexNormals();
                this.scene.add(mesh);
                resolve(mesh);
            }
          );
      });
  }
  
    
    update() {
          // Check if the camera has moved significantly since the last update
          const cameraPosition = this.camera.position;
          if (this.needsUpdate(cameraPosition)) {
              this.updateQuadtreeTiles();
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