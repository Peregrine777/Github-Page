import * as THREE from 'three';

export const maskShader = {
    uniforms: {
      'tDepth': { value: null },
      'tCSS': { value: null }, // CSS3D texture
      'cameraNear': { value: 0.1 },
      'cameraFar': { value: 100 },
    },
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      varying vec2 vUv;
      uniform sampler2D tDepth;
      uniform sampler2D tCSS;
      uniform float cameraNear;
      uniform float cameraFar;
  
      float readDepth(sampler2D depthSampler, vec2 coord) {
        float fragCoordZ = texture2D(depthSampler, coord).x;
        float viewZ = cameraNear * cameraFar / ((cameraFar - cameraNear) * fragCoordZ - cameraFar);
        return viewZ;
      }
  
      void main() {
        float sceneDepth = readDepth(tDepth, vUv);
        vec4 cssColor = texture2D(tCSS, vUv);
  
        // Use the depth to apply partial masking (alpha based on depth comparison)
        float alpha = smoothstep(sceneDepth - 0.01, sceneDepth + 0.01, gl_FragCoord.z);
        gl_FragColor = vec4(cssColor.rgb, cssColor.a * alpha);
      }
    `
  };

  export default maskShader;
  