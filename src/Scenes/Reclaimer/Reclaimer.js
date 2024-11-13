
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { GUI } from 'dat.gui';

// Import your custom scripts
import { Landscape } from './landscape.js';
import { City } from './City.js';
import { Environment } from './Environment.js';
import { Vine } from './Vine.js';
import { BuildingShader } from '../../Shaders/BuildingMaterial.js';

import { SceneBase } from '../sceneBase.js';

import * as CANNON from 'cannon-es';

//document.getElementById("button").addEventListener("click", startReclamation, false); 

export class sc_Reclaimer extends SceneBase {
  constructor(params) {
    super(params);
    this.ratio = window.innerWidth/window.innerHeight;
    this.frame = 0;
    this.reclaimFrame = 0;
    this.isReclaiming = false;
    this.renderer = params.renderer || new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById("render") } );
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.cameraVals = {FOV: 55};
    this.camera = params.camera || new THREE.PerspectiveCamera(this.cameraVals.FOV,this.ratio,0.1,5000);
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene,this.camera));
    this.composer.addPass(new SSAOPass(this.scene,this.camera,0, 0)); 
    this.composer.addPass(new UnrealBloomPass({x: screen.width, y:screen.height},0.70,0.0,0.85));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1
    this.physicsworld = new CANNON.World({
      gravity: new CANNON.Vec3(0,-9.82,0),
      quatNormalizeFast: true,
      quatNormalizeSkip: 8,
    });
    this.gui = params.gui || new GUI();

    // PHYSICS WORLD //
    const physicsworld = new CANNON.World({
      gravity: new CANNON.Vec3(0,-9.82,0),
      quatNormalizeFast: true,
      quatNormalizeSkip: 8,
    });

    // Ignore small collisions
    function createGroundBody(){
      const groundBody = new CANNON.Body({
        type: CANNON.Body.STATIC,
        shape: new CANNON.Plane(),
      });
      groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
      groundBody.position.set(0,0.2,0);
      return groundBody;
    }
    physicsworld.addBody(createGroundBody());

    // add a placeholder cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    /////////////
    // Objects //
    ////////////

    let sceneVals = {size: 20, sunHelper: false};
    let landVals = {octaves: 8, persistence: 0.5, lacunarity: 2, scale: 1,
      height: 100, falloff: 0.1, speed: 0.0005, noiseType: "Perlin", noise: "fbm",
      iterations: 3, resolution: 511, enableFog: true, enableShadows: true, heightMap: new THREE.Texture()};
    let cityVals = {density: 1, isSimulating: true};
    let envVals = {
      elevation: 7,
      azimuth: 180
    };
    let uiVals = {HeightTexture: true};

    let environment = new Environment(this.scene, this.renderer);
    let sunDirection = environment.sun;

    let materialsArray = [];

    // Scene Properties
    let reclaimerProperties = {scene:this.scene, physicsworld, environment, sunDirection, frame:this.frame, reclaimFrame:this.reclaimFrame, materialsArray, renderer:this.renderer};

    let cityGenPoint = new THREE.Object3D();
    //cityGenPoint.position.set(-sceneVals.size/2,0.5,-sceneVals.size/2);
    this.scene.add(cityGenPoint);
      
    let land = new THREE.Object3D();
    land.name = "land";
    this.scene.add(land);
    new Landscape(sceneVals.size, landVals, sunDirection, reclaimerProperties).ChunkManager(land);

    reclaimerProperties.land = land;
    
    //////////////////////
    // SHADER MATERIALS //
    //////////////////////
    let skyscraperColor = new THREE.Color( 0.25, 0.25, 0.5 );
    let skyscraperTexture = new THREE.TextureLoader().load( 'assets/Textures/GlassWindow/Glass_Window_003_basecolor.jpg' );
    let skyscraperNormal = new THREE.TextureLoader().load( 'assets/Textures/GlassWindow/Glass_Window_003_normal.jpg' );
    
    let apartmentColor = new THREE.Color( 0xd67229 );
    let apartmentTexture = new THREE.TextureLoader().load( 'assets/Textures/Bricks/Brick_Wall_019_basecolor.jpg' );
    // let apartmentNormal = new THREE.TextureLoader().load( 'assets/Textures/Bricks/Brick_Wall_019_normal.jpg' );
    let houseColor = new THREE.Color( 0xfddb53 );
    let roofColor = new THREE.Color( 0.9, 0.05, 0.05 );


    let skyScraperMaterial = new THREE.ShaderMaterial({ side: THREE.DoubleSide,
        uniforms: THREE.UniformsUtils.merge( [
            THREE.UniformsLib[ 'fog' ]] ),});
    skyScraperMaterial.uniforms = {
        lightDirection: {value: reclaimerProperties.sunDirection},
        baseColor: {value: skyscraperColor},
        textureMap: {value: skyscraperTexture},
        normalMap: {value: skyscraperNormal},
        frame: {value: reclaimerProperties.scene.frame},
        type: {value: 3},
        roofColor: {value: roofColor},
    };


    skyScraperMaterial.vertexShader = BuildingShader.vertexShader;
    skyScraperMaterial.fragmentShader = BuildingShader.fragmentShader;

    skyScraperMaterial.needsUpdate = true;

    let apartmentMaterial = skyScraperMaterial.clone();
      apartmentMaterial.uniforms.lightDirection.value = reclaimerProperties.sunDirection;
      apartmentMaterial.uniforms.baseColor.value = apartmentColor;
      apartmentMaterial.uniforms.textureMap.value = apartmentTexture;
      apartmentMaterial.uniforms.type.value = 2;
      apartmentMaterial.needsUpdate = true;

    let houseMaterial = skyScraperMaterial.clone();
      houseMaterial.uniforms.baseColor.value = houseColor;
      houseMaterial.uniforms.textureMap.value = null;
      houseMaterial.uniforms.type.value = 1;
      houseMaterial.uniforms.lightDirection.value = reclaimerProperties.sunDirection;
      houseMaterial.needsUpdate = true;

    let debugMaterial = skyScraperMaterial.clone();
      debugMaterial.uniforms.baseColor.value = new THREE.Color(1, 1, 0);

    reclaimerProperties.materialsArray.push(null);
    reclaimerProperties.materialsArray.push(houseMaterial);
    reclaimerProperties.materialsArray.push(apartmentMaterial);
    reclaimerProperties.materialsArray.push(skyScraperMaterial);
    reclaimerProperties.materialsArray.push(debugMaterial);

    ///////////////////
    // CITY CREATION //
    ///////////////////

    let city = new City(cityGenPoint,sceneVals.size, reclaimerProperties);

    let redrawCity = { Generate_City:function(){
      //physicsworld.allowSleep = false;
      // replace physics plane
      physicsworld.addBody(createGroundBody());
      city = new City(cityGenPoint,sceneVals.size, reclaimerProperties);
      //physicsworld.allowSleep = true; 
    }};

    
    ////////////
    //   GUI  //
    ////////////

    function redrawScene(){

      land.clear();
      cityGenPoint.clear();

      let bodies = physicsworld.bodies;
      bodies.forEach(element => {
        physicsworld.removeBody(element);
        physicsworld.step();
      })

    //Values for the GUI
    this.gui.add(sceneVals, "size", 10, 20, 2).onChange(redrawScene);
    this.gui.add(cameraVals, "FOV", 20, 90, 1).onChange(function(value){camera.fov = value; camera.updateProjectionMatrix();});
      
    let folderLand = this.gui.addFolder("Landscape");
      let folderFBM = folderLand.addFolder("FBM");  
        folderFBM.add(landVals,'octaves', 2, 16, 2).onChange(redrawScene);
        folderFBM.add(landVals,'persistence', 0.1, 1, 0.1).onChange(redrawScene);
        folderFBM.add(landVals,'lacunarity', 0.1, 4, 0.1).onChange(redrawScene);
        folderFBM.add(landVals,'scale', 0.1, 4, 0.1).onChange(redrawScene);
        folderFBM.add(landVals,'height', 10, 500, 5).onChange(redrawScene);
      folderLand.add(landVals, 'falloff', -0.1, 0.3, 0.1).onChange(redrawScene);
      folderLand.add(landVals, 'iterations', 1, 16, 1).onChange(redrawScene);
      folderLand.add(landVals, 'resolution', 255, 1279, 255).onChange(redrawScene);
      folderLand.add(landVals, 'enableFog', 'false', 'true').onChange(redrawScene);

    let folderCity = this.gui.addFolder("City");
    folderCity.add(redrawCity, 'Generate_City');
    folderCity.open();
    let folderColorPalette = folderCity.addFolder("Color Palette");
    //folderCity.add(cityVals, 'isSimulating', true, false);

    let paletteSky = {
      SkyScraper: skyscraperColor
    }

    let paletteApart = {
      Apartment: apartmentColor
    }

    let paletteHouse = {
      House: houseColor
    }

    let paletteRoof = {
      Roof: roofColor
    }

    folderColorPalette.addColor(paletteSky, 'SkyScraper').onChange(function(value){
      skyScraperMaterial.uniforms.baseColor.value = new THREE.Color( value.r /255, value.g /255, value.b /255 );
    })

    folderColorPalette.addColor(paletteApart, 'Apartment').onChange(function(value){
      apartmentMaterial.uniforms.baseColor.value = new THREE.Color( value.r /255, value.g /255, value.b /255 );
    })

    folderColorPalette.addColor(paletteHouse, 'House').onChange(function(value){
      houseMaterial.uniforms.baseColor.value = new THREE.Color( value.r /255, value.g /255, value.b /255 );
    })

    folderColorPalette.addColor(paletteRoof, 'Roof').onChange(function(value){
      houseMaterial.uniforms.roofColor.value = new THREE.Color( value.r /255, value.g /255, value.b /255 );
    })

    const folderSky = this.gui.addFolder( 'Sky' );
    folderSky.add( envVals, 'elevation', 0, 90, 0.1 ).onChange( updateEnvironment );
    folderSky.add( envVals, 'azimuth', - 180, 180, 0.1 ).onChange( updateEnvironment );

    const folderUI = this.gui.addFolder( 'UI' );
    folderUI.add( uiVals, 'HeightTexture' ).onChange( updateUI );

    function updateUI(){
      if(uiVals.HeightTexture == false){
        heightGradient.style.visibility = "hidden";
      }
      else { heightGradient.style.visibility = "visible";}
    };

  }


  function startReclamation(){
    if (isReclaiming == false){
      isReclaiming = true;
      reclaimerProperties.reclaimFrame += 0.01;
      console.log("reclaiming");
    }
    


    let buildingTargets = city.getRandomBuildings(numberOfBuildingTargets);

    let timeout = 0;

    buildingTargets.forEach(building => {

      setTimeout(() => {
      building.unfreezeBuilding();

      let block = building.getRandomBlock();
      block.shatterBlock();

      let vine = new Vine();
      this.scene.add(vine);
      let position = building.getBlock(0).position;
      //position.x -= sceneVals.size / 2;
      //position.z -= sceneVals.size / 2;
      vine.setPosition(position);
        vine.growVine(building.height / 2);
      },
      timeout);

      timeout += 500;
      //vines.push(vine);
    });

    /////////////////////
    // SceneFunctions //
    /////////////////////


    new Landscape(sceneVals.size, landVals, sunDirection, reclaimerProperties).ChunkManager(land);
    }
  
    function updateEnvironment(){
      this.environment.updateSun(scene, renderer, envVals);
      // environment.update();
    }

  }


  update(t)
  {
    reclaimerProperties.frame += 0.01;
    if (isReclaiming == true){
      reclaimerProperties.reclaimFrame += 0.01;
    }
    frame += 0.01;
  
    TWEEN.update(t);

    if(cityVals.isSimulating){
      city.updateBuildings();
      physicsworld.fixedStep();
    }
    
    //cannonDebugger.update();
    this.environment.update();

    // console.log(camera.position);

  };

}













