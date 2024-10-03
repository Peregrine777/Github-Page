    import * as THREE from 'three';
    import * as TWEEN from '@tweenjs/tween.js';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
    import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
    import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
    import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
    import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
    import { GUI } from 'dat.gui';

    import * as CANNON from 'cannon-es';

    //create the scene
    let scene = new THREE.Scene( );
    // list of scenes 
    let scenes = [];
    scenes.push(scene);
    let ratio = window.innerWidth/window.innerHeight;
    let frame = 0;
    let reclaimFrame = 0;
    let gui = new GUI();
    let activeScene = scenes[0];

    //create the webgl renderer
    let renderCanvas = document.getElementById("render");
    let renderer = new THREE.WebGLRenderer({ antialias: true, canvas: renderCanvas } );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
  
    //camera
    let cameraVals = {FOV: 55};
    let camera = new THREE.PerspectiveCamera(cameraVals.FOV,ratio,0.1,5000);
    camera.position.set(-30, 20, 0);
    camera.lookAt(0,0,1);
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    //Composition & Rendering
    let composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(activeScene,camera);composer.addPass(renderPass);
    const ssaoPass = new SSAOPass(activeScene,camera,0, 0); composer.addPass(ssaoPass); 
    composer.addPass(new UnrealBloomPass({x: screen.width, y:screen.height},0.70,0.0,0.85));
    const outputPass = new OutputPass(); composer.addPass( outputPass );
    renderer.toneMapping = THREE.AgXToneMapping;
    renderer.toneMappingExposure = 1


  /////////////
  // Objects //
  ////////////

    const landGeometry = new THREE.PlaneGeometry( 100, 100, 100, 100 );
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
  // SceneFunctions //
  /////////////////////

  //final update loop
  let MyUpdateLoop = (t) =>
  {
    TWEEN.update(t);

    composer.render();
    requestAnimationFrame(MyUpdateLoop);

  };
  
  requestAnimationFrame(MyUpdateLoop);
  
  //this function is called when the window is resized
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