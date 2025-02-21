import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { NoiseMaterial } from "./Shaders/NoiseMaterial";
import { PointsMaterial } from "./Shaders/PointsMaterial";

export default function setupThreeJS(containerRef, sectionRef) {
  let container = containerRef.current;

  if (!container) return;

  // Set up renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });

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
  camera.position.z = 10.5;

  const cameraGroup = new THREE.Group();
  scene.add(cameraGroup);
  cameraGroup.add(camera);

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

  const cursor = {};
  cursor.x = 0;
  cursor.y = 0;
  window.addEventListener("mousemove", (event) => {
    cursor.x = (event.clientX / visualViewport.width - 0.5) * 2;
    cursor.y = (event.clientY / visualViewport.height - 0.5) * 2;
  });

  let normalizedScroll = 0.5;
  window.addEventListener(
    "scroll",
    () => {
      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;
      normalizedScroll = window.scrollY / maxScrollY;
    },
    { passive: true }
  );
  // Handle resizing
  const handleResize = (containerRef) => {
    // console.log("3jsTestContainer: ", container);
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

  const clock = new THREE.Clock();
  let previousTime = 0;

  let hasResized = false;

  const softClamp = (value, reference, max, softness) => {
    return (
      value * Math.max(0, 1 - Math.pow(Math.abs(reference / max), softness))
    );
  };

  // Animation loop
  const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    time += deltaTime;
    previousTime = elapsedTime;

    landMaterial.uniforms.time.value = time;
    pMat.uniforms.time.value = time;
    if (!hasResized) {
      handleResize();
      hasResized = true;
    }

    const parallaxX = cursor.x;
    const parallaxY = -cursor.y;

    camera.position.x += softClamp(
      (parallaxX - camera.position.x) * 0.05 * deltaTime,
      camera.position.x,
      1,
      1
    );
    camera.position.y += softClamp(
      (parallaxY - camera.position.y) * 0.05 * deltaTime,
      camera.position.y,
      1,
      1
    );

    camera.lookAt(0, 0, 0);

    cameraGroup.position.y = -(normalizedScroll - 0.5);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
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
