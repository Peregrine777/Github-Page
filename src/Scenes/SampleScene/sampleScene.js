import { SceneBase } from "../sceneBase.js";
import * as THREE from "three";

export class sc_SampleScene extends SceneBase {
  constructor(params) {
    super(params);

    // Default cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    // Ambient lighting
    let skyColour = new THREE.Color(0.5, 0.72, 1.0);
    const ambientLight = new THREE.AmbientLight(skyColour, 0.5);
    this.scene.add(ambientLight);

    // Direct lighting (sun)
    let sunColour = new THREE.Color(1.0, 0.98, 0.8);
    const sun = new THREE.DirectionalLight(sunColour, 1);
    this.scene.add(sun);
  }

  update(deltaTime) {
    super.update(deltaTime);
  }
}
