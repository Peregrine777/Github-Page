    import * as THREE from 'three';
    import * as TWEEN from '@tweenjs/tween.js';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
    import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
    import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
    import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
    import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
    import { GUI } from 'dat.gui';

    import { camera_track } from './cameraTrack.js';
    import { SmoothPath } from './smoothPath.js';

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
    camera.position.set(-20, 5, -20);
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

    /////////////////
    // Scene Setup //
    /////////////////

    let sunDirection = new THREE.Vector3(1, 0.5, 1);
    let sceneVals = {size: 20, sunHelper: false};
    let landVals = {octaves: 8, persistence: 0.5, lacunarity: 2, scale: 1,
    height: 100, falloff: 0.1, speed: 0.0005, noiseType: "Perlin", noise: "fbm",
    iterations: 3, resolution: 511, enableFog: true, enableShadows: true, heightMap: new THREE.Texture()};

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

  // Correct standalone function declaration
  function getLookRotation(position, lookAtTarget) {
    matrix.lookAt(position, lookAtTarget, new THREE.Vector3(0, 1, 0)); // 'up' vector usually (0, 1, 0)
    return new THREE.Quaternion().setFromRotationMatrix(matrix);
  }

  // Example usage with pointTargets array
  pointTargets.forEach(target => {
    const quaternion = getLookRotation(target.pos, target.lookAt);
    console.log(quaternion); // This will log the quaternion for the lookAt orientation
  });

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

  // Animation loop
  const clock = new THREE.Clock();
  //final update loop
  let MyUpdateLoop = (t) =>
  {
    TWEEN.update(t);
    const deltaTime = clock.getDelta();
    //cameraTrack.Update(deltaTime);
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