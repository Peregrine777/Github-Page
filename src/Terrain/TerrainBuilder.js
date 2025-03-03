import * as THREE from "three";

// import { FBM } from "../Utils/FBM.js";
import { randFloat, randInt, smoothstep } from "../Utils/MathUtils.js";
// import { ImprovedNoise } from "three/addons/math/ImprovedNoise.js";
import { quadtree } from "./quadtree.js";
import { LandShader } from "../Shaders/LandShader.js";
import { GUI } from "dat.gui";

export class TerrainBuilder {
  constructor(params) {
    this.camera = params.camera;
    this.scene = params.scene;
    this.wireframe = false;

    this.updateTerrain = true;

    // Flat quadtree parameters
    this.FLAT_PLANE_SIZE = params.flat_plane_size || 1000; // Set the plane size
    this.MIN_CELL_SIZE = params.min_cell_size || 16; // Minimum quadtree cell size
    // For each child, we will create with x segments
    this.CELL_RESOLUTION = params.cell_resolution || 16;

    this.noise = new ImprovedNoise();
    this.noiseZ = randFloat(0, 1000); // Randomize the noise function

    // Initialize FlatQuadTree
    this.quadTree = new quadtree.FlatQuadTree({
      size: this.FLAT_PLANE_SIZE,
      min_node_size: this.MIN_CELL_SIZE,
      cell_resolution: this.CELL_RESOLUTION,
    });

    // Dictionary to track existing terrain chunks
    this.terrainChunks = {};

    // Initial rendering based on the camera position
    this.updateQuadtreeTiles();
  }

  updateTerrainMesh() {
    for (let key in this.terrainChunks) {
      this.terrainChunks[key].material.wireframe = this.wireframe;
    }
  }

  updateTerrainParams(params) {
    this.FLAT_PLANE_SIZE = params.flat_plane_size || this.FLAT_PLANE_SIZE;
    this.MIN_CELL_SIZE = params.min_cell_size || this.MIN_CELL_SIZE;
    this.CELL_RESOLUTION = params.cell_resolution || this.CELL_RESOLUTION;
    this.quadTree = new quadtree.FlatQuadTree({
      size: this.FLAT_PLANE_SIZE,
      min_node_size: this.MIN_CELL_SIZE,
      cell_resolution: this.CELL_RESOLUTION,
    });

    this.updateQuadtreeTiles();
  }

  updateQuadtreeTiles() {
    // Insert the current camera position into the quadtree
    this.quadTree.Insert(this.camera.position);

    // Get updated children based on camera position
    const children = this.quadTree.GetChildren();
    const newTerrainChunks = {}; // Temporary storage for new state
    const center = new THREE.Vector3();
    const dimensions = new THREE.Vector3();

    for (let node of children) {
      node.bounds.getCenter(center);
      node.bounds.getSize(dimensions);

      const size = dimensions.x; // Width of the square cell
      const color = new THREE.Color(0x999999); // Default color
      const resolution = this.quadTree._params.cell_resolution;

      // Generate a unique key based on position and depth
      const key = `${center.x}_${center.z}_${node.depth}`;

      if (this.terrainChunks[key]) {
        // If the tile already exists, keep it unchanged
        newTerrainChunks[key] = this.terrainChunks[key];
        delete this.terrainChunks[key]; // Remove from the old dictionary to mark as retained
      } else {
        let mesh = this.generateTile(center, size, color, resolution);
        // Create a new tile for this position
        newTerrainChunks[key] = mesh;
        this.scene.add(newTerrainChunks[key]); // Add new tile to the scene
      }
    }
    // Any remaining items in this.terrainChunks are tiles that were not in the new state and need to be removed
    for (const key in this.terrainChunks) {
      this.scene.remove(this.terrainChunks[key]); // Remove old tile
    }

    // Replace the old terrainChunks with the updated one
    this.terrainChunks = newTerrainChunks;
  }

  generateTile(center, size, color, resolution) {
    const geometry = new THREE.PlaneGeometry(
      size,
      size,
      resolution,
      resolution
    );
    const material = new THREE.MeshBasicMaterial({
      color,
      side: THREE.DoubleSide,
    });
    let landMaterial = new THREE.ShaderMaterial({ side: THREE.DoubleSide });
    landMaterial.uniforms = LandShader.uniforms;
    landMaterial.vertexShader = LandShader.vertexShader;
    landMaterial.fragmentShader = LandShader.fragmentShader;
    landMaterial.uniforms.size.value = this.FLAT_PLANE_SIZE;
    landMaterial.uniforms.enableFog.value = true;
    landMaterial.wireframe = this.wireframe;

    material.wireframe = false; // Enable wireframe mode for visualization
    const mesh = new THREE.Mesh(geometry, landMaterial);

    // Position and rotate the mesh
    mesh.position.set(center.x, center.y, center.z);
    mesh.rotation.x = -Math.PI / 2;

    let positionAttribute = mesh.geometry.attributes.position;

    // fbm returns an array of heightmap values
    let heightmap = FBM(
      center,
      { min: -100, max: 100 },
      {
        octaves: 16,
        frequency: 1.0,
        amplitude: 2,
        octaves: 16,
        persistence: 0.5,
        lacunarity: 2,
        exponentiation: 2.0,
        noiseZ: this.noiseZ,
      },
      size,
      this.FLAT_PLANE_SIZE,
      resolution
    );

    for (let i = 0; i < positionAttribute.count; i++) {
      positionAttribute.setZ(i, heightmap[i]);
    }

    geometry.computeVertexNormals();
    positionAttribute.needsUpdate = true;

    // Add the new mesh to the scene and new terrain chunks

    return mesh;
  }

  update() {
    // Check if the camera has moved significantly since the last update
    const cameraPosition = this.camera.position;
    if (this.needsUpdate(cameraPosition)) {
      this.updateQuadtreeTiles();
    }
  }

  needsUpdate(cameraPosition) {
    // Implement logic to decide if a quadtree update is needed based on camera position
    if (!this.lastCameraPosition) {
      this.lastCameraPosition = new THREE.Vector3().copy(cameraPosition);
      return true;
    }

    const distanceMoved = this.lastCameraPosition.distanceTo(cameraPosition);
    if (distanceMoved > 1) {
      // Adjust threshold as needed
      this.lastCameraPosition.copy(cameraPosition);
      return true;
    }

    return false;
  }
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

function arrayToWorld(i, resolution, size, center) {
  const step = size / resolution;
  const halfSize = size / 2;

  const xWorld = center.x - halfSize + step * (i % (resolution + 1));
  const yWorld = center.z - halfSize + step * floor(i / (resolution + 1));

  return { x: xWorld, y: yWorld };
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
