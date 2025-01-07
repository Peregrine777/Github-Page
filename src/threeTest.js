import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function setupThreeJS(containerRef, sectionRef) {
let container = containerRef.current;

if (!container) return;

// Set up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

console.log(container.offsetWidth, ", ", container.offsetHeight);
const pixelRatio = window.devicePixelRatio || 1;
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setPixelRatio(pixelRatio);
container.appendChild(renderer.domElement);

const backgroundColor = window.getComputedStyle(sectionRef).backgroundColor;




// Set up scene
const scene = new THREE.Scene();

console.log(backgroundColor);
scene.background = new THREE.Color(backgroundColor);
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

// Handle resizing
const handleResize = (containerRef) => {
  console.log("3jsContainer: ", container);
  console.log("Resizing");
  console.log("3js Container: ", container.offsetWidth, ", ", container.offsetHeight);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  camera.aspect = container.offsetWidth / container.offsetHeight;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", handleResize);

let hasResized = false;
// Animation loop
const animate = () => {
  if (!hasResized) {
    handleResize();
    hasResized = true;
  }
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();

const handleDarkModeChange = () => {
  const backgroundColor = window.getComputedStyle(sectionRef).backgroundColor;
  scene.background = new THREE.Color(backgroundColor);
}

//return the threeJS instance
return {
  handleResize,
  handleDarkModeChange,
  scene,
  cleanup: () => {
    window.removeEventListener("resize", handleResize);
    renderer.dispose();
    container.removeChild(renderer.domElement);
  },
};

// Cleanup on component unmount
return () => {
  window.removeEventListener("resize", handleResize);
  renderer.dispose();
  container.removeChild(renderer.domElement);
};
}

