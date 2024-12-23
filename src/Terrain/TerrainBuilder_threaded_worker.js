
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { FBM } from '../Utils/FBM.js';

self.onmessage = async function (e) {
  const { subject, params } = e.data;

  console.log("Worker received message:", e.data);

  if (subject == 'generate_tile') { // Changed 'build_chunk' to 'generate_tile'
    const { center, size, planeSize, resolution, noiseZ } = params;

    console.log("Generating tile with params:", center, size, resolution);
    
    const chunkData = buildChunk(center, size, planeSize, resolution, noiseZ);
    self.postMessage({
      subject: 'generate_tile_result', // Use the correct subject
      positions: chunkData
    });
  }
};

function buildChunk(center, size, planeSize, resolution, _noiseZ) {
  const n = new ImprovedNoise();

  let heightmap = FBM(center,
    { min: -100, max: 100 },
    n,
    { octaves: 16, frequency: 1.0, amplitude: 2, octaves: 16, persistence: 0.5, lacunarity:2, exponentiation: 2.0, noiseZ: _noiseZ },
    size,
    planeSize,
    resolution);

  // Create ArrayBuffer for storing the positions
  const positionArrayBuffer = new ArrayBuffer((resolution + 1) ** 2 * Float32Array.BYTES_PER_ELEMENT);  // only 1 value per vertex (height)
  const positions = new Float32Array(positionArrayBuffer);
  for (let i = 0; i < positions.length; i++) {
    positions[i] = heightmap[i];
  }

  return {
    positions // Return ArrayBuffer with positions
  };
}
