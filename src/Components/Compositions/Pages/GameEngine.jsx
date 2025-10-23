import React, { useEffect, useState } from "react";
import * as Features from "../../Features";
import { SettingsMenu, Contact, Socials } from "..";
import * as Sections from "../Sections";
import "./GameEngine.css";

<link href="https://vjs.zencdn.net/8.22.0/video-js.css" rel="stylesheet" />;

// video path

const GameEnginePage = (props) => {
  document.body.classList.remove("no-scroll");

  // Check localStorage first for dark mode setting
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
          <div className="flex-container" style={{ padding: "10px" }}>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#80c352" }}
              >
                <h2>Application</h2>
              </div>
              <div className="column-content-inner">
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
            </div>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#a666e1" }}
              >
                <h2>Meshes</h2>
              </div>
              <div className="column-content-inner">
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
            </div>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#30acec" }}
              >
                <h2>Physics</h2>
              </div>
              <div className="column-content-inner">
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
            </div>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#e29d3e" }}
              >
                <h2>Cutting</h2>
              </div>
              <div className="column-content-inner">
                <h3> Realtime slicing</h3>
                <ul>
                  <li>Performant plane/Poly intersection testing</li>
                  <li>Sliced face generation</li>
                  <li>Integration with physics</li>
                </ul>
              </div>
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
                <source src={DeformableVolumeMp4} type="video/mp4" />
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
