
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { FBM } from '../Utils/FBM.js';

self.onmessage = function (e) {
  const { subject, params } = e.data;

  console.log("Worker received message:", subject, params);

  if (subject === 'generate_tile') { // Changed 'build_chunk' to 'generate_tile'
    const { center, size, color, resolution, noiseParams } = params;

    console.log("Generating tile with params:", center, size, color, resolution, noiseParams);
    
    const chunkData = buildChunk(center, size, resolution, color, noiseParams, center);
    self.postMessage({
      subject: 'generate_tile_result', // Use the correct subject
      data: chunkData
    });
  }
};

function buildChunk(center, size, resolution, heightRange, noiseParams, offset) {
  const n = new ImprovedNoise();
  const size = size;

  const geometry = new THREE.PlaneGeometry(size, size, resolution, resolution);
  const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });

  // Position and rotate the mesh
  mesh.position.set(center.x, center.y, center.z);
  mesh.rotation.x = -Math.PI / 2;
  // Position and rotate the mesh
  mesh.position.set(center.x, center.y, center.z);
  mesh.rotation.x = -Math.PI / 2;

  
  let coords = new THREE.Vector3(center.x, center.z, center.y);

  let positionAttribute = mesh.geometry.attributes.position;


  // Generate heightmap using FBM (without using an object)
  const heightMap = FBM(positionAttribute, coords.x, coords.z, heightRange, n, noiseParams, size, resolution);

  // Create ArrayBuffer for storing the positions
  const positionArrayBuffer = new ArrayBuffer((resolution + 1) ** 2 * 3 * Float32Array.BYTES_PER_ELEMENT);  // 3 floats per vertex
  //const normalArrayBuffer = new ArrayBuffer((resolution + 1) ** 2 * 3 * Float32Array.BYTES_PER_ELEMENT);  // 3 floats per vertex
  //const normals = new Float32Array(normalArrayBuffer);
  const positions = new Float32Array(positionArrayBuffer);

  let idx = 0;
  for (let i = 0; i < (resolution + 1) ** 2; i++) {
    const x = i % (resolution + 1);  // Calculate X position (modify based on resolution)
    const y = heightMap[i];  // Apply heightMap for Y (height)
    const z = Math.floor(i / (resolution + 1));  // Calculate Z position (modify based on resolution)

    // Assign values to the Float32Array
    positions[idx++] = x;
    positions[idx++] = y;
    positions[idx++] = z;
  }

  return {
    // Debug print the arraybuffers first 10 values
    positions: positionArrayBuffer  // Return ArrayBuffer with positions
  };
}
