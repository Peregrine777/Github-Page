import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBM } from '../../Utils/FBM.js';

import { GUI } from 'dat.gui';
import { SceneBase } from '../sceneBase.js';
import { TerrainBuilder } from '../../Terrain/TerrainBuilder.js';
import { TerrainBuilder_threaded } from '../../Terrain/TerrainBuilder_threaded.js';
import { threadTest } from '../../Terrain/threading_test.js';



export class sc_IntroScene extends SceneBase {
    constructor(params) {
      super(params);
      

      // run the threading test
      //let test = new threadTest();
      //test.Run();
    }


    update(deltaTime) {
        super.update(deltaTime);

        this.terrain.update();
    }
}