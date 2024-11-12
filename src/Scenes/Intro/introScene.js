import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { SceneBase } from '../sceneBase.js';


class IntroScene extends SceneBase {
  constructor() {
    super();
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    /////////////////
    // Scene Setup //
    /////////////////
    let sceneVals = {size: 20, sunHelper: false};
    let landVals = {octaves: 8, persistence: 0.5, lacunarity: 2, scale: 1,
    height: 100, falloff: 0.1, speed: 0.0005, noiseType: "Perlin", noise: "fbm",
    iterations: 3, resolution: 511, enableFog: true, enableShadows: true, heightMap: new THREE.Texture()};

    /////////////
    // Objects //
    /////////////
    const landGeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 );
    const landMaterial = new THREE.MeshPhysicalMaterial (
      {color: new THREE.Color(0.4,0.7,0.4),
        side: THREE.DoubleSide,
        roughness: 1.0,
        wireframe: true,
        clearcoat: 0.05} );
    const land = new THREE.Mesh(landGeometry, landMaterial );
    land.rotation.x = -Math.PI/2;
    land.castShadow = true;
    land.receiveShadow = true;

    const axesHelper = new THREE.AxesHelper( 5 ); scene.add( axesHelper );

    this.scene.add(land);

    //////////////
    // Lighting //
    //////////////

    //ambient Lighting
    let skyColour = new THREE.Color(0.5,0.72,1.0)
    const ambientLight = new THREE.AmbientLight(skyColour, 0.5);
    this.scene.add(ambientLight);

    //Sun
    let sunColour = new THREE.Color(1.0,0.98,0.8)
    const sun = new THREE.SpotLight(sunColour,1);
    sun.castShadow = true;
    sun.position.set(30,15,30);
    sun.lookAt(0,0,1);

    this.scene.add(sun);

    //////////////////////
    // Camera Functions //
    //////////////////////

    this.controls = new OrbitControls( this.camera, renderer.domElement );
  }



  // Override the update method to animate the cube
  update(deltaTime) {
    this.controls.update();
  }
}

class SphereScene extends SceneBase {
  constructor() {
    super();
    const geometry = new THREE.SphereGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.sphere = new THREE.Mesh(geometry, material);
    this.scene.add(this.sphere);

    let cameraVals = {FOV: 55};

  }
}