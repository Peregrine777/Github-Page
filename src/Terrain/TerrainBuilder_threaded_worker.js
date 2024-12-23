
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
    resolution
  );

  const positionArrayBuffer = new ArrayBuffer((resolution + 1) ** 2 * Float32Array.BYTES_PER_ELEMENT);
  const normalArrayBuffer = new ArrayBuffer((resolution + 1) ** 2 * 3 * Float32Array.BYTES_PER_ELEMENT);

  const positions = new Float32Array(positionArrayBuffer);
  const normals = new Float32Array(normalArrayBuffer);

  // Fill positions
  const step = size / resolution;
  for (let i = 0; i < positions.length; i++) {
    positions[i] = heightmap[i];
  }

  // Compute normals using triangle connectivity
  for (let z = 0; z < resolution; z++) {
    for (let x = 0; x < resolution; x++) {
      const i = z * (resolution + 1) + x;

      // Get the vertices of the two triangles forming the quad
      const v1 = { x: x * step, y: heightmap[i], z: z * step };
      const v2 = { x: (x + 1) * step, y: heightmap[i + 1], z: z * step };
      const v3 = { x: x * step, y: heightmap[i + resolution + 1], z: (z + 1) * step };
      const v4 = { x: (x + 1) * step, y: heightmap[i + resolution + 2], z: (z + 1) * step };

      // Compute face normals for both triangles
      const normal1 = computeFaceNormal(v1, v2, v3);
      const normal2 = computeFaceNormal(v2, v4, v3);

      // Accumulate normals for each vertex
      accumulateNormal(normals, i, normal1);
      accumulateNormal(normals, i + 1, normal1);
      accumulateNormal(normals, i + resolution + 1, normal1);

      accumulateNormal(normals, i + 1, normal2);
      accumulateNormal(normals, i + resolution + 2, normal2);
      accumulateNormal(normals, i + resolution + 1, normal2);
    }
  }

  // Normalize normals
  for (let i = 0; i < normals.length; i += 3) {
    const nx = normals[i];
    const ny = normals[i + 1];
    const nz = normals[i + 2];
    const length = Math.sqrt(nx * nx + ny * ny + nz * nz);
    normals[i] = nx / length;
    normals[i + 1] = ny / length;
    normals[i + 2] = nz / length;
  }

  return {
    positions,
    normals,
  };
}
function arrayToWorld(i, resolution, size, center) {
  const step = size / resolution;
  const halfSize = size / 2;

  const xWorld = (center.x - halfSize) + step * ((i % (resolution + 1)));
  const yWorld = (center.z - halfSize) + step * (Math.floor(i / (resolution + 1)));

  return { x: xWorld, y: yWorld};
}

// Helper to compute height at a specific (x, y) location
function computeHeightAt(x, y, resolution, size, center, heightmap) {
  const halfSize = size / 2;
  const step = size / resolution;

  // Compute the index in the heightmap array
  const col = Math.floor((x + halfSize - center.x) / step);
  const row = Math.floor((y + halfSize - center.z) / step);

  // Check bounds
  if (col < 0 || col > resolution || row < 0 || row > resolution) {
    return 0; // Default height for out-of-bounds (could also extrapolate)
  }

  const index = row * (resolution + 1) + col;
  return heightmap[index];
}

function computeFaceNormal(v1, v2, v3) {
  const edge1 = { x: v2.x - v1.x, y: v2.y - v1.y, z: v2.z - v1.z };
  const edge2 = { x: v3.x - v1.x, y: v3.y - v1.y, z: v3.z - v1.z };

  return {
    x: edge1.y * edge2.z - edge1.z * edge2.y,
    y: edge1.z * edge2.x - edge1.x * edge2.z,
    z: edge1.x * edge2.y - edge1.y * edge2.x,
  };
}

function accumulateNormal(normals, index, normal) {
  normals[index * 3 + 0] += normal.x;
  normals[index * 3 + 1] += normal.y;
  normals[index * 3 + 2] += normal.z;
}
