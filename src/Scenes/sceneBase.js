import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

/**
 * Base class for all scenes in the application. This class provides a basic structure for scenes
 * @param {Object} params Parameters for the scene
 */
export class SceneBase {
    constructor(params) {
      this.scene = params.scene || new THREE.Scene();
      this.camera = params.camera || new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.gui = params.gui || new GUI();
      this.renderer = params.renderer || new THREE.WebGLRenderer();
      this.composer = params.composer || new EffectComposer(this.renderer);
    }
  
    // Method to update objects in the scene (e.g., animation logic)
    update(deltaTime) {
      // Override this in subclasses to provide specific updates for the scene
    }
  
    // Method to get the scene
    getScene() {
      return this.scene;
    }
  
    // Method to get the camera for this scene
    getCamera() {
      return this.camera;
    }
  }
  