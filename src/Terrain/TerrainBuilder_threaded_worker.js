self.onmessage = function (e) {
  const { subject, params } = e.data;

  console.log("Worker received message:", e.data);

  if (subject == "generate_tile") {
    // Changed 'build_chunk' to 'generate_tile'
    const { center, size, planeSize, resolution, noiseParams } = params;

    console.log("Generating tile with params:", center, size, resolution);

    const chunkData = buildChunk(
      center,
      size,
      planeSize,
      resolution,
      noiseParams
    );
    self.postMessage({
      subject: "generate_tile_result", // Use the correct subject
      data: chunkData,
    });
  }
};

function buildChunk(center, size, planeSize, resolution, noiseParams) {
  //const n = new ImprovedNoise();

  let heightmap = FBM(
    center,
    { min: -100, max: 100 },
    {
      octaves: noiseParams.octaves,
      frequency: noiseParams.frequency,
      amplitude: noiseParams.amplitude,
      persistence: noiseParams.persistence,
      lacunarity: noiseParams.lacunarity,
      exponentiation: noiseParams.exponentiation,
      noiseZ: noiseParams.noiseZ,
    },
    size,
    planeSize,
    resolution
  );

  //const positionArrayBuffer = new ArrayBuffer((resolution + 1) ** 2 * Float32Array.BYTES_PER_ELEMENT);
  //const normalArrayBuffer = new ArrayBuffer((resolution + 1) ** 2 * 3 * Float32Array.BYTES_PER_ELEMENT);

  // create an array of 0s with the correct length (resolution + 1) ** 2
  const positions = new Float32Array((resolution + 1) ** 2);
  const normals = new Float32Array((resolution + 1) ** 2 * 3);

  // Fill positions
  const step = size / resolution;
  for (let i = 0; i < positions.length; i++) {
    positions[i] = heightmap[i];
  }

  //Compute normals using triangle connectivity
  for (let z = 0; z < resolution; z++) {
    for (let x = 0; x < resolution; x++) {
      const i = z * (resolution + 1) + x;

      // Get the vertices of the two triangles forming the quad
      const v1 = { x: x * step, y: heightmap[i], z: z * step };
      const v2 = { x: (x + 1) * step, y: heightmap[i + 1], z: z * step };
      const v3 = {
        x: x * step,
        y: heightmap[i + resolution + 1],
        z: (z + 1) * step,
      };
      const v4 = {
        x: (x + 1) * step,
        y: heightmap[i + resolution + 2],
        z: (z + 1) * step,
      };

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
    const length = sqrt(nx * nx + ny * ny + nz * nz);
    normals[i] = nx / length;
    normals[i + 1] = ny / length;
    normals[i + 2] = nz / length;
  }

  return {
    positions,
    normals,
  };
}

function sqrt(x) {
  return x ** 0.5;
}

function arrayToWorld(i, resolution, size, center) {
  const step = size / resolution;
  const halfSize = size / 2;

  const xWorld = center.x - halfSize + step * (i % (resolution + 1));
  const yWorld = center.z - halfSize + step * floor(i / (resolution + 1));

  return { x: xWorld, y: yWorld };
}

function FBM(center, heightRange, noiseParams, size, planeSize, resolution) {
  const noise = new ImprovedNoise();
  const heightMap = [];

  // Loop through each grid point (resolution + 1) and apply FBM to the x/y coordinates
  for (let i = 0; i < (resolution + 1) * (resolution + 1); i++) {
    // Calculate the x, y, z coordinates for this grid point
    const { x, y } = arrayToWorld(i, resolution, size, center);

    // Normalize the u, v coordinates to [0, 1] based on the total plane size (to get our relative position in the global noise field)
    const u = (x + planeSize / 2) / planeSize;
    const v = (y + planeSize / 2) / planeSize;

    // Use the FBM function to generate height values (apply it on x/y)
    const h = fbmPerCell(u, v, noise, noiseParams); // You can modify fbmPerCell to return the height at this position
    heightMap[i] = h * (heightRange.max - heightRange.min);
  }

  return heightMap;
}

function fbmPerCell(x, y, noise, noiseParams) {
  let total = 0.0;
  let frequency = 2.0;
  let amplitude = noiseParams.amplitude;
  let maxValue = 0.0;

  for (let i = 0; i < noiseParams.octaves; i++) {
    total +=
      noise.noise(x * frequency, y * frequency, noiseParams.noiseZ) * amplitude;
    maxValue += amplitude;
    amplitude *= noiseParams.persistence;
    frequency *= noiseParams.lacunarity;
  }

  return pow(total, noiseParams.exponentiation) / maxValue;
}

function pow(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function floor(x) {
  return x | 0;
}

function min(a, b) {
  return a < b ? a : b;
}

function max(a, b) {
  return a > b ? a : b;
}

function smoothstep(edge0, edge1, x) {
  const t = max(0, min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
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

var ImprovedNoise = function () {
  var p = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
    36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
    234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71,
    134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
    230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
    1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130,
    116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250,
    124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
    47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
    154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
    108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
    242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
    239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121,
    50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
    141, 128, 195, 78, 66, 215, 61, 156, 180,
  ];

  for (var i = 0; i < 256; i++) {
    p[256 + i] = p[i];
  }

  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(t, a, b) {
    return a + t * (b - a);
  }

  function grad(hash, x, y, z) {
    var h = hash & 15;
    var u = h < 8 ? x : y,
      v = h < 4 ? y : h == 12 || h == 14 ? x : z;
    return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
  }

  return {
    noise: function (x, y, z) {
      var floorX = floor(x),
        floorY = floor(y),
        floorZ = floor(z);

      var X = floorX & 255,
        Y = floorY & 255,
        Z = floorZ & 255;

      x -= floorX;
      y -= floorY;
      z -= floorZ;

      var xMinus1 = x - 1,
        yMinus1 = y - 1,
        zMinus1 = z - 1;

      var u = fade(x),
        v = fade(y),
        w = fade(z);

      var A = p[X] + Y,
        AA = p[A] + Z,
        AB = p[A + 1] + Z,
        B = p[X + 1] + Y,
        BA = p[B] + Z,
        BB = p[B + 1] + Z;

      return lerp(
        w,
        lerp(
          v,
          lerp(u, grad(p[AA], x, y, z), grad(p[BA], xMinus1, y, z)),
          lerp(u, grad(p[AB], x, yMinus1, z), grad(p[BB], xMinus1, yMinus1, z))
        ),
        lerp(
          v,
          lerp(
            u,
            grad(p[AA + 1], x, y, zMinus1),
            grad(p[BA + 1], xMinus1, y, z - 1)
          ),
          lerp(
            u,
            grad(p[AB + 1], x, yMinus1, zMinus1),
            grad(p[BB + 1], xMinus1, yMinus1, zMinus1)
          )
        )
      );
    },
  };
};
