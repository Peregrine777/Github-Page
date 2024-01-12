import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

// Ensure the OBJLoader is properly imported or adjusted according to your setup

// Initial setup for two scenes
const scene1 = new THREE.Scene();
const scene2 = new THREE.Scene();

// Setup for two cameras
const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Setup for two renderers
const renderer1 = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas1') });
const renderer2 = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas2') });

renderer1.setSize(window.innerWidth / 2, window.innerHeight / 2);
renderer2.setSize(window.innerWidth / 2, window.innerHeight / 2);



const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight1.position.set(0, 1, 1); // Adjust the position as needed
scene1.add(directionalLight1);

// Lighting for scene 2
const ambientLight2 = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
scene2.add(ambientLight2);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(0, 1, 1); // Adjust the position as needed
scene2.add(directionalLight2);

// Loaders
const loader = new OBJLoader();

//Add a reference before loading model
let model1 = new THREE.Object3D();
scene1.add(model1);
// Load first model (house)
loader.load(
  '/models/house.obj', // Adjust the path to your .obj file
  function (object) {
    model1.add(object);  
  }
);

model1.rotation.y = 0.5;

//Add a reference before loading model
let model2 = new THREE.Object3D();
// Load second model (apartment)
loader.load(
  '/models/house.obj', // Adjust the path to your .obj file
  function (object) {
    scene2.add(object);
  }
);

// Positioning cameras
camera1.position.z = 5;
camera2.position.z = 5;

// Animation loops for both canvases
function animate1() {
  requestAnimationFrame(animate1);
  model1.rotation.y += 0.01;
  model1.rotation.z += 0.01;
  // Add any rotation or animation logic here for the first model
  renderer1.render(scene1, camera1);
}

function animate2() {
  requestAnimationFrame(animate2);
  // Add any rotation or animation logic here for the second model
  renderer2.render(scene2, camera2);
}

animate1();
animate2();
