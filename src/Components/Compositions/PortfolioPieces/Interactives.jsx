import React from "react";
import * as Features from "../../Features";
import setupThreeJS from "../../../three.js";
//import setupThreeJS from "../../../threeTest.js";

const Interactives = ({ darkMode }) => {
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
          />
        </div>
        <div style={{ flex: "1", minWidth: "400px" }}>
          <p>
            Interactive visualizations, simulations, and animations using react,
            three.js
          </p>
        </div>
      </div>
    </div>
  );
};
export default Interactives;
