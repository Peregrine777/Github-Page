import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GUI } from 'dat.gui';

import { camera_track } from './cameraTrack.js';
import { SmoothPath } from './smoothPath.js';

//Scenes
import { sc_IntroScene } from './Scenes/Intro/introScene.js'
import { sc_Reclaimer } from './Scenes/Reclaimer/Reclaimer.js';
import { QuadTreeScene } from './Scenes/Intro/QuadTreeScene.js';



//create the scene
let scene = new THREE.Scene();
// list of scenes 
let sceneClasses = [];
let activeSceneClass = null;
let activeScene = scene;

//create the webgl renderer
let renderCanvas = document.getElementById("render");
let renderer = new THREE.WebGLRenderer({ antialias: true, canvas: renderCanvas } );
document.body.appendChild(renderer.domElement);


//camera
let ratio = window.innerWidth/window.innerHeight;
let cameraParams = {FOV: 55};
let camera = new THREE.PerspectiveCamera(cameraParams.FOV,ratio,0.1,5000);
camera.position.set(-20, 5, -20);


//Composition & Rendering
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

let composer = new EffectComposer(renderer);
const renderPass = new RenderPass(activeScene,camera);composer.addPass(renderPass);
const ssaoPass = new SSAOPass(activeScene,camera,0, 0); composer.addPass(ssaoPass); 
composer.addPass(new UnrealBloomPass({x: screen.width, y:screen.height},0.70,0.0,0.85));
const outputPass = new OutputPass(); composer.addPass( outputPass );
renderer.toneMapping = THREE.AgXToneMapping;
renderer.toneMappingExposure = 1

function updateComposerScene(activeScene){
  renderPass.scene = activeScene;
  ssaoPass.scene = activeScene;
}
 
let gui = createGUI();

/////////////////
// Scene Setup //
//////////////////

function switchScene() {
  let newScene = new sc_IntroScene({
      camera: camera,
      renderer: renderer,
      gui: gui
  });
  sceneClasses.push(newScene);
  activeSceneClass = newScene;
  activeScene = newScene.getScene();
  updateComposerScene(activeScene);
}

/////////////
// Objects //
////////////
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

scene.add(land);

//ambient Lighting
let skyColour = new THREE.Color(0.5,0.72,1.0)
const ambientLight = new THREE.AmbientLight(skyColour, 0.5);
scene.add(ambientLight);

//Sun
let sunColour = new THREE.Color(1.0,0.98,0.8)
const sun = new THREE.SpotLight(sunColour,1);
sun.castShadow = true;
sun.position.set(30,15,30);
sun.lookAt(0,0,1);

scene.add(sun);

/////////////////////
// Camera Functions // 
/////////////////////

// add the new control and link to the current camera to transform its position
let controls = new OrbitControls( camera, renderer.domElement );

// Define the points for camera movement
let matrix = new THREE.Matrix4();
const pointTargets = [
  {pos: new THREE.Vector3(-10, 0, -20), lookAt: new THREE.Vector3(0, 0, 100)},
  {pos: new THREE.Vector3(-10, 0, -18), lookAt: new THREE.Vector3(0, 0, 100)},
  {pos: new THREE.Vector3(-8, 10, -5),  lookAt: new THREE.Vector3(0, 0, 100)},
  {pos: new THREE.Vector3(0, 10, 10),  lookAt: new THREE.Vector3(0, 0, 100)}
]

function getLookRotation(position, lookAtTarget) {
  matrix.lookAt(position, lookAtTarget, new THREE.Vector3(0, 1, 0)); // 'up' vector usually (0, 1, 0)
  return new THREE.Quaternion().setFromRotationMatrix(matrix);
}

// Example usage with pointTargets array
// pointTargets.forEach(target => {
//   const quaternion = getLookRotation(target.pos, target.lookAt);
//   console.log(quaternion); // This will log the quaternion for the lookAt orientation
// });

const points = [
  {time: 0, data: {pos: pointTargets[0].pos, rot: getLookRotation(pointTargets[0].pos, pointTargets[0].lookAt)}, posEasing: TWEEN.Easing.Quadratic.In, rotEasing: TWEEN.Easing.Quadratic.In},
  {time: 4, data: {pos: pointTargets[1].pos, rot: getLookRotation(pointTargets[1].pos, pointTargets[1].lookAt)}, posEasing: TWEEN.Easing.Linear.None, rotEasing: TWEEN.Easing.Quadratic.InOut},
  {time: 8, data: {pos: pointTargets[2].pos, rot: getLookRotation(pointTargets[2].pos, pointTargets[2].lookAt)}, posEasing: TWEEN.Easing.Linear.None, rotEasing: TWEEN.Easing.Quadratic.InOut},
  {time: 12, data: {pos: pointTargets[3].pos, rot: getLookRotation(pointTargets[3].pos, pointTargets[3].lookAt)}, posEasing: TWEEN.Easing.Quadratic.Out, rotEasing: TWEEN.Easing.Quadratic.Out}
];

//Create a SmoothPath instance with the positions
const smoothPath = new SmoothPath(points);
//Add the smoothed line to the scene
const smoothedLine = smoothPath.getLineGeometry();
const originalLine = smoothPath.createLineGeometry(points.map(point => point.data.pos), new THREE.Color(0xff0000));

scene.add(smoothedLine);
scene.add(originalLine);

//Initialize CameraTrack
const cameraTrack = new camera_track.CameraTrack({
  camera: camera,
  points: points,
  duration: 10, // 10 seconds for a full track
});
        
/////////////////////
// SceneFunctions //
/////////////////////
createGUI();

function createGUI() {
  let _guiParams = {
    general: {
    },
  };
  let gui = new GUI();
  const generalRollup = gui.addFolder('General');
  gui.close();
  return gui;
}

// Test text rendering 
const element = document.createElement( 'div' );
element.className = 'element';
element.textContent = 'Reclaimer Demo';
element.addEventListener('pointerdown', () => { switchScene(); });
const objectCSS = new CSS3DObject( element );
objectCSS.position.set( 0, 0, 500 );
objectCSS.scale.set( 0.1, 0.1, 0.1 );
objectCSS.rotation.set(0, Math.PI, 0);
const cssScene = new THREE.Scene();
cssScene.add( objectCSS );
let CSSRenderer = new CSS3DRenderer();
CSSRenderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( CSSRenderer.domElement );

const cssCanvas = document.createElement('canvas');
cssCanvas.width = window.innerWidth;
cssCanvas.height = window.innerHeight;
const cssContext = cssCanvas.getContext('2d');

// Animation loop
const clock = new THREE.Clock();
//final update loop
let MyUpdateLoop = (t) => {
  controls.update();
  TWEEN.update(t);

  const deltaTime = clock.getDelta();

  // Render 3D scene to depth texture
  composer.render();
  // Capture CSS3D elements
  CSSRenderer.render(cssScene, camera);

  if (activeSceneClass){
    activeSceneClass.update(deltaTime);
  }

  requestAnimationFrame(MyUpdateLoop);
};

requestAnimationFrame(MyUpdateLoop);

//Resizing the window
let MyResize = function ( )
{
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width,height);
  composer.setSize(width,height);
  camera.aspect = width/height;
  camera.updateProjectionMatrix();
  composer.render();  
};

//link the resize of the window to the update of the camera
window.addEventListener( 'resize', MyResize);