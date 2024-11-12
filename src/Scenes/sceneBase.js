import * as THREE from 'three';

export class SceneBase {
    constructor() {
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
  