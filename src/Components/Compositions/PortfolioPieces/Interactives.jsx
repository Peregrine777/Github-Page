import React from "react";
import * as Features from "../../Features";
import setupThreeJS from "../../../three.js";

const Interactives = ({ darkMode }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Interactive Media</h2>
      <div className="column-content" id="pf3js">
        <Features.ThreeJSSection
          darkMode={darkMode}
          containerID="pf3js"
          threeJSEntry={setupThreeJS}
        />
      </div>
    </div>
  );
};
export default Interactives;
