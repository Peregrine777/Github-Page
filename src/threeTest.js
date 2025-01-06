import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function setupThreeJS(containerRef) {
const container = containerRef.current;

if (!container) return;

// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

// Set up scene
const scene = new THREE.Scene();

// Add a camera
const camera = new THREE.PerspectiveCamera(
  75,
  container.offsetWidth / container.offsetHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Add a cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();

// Handle resizing
const handleResize = () => {
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", handleResize);

// Cleanup on component unmount
return () => {
  window.removeEventListener("resize", handleResize);
  renderer.dispose();
  container.removeChild(renderer.domElement);
};
}