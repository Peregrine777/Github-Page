import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { NoiseMaterial } from "./Shaders/NoiseMaterial";
import { PointsMaterial } from "./Shaders/PointsMaterial";

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
    40,
    container.offsetWidth / container.offsetHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Add a cube to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  //scene.add(cube);

  const planeGeom = new THREE.PlaneGeometry(10, 10, 100, 100);
  let time = 0.0;
  /*
        uniforms: {
        time: { value: 0.0 },
        noiseScale: { value: 1.0 },
        noiseStrength: { value: 1.0 },
        noiseFrequency: { value: 1.0 },
        noiseSpeed: { value: 1.0 },
        noiseOffset: { value: new Vector3(0, 0, 0) },
        color: { value: new THREE.Color(0x0000ff) },
         bgColor: { value: new THREE.Color(0x000000) },
      },
      */
  let landMaterial = new THREE.ShaderMaterial(NoiseMaterial);
  landMaterial.uniforms = NoiseMaterial.uniforms;
  landMaterial.transparent = true;
  landMaterial.vertexShader = NoiseMaterial.vertexShader;
  landMaterial.fragmentShader = NoiseMaterial.fragmentShader;
  landMaterial.uniforms.bgColor.value = new THREE.Color(backgroundColor);
  landMaterial.wireframe = true;

  let pMat = new THREE.ShaderMaterial(PointsMaterial);
  pMat.uniforms = PointsMaterial.uniforms;
  pMat.transparent = true;
  pMat.vertexShader = PointsMaterial.vertexShader;
  pMat.fragmentShader = PointsMaterial.fragmentShader;

  const plane = new THREE.Mesh(planeGeom, landMaterial);
  plane.position.set(0, -0.2, 5.1);
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane);

  const points = new THREE.Points(planeGeom, pMat);
  points.position.set(0, -0.2, 5.1);
  points.rotation.x = -Math.PI / 2;
  scene.add(points);

  // Handle resizing
  const handleResize = (containerRef) => {
    // console.log("3jsContainer: ", container);
    // console.log("Resizing");
    // console.log(
    //   "3js Container: ",
    //   container.offsetWidth,
    //   ", ",
    //   container.offsetHeight
    // );
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
  };
  window.addEventListener("resize", handleResize);

  let hasResized = false;
  // Animation loop
  const animate = () => {
    time += 0.001;
    landMaterial.uniforms.time.value = time;
    pMat.uniforms.time.value = time;
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
    console.log("Dark Mode Changed");
    const backgroundColor = window.getComputedStyle(sectionRef).backgroundColor;
    const bgCol = new THREE.Color(backgroundColor);
    const rgb = backgroundColor.match(/\d+/g).map(Number); // Extract RGB values
    const inverseColor = new THREE.Color(
      1 - rgb[0] / 255,
      1 - rgb[1] / 255,
      1 - rgb[2] / 255
    );
    console.log("BackgroundColor: ", backgroundColor);
    scene.background = new THREE.Color(backgroundColor);
    landMaterial.uniforms.bgColor.value = new THREE.Color(backgroundColor);
    // Set color of foreground to 1-backgroundColor
    landMaterial.uniforms.color.value = new THREE.Color(inverseColor);
    console.log("ForegroundColor: ", inverseColor);
    pMat.uniforms.color.value = new THREE.Color(inverseColor);
    landMaterial.uniforms.color.value = new THREE.Color(inverseColor);
  };

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
}
