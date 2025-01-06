import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import setupThreeJS from "../threeTest.js";

const ThreeJSSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const setup = setupThreeJS(containerRef);
    return setup; 
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        border: "2px solid #ccc", // Add border for the box effect
        borderRadius: "8px", // Optional rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional shadow for effect
        position: "relative",
        overflow: "hidden", // Ensure canvas doesn't spill outside
      }}
    />
  );
};

export default ThreeJSSection;
