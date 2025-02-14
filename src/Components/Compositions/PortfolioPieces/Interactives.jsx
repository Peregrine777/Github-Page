import React from "react";
import * as Features from "../../Features";
import setupThreeJS from "../../../three.js";
import { Container } from "postcss";

const Interactives = ({ darkMode }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Interactive Media</h2>
      <div
        id="flexLB"
        style={{ display: "flex", width: "90%", height: "70%", margin: "auto" }}
      >
        <div className="column-content" id="pf3js">
          <Features.ThreeJSSection
            darkMode={darkMode}
            containerID="pf3js"
            threeJSEntry={setupThreeJS}
            style={{ maxWidth: "900px" }}
          />
        </div>
        <div style={{ flex: "1" }}>
          <p style={{ width: "40%" }}>
            Interactive visualizations, simulations, and animations using react,
            three.js
          </p>
        </div>
      </div>
    </div>
  );
};
export default Interactives;
