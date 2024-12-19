import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBM } from '../../Utils/FBM.js';
import { randFloat, randInt, smoothstep } from '../../Utils/MathUtils.js';

import { SceneBase } from '../sceneBase.js';
import { quadtree } from '../../Terrain/quadtree.js';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';

import { LandShader } from '../../Shaders/LandShader.js';


export class sc_IntroScene extends SceneBase {
  constructor(params) {
      super(params);

      // Flat quadtree parameters
      this.FLAT_PLANE_SIZE = 1000; // Set the plane size
      const MIN_CELL_SIZE = 1;     // Minimum quadtree cell size
      // For each child, we will create with x segments
      const CELL_RESOLUTION = 64;   

      this.noise = new ImprovedNoise();
      this.noiseZ = randFloat(0, 1000); // Randomize the noise function

      // Initialize FlatQuadTree
      this.quadTree = new quadtree.FlatQuadTree({
          size: this.FLAT_PLANE_SIZE,
          min_node_size: MIN_CELL_SIZE,
          cell_resolution: CELL_RESOLUTION
      });


      // Dictionary to track existing terrain chunks
      this.terrainChunks = {};
      
      // Initial rendering based on the camera position
      this.updateQuadtreeTiles();
  }

  generateTile(center, size, color, resolution) {
    const geometry = new THREE.PlaneGeometry(size, size, resolution, resolution);
    const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
    let landMaterial = new THREE.ShaderMaterial({ side: THREE.DoubleSide});
    landMaterial.uniforms = LandShader.uniforms
    landMaterial.vertexShader = LandShader.vertexShader;
    landMaterial.fragmentShader = LandShader.fragmentShader;
    landMaterial.uniforms.size.value = this.FLAT_PLANE_SIZE;
    landMaterial.uniforms.enableFog.value = true;
    
    material.wireframe = false; // Enable wireframe mode for visualization
    const mesh = new THREE.Mesh(geometry, landMaterial);

    // Position and rotate the mesh
    mesh.position.set(center.x, center.y, center.z);
    mesh.rotation.x = -Math.PI / 2;

    let coords = new THREE.Vector3(center.x, center.z, center.y);

    FBM(mesh, coords.x, coords.y,
         { min: -100, max: 100 },
         this.noise,
         { octaves: 16, frequency: 1.0, amplitude: 2, octaves: 16, persistence: 0.5, lacunarity:2, exponentiation: 2.0, noiseZ: this.noiseZ },
         this.FLAT_PLANE_SIZE);

    // Add the new mesh to the scene and new terrain chunks
    this.scene.add(mesh);
    return mesh;
  }

  updateQuadtreeTiles() {
    // Insert the current camera position into the quadtree
    this.quadTree.Insert(this.camera.position);

    // Get updated children based on camera position
    const children = this.quadTree.GetChildren();
    const newTerrainChunks = {}; // Temporary storage for new state
    const center = new THREE.Vector3();
    const dimensions = new THREE.Vector3();

    // Render each node in the quadtree
    for (let node of children) {
      // Get node center and dimensions
      node.bounds.getCenter(center);
      node.bounds.getSize(dimensions);

      const size = dimensions.x; // Width of the square cell
      const color = new THREE.Color(0x999999); // Default color
      const resolution = this.quadTree._params.cell_resolution;

      // Generate a unique key based on position and depth
      const key = `${center.x}_${center.z}_${node.depth}`;

      if (this.terrainChunks[key]) {
          // If the tile already exists, keep it unchanged
          newTerrainChunks[key] = this.terrainChunks[key];
          delete this.terrainChunks[key]; // Remove from the old dictionary to mark as retained
      } else {
          let mesh = this.generateTile(center, size, color, resolution);
          // Create a new tile for this position
          newTerrainChunks[key] = mesh;
      }
    }
    // Any remaining items in this.terrainChunks are tiles that were not in the new state and need to be removed
    for (const key in this.terrainChunks) {
        this.scene.remove(this.terrainChunks[key]); // Remove old tile
    }

    // Replace the old terrainChunks with the updated one
    this.terrainChunks = newTerrainChunks;
  }

  update(deltaTime) {
      super.update(deltaTime);

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