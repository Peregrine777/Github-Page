<link href="https://vjs.zencdn.net/8.22.0/video-js.css" rel="stylesheet" />;

import React, { useEffect, useState } from "react";
import * as Features from "../../Features";
import { SettingsMenu, Contact, Socials } from "..";
import * as Sections from "../Sections";
import "./GameEngine.css";

// video path

const GameEnginePage = (darkMode, toggleDarkMode) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState("Test");
  const [lightboxStyle, setLightboxStyle] = useState(null);

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
              src={`assets/Images/Peregrine_${
                darkMode ? "dark.png" : "light.png"
              }`}
            ></img>
          </div>
        </Features.Section>

        <Features.Section
          title="motivation"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <div className="flex-container">
            <div className="column-content">
              <h2>Application</h2>
              <h3>Drawing to the screen</h3>
              <ul>
                <li> Building an exe</li>
                <li> Using OpenGL</li>
              </ul>
              <h3>Exploring Libraries</h3>
              <ul>
                <li> ImGui</li>
                <li> Glad</li>
                <li> GLFW</li>
                <li> GLM</li>
              </ul>
              <p> Realtime Graphing, debugging and UI</p>
              <p> Interactivity and control</p>
            </div>
            <div className="column-content">
              <h2>Meshes</h2>
              <h3> Loading Mesh Files</h3>
              <ul>
                <li> Tetrahedral Meshes</li>
                <li> Hexahedral Meshes</li>
                <li> Quad/Tri Meshes</li>
              </ul>
              <h3> Processing Geometry</h3>
              <ul>
                <li> Correct edge winding</li>
                <li> Extract external Polyhedron</li>
                <li> Create edge networks for linked polyhedra</li>
              </ul>
            </div>
            <div className="column-content">
              <h2>Physics</h2>
              <h3> Exploring solvers</h3>
              <ul>
                <li> PBDS</li>
                <li> XPBDS</li>
              </ul>

              <h3>"Regular" Constraints</h3>
              <ul>
                <li>Distance</li>
                <li>Floor with Friction</li>
                <li>Volume</li>
              </ul>
              <h3>Novel Constraints for volumetric meshes</h3>
              <ul>
                <li>Face Distance</li>
                <li>Face Angle</li>
              </ul>
            </div>
            <div className="column-content">
              <h2>Cutting</h2>
              <h3> Realtime slicing</h3>
              <ul>
                <li>Performant plane/Poly intersection testing</li>
                <li>Sliced face generation</li>
                <li>Integration with physics</li>
              </ul>
            </div>
          </div>
        </Features.Section>

        <Features.Section
          title="Application"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <h2>Application</h2>
          <p>
            The application is a 3D game engine that allows for the creation of
            3D applications. It is built using OpenGL and WebGL, and is designed
            to be easy to use and extend. The engine supports a variety of
            features, including physics, rendering, and user input.
          </p>
        </Features.Section>

        <Features.Section
          title="Meshes"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <div className="column"></div>
          <div className="column">
            {" "}
            <div className="column-content">
              <video
                id="my-video"
                className="video-js"
                controls
                preload="auto"
                width="640"
                height="264"
                poster="assets/Videos/Deformable_Volume.jpg"
                data-setup="{}"
              >
                <source
                  src="assets/Videos/Deformable_Volume.mp4"
                  type="video/mp4"
                />
                <p className="vjs-no-js">
                  To view this video please enable JavaScript, and consider
                  upgrading to a web browser that
                  <a
                    href="https://videojs.com/html5-video-support/"
                    target="_blank"
                  >
                    supports HTML5 video
                  </a>
                </p>
              </video>
            </div>
          </div>
        </Features.Section>

        <Features.Section
          title="Meshes"
          darkMode={darkMode}
          revealPercent="50px 0px"
        ></Features.Section>

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

export default GameEnginePage;
