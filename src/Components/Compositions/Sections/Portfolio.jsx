import React from "react";
import * as Features from "../../Features/index";
import * as PP from "../PortfolioPieces/index";
import "./Portfolio.css";
import setupThreeJS from "../../../threeTest.js";

const Portfolio = ({ darkMode, handleOpenLightbox }) => {
  const boldTextCol = darkMode ? "white" : "#333";
  return (
    <Features.FlexReveal style={{ gap: "2rem" }} className="content-scroll">
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
        <p>
          Games, game engines, physics and rendering <br />
          <br />
          <br />
        </p>
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
          Senior Data Analyst with 8+ years of experience
          <br />
          Senior Data Analyst with 8+ years of experience, including work with
          global enterprises across international markets
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
