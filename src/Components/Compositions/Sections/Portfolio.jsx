import React from "react";
import * as Features from "../../Features/index";
import * as PP from "../PortfolioPieces/index";
import "./Portfolio.css";
import setupThreeJS from "../../../threeTest.js";

const Portfolio = ({ darkMode, handleOpenLightbox }) => {
  const boldTextCol = darkMode ? "white" : "#333";
  return (
    <Features.FlexReveal
      style={{ justifyContent: "center", gap: "2rem" }}
      childStyle={{ minWidth: "400px" }}
    >
      {/* Game Development Section */}
      <div
        className={`portfolioCard ${darkMode ? "dark-mode" : "light-mode"}`}
        style={{ cursor: "pointer" }} // Make it visually appear clickable
        role="button" // Indicate to assistive technologies that this is a button-like element
        tabIndex="0" // Make it focusable for keyboard interaction
        onClick={() =>
          handleOpenLightbox(
            <PP.GameDev />,
            { height: "80vh" } // Fix: use vh instead of lvh
          )
        }
      >
        <h2 style={{ color: boldTextCol }}>GameDev</h2>
        <h3>Games, game engines, physics and rendering</h3>
        <a
          href="https://chanel-parfait.itch.io/gloria-armada"
          target="_blank"
          rel="noreferer"
        >
          <img
            src="assets/Images/Gloria_Armada.png"
            alt="Gloria Armada"
            style={{
              maxWidth: "100%",
              objectFit: "contain",
              alignSelf: "normal",
              height: "auto",
            }}
          />
        </a>
      </div>

      {/* Data Analysis Section */}
      <div
        className={`portfolioCard ${darkMode ? "dark-mode" : "light-mode"}`}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex="0"
        onClick={() =>
          handleOpenLightbox(<PP.AnalyticsOverview darkMode={darkMode} />, {
            height: "80vh",
          })
        }
      >
        <h2 style={{ color: boldTextCol }}>Data Analysis</h2>
        <p>
          Using data to uncover insights, drive business decisions, and create
          actionable solutions, with expertise in statistical analysis, machine
          learning, and visualization.
        </p>
        <img
          src="assets/Images/tableau.webp"
          alt="tableau"
          style={{
            maxWidth: "100%",
            objectFit: "contain",
            alignSelf: "normal",
            height: "auto",
          }}
        />
      </div>

      {/* Interactive Visualizations Section */}
      <div
        className={`portfolioCard ${darkMode ? "dark-mode" : "light-mode"}`}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex="0"
        onClick={() =>
          handleOpenLightbox(<PP.Interactives darkMode={darkMode} />, {
            height: "80vh",
          })
        }
      >
        <h2 style={{ textAlign: "center" }}>Interactive Media</h2>
        <p>
          Interactive visualizations, simulations, and animations using react,
          three.js
        </p>
        <div className="column-content" id="threejsContainer">
          <Features.ThreeJSSection
            darkMode={darkMode}
            containerID="threejsContainer"
            threeJSEntry={setupThreeJS}
          />
        </div>
      </div>
    </Features.FlexReveal>
  );
};

export default Portfolio;
