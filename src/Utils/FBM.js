import * as THREE from 'three';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { randFloat, randInt, smoothstep } from './MathUtils.js';


/**
   * Applies vertex offsets in z direction to a given object based on a noise function, returns a heightmap for debugging
   * @param {THREE.Object3D} object - the object to apply the noise to
   * @param {number} offsetX - the x offset for the noise
   * @param {number} offsetY - the y offset for the noise
   * @param {{ min: number, max: number }} heightRange - the range of heights for the noise
   * @param {ImprovedNoise} n - the noise function to use
   * @param {{ amplitude: number, octaves: number, frequency: number, persistence: number, lacunarity: number, exponentiation: number, noiseZ: number }} noiseParams - the parameters for the noise
   * @param {number} size - the size of the object
   * @returns {Array<number>} - the heightmap
   */
export function FBM(object, offsetX = 0, offsetY = 0, heightRange, n, noiseParams, size){
    let maxH = heightRange.max;
    let minH = heightRange.min;
    let geometry = object.geometry;
    let positionAttribute = geometry.attributes.position;
    const octaves = noiseParams.octaves;
    const persistence = noiseParams.persistence;
    const lacunarity = noiseParams.lacunarity;
    const noiseZ = noiseParams.noiseZ;

    let minX = 1000;
    let minY = 1000;

    
    const texels = positionAttribute.count;
    let heightMap = new Array(texels);

    for (let i = 0; i < texels; i++) {
      // Retrieve vertex positions
      let u = positionAttribute.getX(i) + offsetX;
      let v = -positionAttribute.getY(i) + offsetY;
      let z = positionAttribute.getZ(i);

      
      let x = (u + size/2)/size;
      let y = (v + size/2)/size;
      
      if (x < minX){
        minX = x;
      }
        if (y < minY){
            minY = y;
        }

      // Get FBM value based on vertex position within the tile
      let h = fbmPerCell(x, y, noiseParams, n);

      // Update height range
      if (h > maxH) maxH = h;
      if (h < minH) minH = h;

      heightMap[i] = h;

      // Set new height for each vertex individually
      positionAttribute.setZ(i, z + h * (heightRange.max - heightRange.min));
    }

    heightRange.max = maxH;
    heightRange.min = minH;

    geometry.computeVertexNormals();
    positionAttribute.needsUpdate = true;

    return heightMap;
}

/**
 * Fractal Brownian Motion based noise, normalized to a value between 0 and 1
 * @param {number} x 
 * @param {number} y 
 * @param {number} octaves
 * @param {number} persistence
 * @param {number} size
 * @param {ImprovedNoise} n
 * @returns {number} - the noise value for this x/y coordinate
 */
function fbmPerCell(x, y, noiseParams, n){
    let total = 0.0;
    let frequency = 2.0;
    let amplitude = noiseParams.amplitude;
    let maxValue = 0.00;  // Used for normalizing result to 0.0 - 1.0
    for(let i=0;i<noiseParams.octaves;i++) {
        total += n.noise(x * frequency, y * frequency, noiseParams.noiseZ) * amplitude;
        
        maxValue += amplitude;
        
        amplitude *= noiseParams.persistence;
        frequency *= noiseParams.lacunarity;
    }
    return Math.pow(total, noiseParams.exponentiation)/maxValue;
}

function blendFBM(h, u, v, size){
    //Smooth blend with city radius
    const scale = 1.0;
    const cityRadius = 5;
    let dist = new THREE.Vector2(u, v).distanceTo(new THREE.Vector2(0,0))
    if (dist > cityRadius){
        let distN = (dist - size);
        let ramp = smoothstep(dist, (cityRadius * 4), size/1.2); // adjust the second parameter to change the falloff distance
        h = h*height * (ramp*2*scale);
        if (dist > size){
            h -= (dist - size) * falloff;
        }
    }
    else { h = 0 };
    return h;
}