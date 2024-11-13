import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { SceneBase } from '../sceneBase.js';
import { quadtree } from '../../quadtree.js';

export class QuadTreeScene extends SceneBase {
    constructor(params) {
        super(params);
  
        // Flat quadtree parameters
        const FLAT_PLANE_SIZE = 1000; // Set the plane size
        const MIN_CELL_SIZE = 1;     // Minimum quadtree cell size
        // For each child, we will create with x segments
        const CELL_RESOLUTION = 16;   
  
        // Initialize FlatQuadTree
        this.quadTree = new quadtree.FlatQuadTree({
            size: FLAT_PLANE_SIZE,
            min_node_size: MIN_CELL_SIZE,
            cell_resolution: CELL_RESOLUTION
        });
  
        // Dictionary to track existing terrain chunks
        this.terrainChunks = {};
        
        // Initial rendering based on the camera position
        this.updateQuadtreeTiles();
    }
  
    updateQuadtreeTiles() {
        // Insert the current camera position into the quadtree
        this.quadTree.Insert(this.camera.position);
  
        // Get updated children based on camera position
        const newChildren = this.quadTree.GetChildren();
        const newTerrainChunks = {}; // Temporary storage for new state
        const center = new THREE.Vector3();
        const dimensions = new THREE.Vector3();
  
        // Render each node in the quadtree
        for (let node of newChildren) {
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
                // Create a new tile for this position
                const geometry = new THREE.PlaneGeometry(size, size, resolution, resolution);
                const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
                material.wireframe = true; // Enable wireframe mode for visualization
                const mesh = new THREE.Mesh(geometry, material);

                // Position and rotate the mesh
                mesh.position.set(center.x, center.y, center.z);
                mesh.rotation.x = -Math.PI / 2;

                // Add the new mesh to the scene and new terrain chunks
                this.scene.add(mesh);
                newTerrainChunks[key] = { mesh, size, color };
            }
  
            // Any remaining items in this.terrainChunks are tiles that were not in the new state and need to be removed
            for (const key in this.terrainChunks) {
                this.scene.remove(this.terrainChunks[key].mesh); // Remove old tile
            }
  
            // Replace the old terrainChunks with the updated one
            this.terrainChunks = newTerrainChunks;
        }
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
        if (distanceMoved > 5) { // Adjust threshold as needed
            this.lastCameraPosition.copy(cameraPosition);
            return true;
        }
  
        return false;
    }
  }