import React, { useEffect, useState } from "react";
import * as Features from "../../Features";
import { SettingsMenu, Contact, Socials } from "../";
import setupThreeJS from "../../../three.js";
import * as Sections from "../Sections";

const Interactives = (_darkMode, _toggleDarkMode) => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState("Test");
  const [lightboxStyle, setLightboxStyle] = useState(null);
  const [threeJSInstance, setThreeJSInstance] = useState(null);

  // if given _darkMode and _toggleDarkMode, use them
  useEffect(() => {
    if (_darkMode !== undefined) setDarkMode(_darkMode);
  }, [_darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      return newMode;
    });
  };
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

  const handleOpenLightbox = (content, style) => {
    document.body.classList.add("no-scroll");
    // Add a new history state when opening
    history.pushState({ lightboxOpen: true }, "", "#lightbox");
    setLightboxContent(content); // Set the content dynamically
    setLightboxStyle(style); // Set the style dynamically
    setIsLightboxOpen(true); // Open the lightbox
  };

  const handleCloseLightbox = () => {
    document.body.classList.remove("no-scroll");
    setIsLightboxOpen(false);
    // Go back in history (removing the lightbox state)
    // Ensure we only go back if we actually added a state
    if (history.state?.lightboxOpen) {
      setTimeout(() => history.back(), 100); // ✅ Debounce back action
    }
  };
  return (
    <div>
      <Features.LightboxModal
        darkMode={darkMode}
        isOpen={isLightboxOpen}
        content={lightboxContent} // Can be replaced with an iframe, image, etc.
        style={lightboxStyle}
        onClose={handleCloseLightbox}
      />
      <Sections.Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Features.Section
        title="about"
        style={{ minHeight: "70vh", marginTop: "100px" }}
        darkMode={darkMode}
        revealPercent="50px 0px"
      >
        <div className="column-content" id="threejsContainer">
          <Features.ThreeJSSection
            darkMode={darkMode}
            containerID="threejsContainer"
            threeJSEntry={setupThreeJS}
            onInit={handleThreeJSInit}
          />
        </div>
      </Features.Section>

      <Features.Section
        title="Footer"
        darkMode={darkMode}
        revealPercent="50px 0px"
      >
        <Sections.Footer darkMode={darkMode} />
      </Features.Section>
    </div>
  );
};

export default Interactives;
