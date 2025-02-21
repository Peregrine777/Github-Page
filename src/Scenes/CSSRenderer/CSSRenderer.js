import { SceneBase } from "../sceneBase";
import * as THREE from "three";
import {
  CSS3DObject,
  CSS3DRenderer,
} from "three/examples/jsm/renderers/CSS3DRenderer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

export class sc_CSSRenderer extends SceneBase {
  constructor(params) {
    super(params);

    this.scene.name = "CSSRenderer";
  }

  update(deltaTime) {
    super.update(deltaTime);
  }
}
