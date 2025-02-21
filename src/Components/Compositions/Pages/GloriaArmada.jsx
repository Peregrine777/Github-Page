import React, { useEffect, useState } from "react";
import * as Features from "../../Features";
import { SettingsMenu, Contact, Socials } from "../";
import * as Sections from "../Sections";

const Test = (darkMode, toggleDarkMode) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState("Test");
  const [lightboxStyle, setLightboxStyle] = useState(null);

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
    </div>
  );
};

export default Test;
