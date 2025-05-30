import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Features from "../../Features";
import { SettingsMenu, Contact, Socials } from "../";
import * as Sections from "../Sections";

import "./GloriaArmada.css";

const Test = (props) => {
  document.body.classList.remove("no-scroll");

  const [localDarkMode, setLocalDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : true;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(localDarkMode));
  }, [localDarkMode]);

  const localToggleDarkMode = () => {
    setLocalDarkMode((prevMode) => !prevMode);
  };
  const darkMode = props.darkMode ?? localDarkMode;
  const toggleDarkMode = props.toggleDarkMode ?? localToggleDarkMode;

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState("Test");
  const [lightboxStyle, setLightboxStyle] = useState(null);
  const navigate = useNavigate();

  const handleOpenLightbox = (content, style) => {
    document.body.classList.add("no-scroll");

    history.pushState({ lightboxOpen: true }, "", "#lightbox");
    setLightboxContent(content);
    setLightboxStyle(style);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    document.body.classList.remove("no-scroll");
    setIsLightboxOpen(false);
    if (history.state?.lightboxOpen) {
      setTimeout(() => history.back(), 100);
    }
  };
  return (
    <div>
      <Features.LightboxModal
        darkMode={darkMode}
        isOpen={isLightboxOpen}
        content={lightboxContent}
        style={lightboxStyle}
        onClose={handleCloseLightbox}
      />
      <Sections.Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Features.Section
          title="about"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <div>
            {" "}
            <img
              className="clickableImage"
              src={`assets/Images/Gloria_Armada.png`}
              alt="Gloria Armada"
              style={{ height: "auto", width: "90vw" }}
              onClick={() => {
                handleOpenLightbox(
                  <iframe
                    src="https://itch.io/embed-upload/10600258?color=0484d1"
                    style={{ width: "90vw", height: "80vh" }}
                  >
                    <a href="https://chanel-parfait.itch.io/gloria-armada">
                      Play Gloria Armada on itch.io
                    </a>
                  </iframe>,
                  { width: "95%", height: "80vh" }
                );
              }}
            ></img>
          </div>
        </Features.Section>

        <Features.Section
          title="Overview"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <div className="flex-container" style={{ padding: "10px" }}>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#80c352" }}
              >
                <h2>Physics</h2>
              </div>
              <div className="column-content-inner">
                <h3>Full 3D Aerodynamics Model</h3>
                <ul>
                  <li> Modular component based airframe definition</li>
                  <li> Serialized Plug/Play Airframes</li>
                  <li> Global and Local paramaters (gravity/drag etc)</li>
                  <li> Stall, COP change and thrust vectoring </li>
                </ul>
                <h3>API</h3>
                <ul>
                  <li> Access for sensor output and control inputs</li>
                </ul>
                <h3>Misc</h3>
                <ul>
                  <li>
                    Fracturing and breakup with preservation of angular and part
                    momentum
                  </li>
                </ul>
              </div>
            </div>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#a666e1" }}
              >
                <h2>AI</h2>
              </div>
              <div className="column-content-inner">
                <h3> State Machine AI</h3>
                <ul>
                  <li> Fly to Location</li>
                  <li> Fly to Target</li>
                  <li> Fly Heading</li>
                  <li> Intercept</li>
                  <li> Formation with </li>
                  <li> Shoot At Target </li>
                  <li> Evade </li>
                </ul>
                <h3> Features </h3>
                <ul>
                  <li> Targeting with 1st and 2nd order intercepts</li>
                  <li> Target prioritization </li>
                </ul>
              </div>
            </div>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#30acec" }}
              >
                <h2>Graphics</h2>
              </div>
              <div className="column-content-inner">
                <h3> Particles </h3>
                <ul>
                  <li>
                    {" "}
                    Global Particle Manager with intelligent pooling and culling{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Features.Section>

        <Features.Section
          title="Physics"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <h3>Physics </h3>
          <h4>Full Aerodynamic Model</h4>
          <div
            className="flex-container"
            style={{ padding: "10px", maxWidth: "700px" }}
          >
            <p>
              Customizable aircraft with calculated SO, LUT based lift model per
              surface <br />
              Includes calculation of Center of Pressure varying per surface,
              lift shadow effects, angular drag, and thrust vectoring.
            </p>
            <img
              src="assets/Images/GloriaArmada/Physics.png"
              style={{ maxWidth: "300px", height: "auto" }}
              alt="Physics Model"
            />
          </div>

          <h4>Disintegration</h4>

          <div className="flex-container" style={{ padding: "10px" }}>
            <p>
              Fracturing and breakup with preservation of angular and part
              momentum.
            </p>
            <img
              src="assets/Images/GloriaArmada/Fracture2.png"
              style={{ maxWidth: "300px", height: "auto" }}
              alt="Disintegration"
            />
            <img
              src="assets/Images/GloriaArmada/Fracture.png"
              style={{ maxWidth: "300px", height: "auto" }}
              alt="Disintegration"
            />
          </div>
        </Features.Section>

        <Features.Section
          title="AI"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <h3>AI</h3>
        </Features.Section>

        <Features.Section
          title="Graphics"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <h3>Graphics</h3>
        </Features.Section>

        <Features.Section
          title="Footer"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <Sections.Footer darkMode={darkMode} />
        </Features.Section>
      </main>
    </div>
  );
};

export default Test;
