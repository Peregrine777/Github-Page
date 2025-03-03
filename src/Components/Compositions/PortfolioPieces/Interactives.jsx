import React, { useEffect, useRef, useState } from "react";
import * as Features from "../../Features";
import setupThreeJS from "../../../three.js";
import SceneSelector from "../../Features/ThreeJSSceneSelector.jsx";
//import setupThreeJS from "../../../threeTest.js";

const Interactives = ({ darkMode }) => {
  const [threeJSInstance, setThreeJSInstance] = useState(null);

  const handleThreeJSInit = (instance) => {
    setThreeJSInstance(instance); // Capture returned Three.js instance
  };

  // Function to switch scenes
  const switchScene = (selectedScene) => {
    if (!threeJSInstance?.current?.scenes) return;
    if (selectedScene) {
      console.log(`Switching to scene: ${selectedScene.name || sceneIndex}`);
      threeJSInstance.current.switchScene(selectedScene);
      // Add logic to switch the scene, e.g., updating a Three.js renderer
    }
  };

  //Take the scenes from threejs/loaded scenes and make a button for each that call switchScene
  // Access threejs stuff here

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Interactive Media</h2>
      <div
        id="flexLB"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          margin: "auto",
        }}
      >
        <div
          className="column-content"
          id="pf3js"
          style={{
            maxHeight: "600px",
            minWidth: "250px",
            minHeight: "250px",

            maxWidth: "900px",
          }}
        >
          <Features.ThreeJSSection
            darkMode={darkMode}
            containerID="pf3js"
            threeJSEntry={setupThreeJS}
            onInit={handleThreeJSInit}
          />
        </div>

        <div style={{ flex: "1", minWidth: "400px" }}>
          <p>
            Interactive visualizations, simulations, and animations using react,
            three.js
          </p>
        </div>
      </div>
      {threeJSInstance && (
        <SceneSelector
          threeJSInstance={threeJSInstance}
          switchScene={switchScene}
        />
      )}
    </div>
  );
};
export default Interactives;
