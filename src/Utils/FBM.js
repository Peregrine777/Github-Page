import * as THREE from 'three';
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { randFloat, randInt, smoothstep } from './MathUtils.js';

function arrayToWorld(i, resolution, size, center) {
    const step = size / resolution;
    const halfSize = size / 2;

    const xWorld = (center.x - halfSize) + step * ((i % (resolution + 1)));
    const yWorld = (center.z - halfSize) + step * (Math.floor(i / (resolution + 1)));

    return { x: xWorld, y: yWorld};
}

/**
   * Applies vertex offsets in z direction to a given object based on a noise function, returns a heightmap for debugging
   * @param {THREE.Object3D} object - the object to apply the noise to
   * @param {number} coordsX - the x offset for the noise
   * @param {number} offsetY - the y offset for the noise
   * @param {{ min: number, max: number }} heightRange - the range of heights for the noise
   * @param {ImprovedNoise} n - the noise function to use
   * @param {{ amplitude: number, octaves: number, frequency: number, persistence: number, lacunarity: number, exponentiation: number, noiseZ: number }} noiseParams - the parameters for the noise
   * @param {number} size - the size of the object
   * @param {number} resolution - the resolution of the object
   * @returns {Array<number>} - the heightmap
   */
export function FBM(center, heightRange, n, noiseParams, size, planeSize, resolution) {
    const heightMap = [];

    // Loop through each grid point (resolution + 1) and apply FBM to the x/y coordinates
    for (let i = 0; i < (resolution + 1) * (resolution + 1); i++) {
        // Calculate the x, y, z coordinates for this grid point
        const{x, y} = arrayToWorld(i, resolution, size, center);

        // Normalize the u, v coordinates to [0, 1] based on the total plane size (to get our relative position in the global noise field)
        const u = (x + planeSize/2) / planeSize;
        const v = (y + planeSize/2) / planeSize;

        // Use the FBM function to generate height values (apply it on x/y)
        const h = fbmPerCell(u, v, noiseParams, n);  // You can modify fbmPerCell to return the height at this position
        heightMap[i] = h * (heightRange.max - heightRange.min);
    }

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
function fbmPerCell(x, y, noiseParams, n) {
    let total = 0.0;
    let frequency = 2.0;
    let amplitude = noiseParams.amplitude;
    let maxValue = 0.0;

    for (let i = 0; i < noiseParams.octaves; i++) {
        total += n.noise(x * frequency, y * frequency, noiseParams.noiseZ) * amplitude;
        maxValue += amplitude;
        amplitude *= noiseParams.persistence;
        frequency *= noiseParams.lacunarity;
    }

    return Math.pow(total, noiseParams.exponentiation) / maxValue;
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