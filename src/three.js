import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import {
  CSS3DObject,
  CSS3DRenderer,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { SSAOPass } from "three/examples/jsm/postprocessing/SSAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { GUI } from "dat.gui";

import { camera_track } from "./cameraTrack.js";
import { SmoothPath } from "./smoothPath.js";

//Scenes
import { sc_IntroScene } from "./Scenes/Intro/introScene.js";
import { sc_Reclaimer } from "./Scenes/Reclaimer/Reclaimer.js";

export default function setupThreeJS(containerRef, sectionRef) {
  const container = containerRef.current;

  if (!container) return;

  //create the scene
  let scene = new THREE.Scene();
  // list of scenes
  let sceneClasses = [];
  let activeSceneClass = null;
  let activeScene = scene;

  //create the webgl renderer
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  const pixelRatio = window.devicePixelRatio || 1;
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(pixelRatio);

  renderer.domElement.width = container.offsetWidth;
  renderer.domElement.height = container.offsetHeight;
  container.appendChild(renderer.domElement);

  //camera

  let cameraParams = { FOV: 55 };
  let camera = new THREE.PerspectiveCamera(
    cameraParams.FOV,
    container.offsetWidth / container.offsetHeight,
    0.1,
    1000
  );
  camera.position.set(-20, 5, -20);
  camera.lookAt(0, 0, 0);

  //Composition & Rendering
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  let composer = new EffectComposer(renderer);
  composer.setPixelRatio(window.devicePixelRatio);
  composer.setSize(container.offsetWidth, container.offsetHeight);
  const renderPass = new RenderPass(activeScene, camera);
  composer.addPass(renderPass);
  const ssaoPass = new SSAOPass(activeScene, camera, 0, 0);
  composer.addPass(ssaoPass);
  composer.addPass(
    new UnrealBloomPass(
      { x: container.offsetWidth, y: container.offsetHeight },
      0.7,
      0.0,
      0.85
    )
  );
  const outputPass = new OutputPass();
  composer.addPass(outputPass);
  renderer.toneMapping = THREE.LinearToneMapping;
  renderer.toneMappingExposure = 1;

  function updateComposerScene(activeScene) {
    renderPass.scene = activeScene;
    ssaoPass.scene = activeScene;
  }

  let gui = createGUI();

  /////////////////
  // Scene Setup //
  //////////////////

  function switchScene() {
    let newScene = new sc_Reclaimer({
      camera: camera,
      composer: composer,
      renderer: renderer,
      gui: gui,
    });
    sceneClasses.push(newScene);
    activeSceneClass = newScene;
    activeScene = newScene.getScene();
    updateComposerScene(activeScene);
  }

  /////////////
  // Objects //
  ////////////

  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  // Add a cube to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  //scene.add(cube);

  //ambient Lighting
  let skyColour = new THREE.Color(0.5, 0.72, 1.0);
  const ambientLight = new THREE.AmbientLight(skyColour, 0.5);
  scene.add(ambientLight);

  //Sun
  let sunColour = new THREE.Color(1.0, 0.98, 0.8);
  const sun = new THREE.SpotLight(sunColour, 1);
  sun.castShadow = true;
  sun.position.set(30, 15, 30);
  sun.lookAt(0, 0, 50);

  scene.add(sun);

  /////////////////////
  // Camera Functions //
  /////////////////////

  // add the new control and link to the current camera to transform its position
  let controls = new OrbitControls(camera, renderer.domElement);

  /////////////////////
  // SceneFunctions //
  /////////////////////

  function createGUI() {
    let _guiParams = {
      general: {},
    };
    let gui = new GUI({ autoPlace: false });
    const generalRollup = gui.addFolder("General");
    gui.close();

    //container.appendChild(gui.domElement);
    console.log("datGUI container:" + container);
    return gui;
  }

  // Handle resizing
  const handleResize = (parentRef) => {
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    composer.setSize(container.offsetWidth, container.offsetHeight);
    composer.setPixelRatio(window.devicePixelRatio);
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
  };
  window.addEventListener("resize", handleResize);

  let hasResized = false;

  switchScene();
  // Animation loop
  const clock = new THREE.Clock();
  //final update loop
  let MyUpdateLoop = (t) => {
    controls.update();
    TWEEN.update(t);
    const deltaTime = clock.getDelta();
    composer.render();

    if (activeSceneClass) {
      activeSceneClass.update(deltaTime);
    }

    requestAnimationFrame(MyUpdateLoop);
  };

  requestAnimationFrame(MyUpdateLoop);

  return {
    handleResize,
    scene,
    cleanup: () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    },
  };
}
