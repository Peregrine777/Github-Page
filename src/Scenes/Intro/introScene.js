import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBM } from '../../Utils/FBM.js';

import { GUI } from 'dat.gui';
import { SceneBase } from '../sceneBase.js';
import { TerrainBuilder } from '../../Terrain/TerrainBuilder.js';




export class sc_IntroScene extends SceneBase {
    constructor(params) {
      super(params);
      
      this.updateTerrain = true;
      this.terrain = new TerrainBuilder({
        camera: this.camera,
        scene: this.scene,
        renderer: this.renderer
      });
      this._initGUI();
    }

    _initGUI(){
        let terrainGUI = this.gui.addFolder('Terrain');
        // Add a boolean to whether the terrain updates or not
        terrainGUI.add(this, 'updateTerrain').name('Update Terrain');
        terrainGUI.add(this.terrain, 'wireframe').onChange(() => {
            this.terrain.updateTerrainMesh();
        });

        terrainGUI.add(this.terrain, 'FLAT_PLANE_SIZE')
            .name('Terrain Size')
            .min(100)
            .max(10000)
            .step(100)
            .onChange(() => {
                this.terrain.updateTerrainParams({
                    flat_plane_size: this.terrain.FLAT_PLANE_SIZE
                });
            });
        terrainGUI.add(this.terrain, 'MIN_CELL_SIZE').name('Min Cell Size')
            .min(1)
            .max(512)
            .step(32)
            .onChange(() => {
                this.terrain.updateTerrainParams({
                    min_cell_size: this.terrain.MIN_CELL_SIZE
                });
            });
        terrainGUI.add(this.terrain, 'CELL_RESOLUTION').name('Cell Resolution').min(16).max(512).step(16).onChange(() => {
          this.terrain.updateTerrainParams({
            cell_resolution: this.terrain.CELL_RESOLUTION
          });
        });
    }


    update(deltaTime) {
        super.update(deltaTime);

        // Update terrain
        if (this.updateTerrain){
            this.terrain.update();
        }
    }
}