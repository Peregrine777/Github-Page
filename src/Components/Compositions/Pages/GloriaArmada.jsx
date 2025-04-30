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
            <iframe
              height="167"
              frameborder="0"
              src="https://itch.io/embed/2620999"
              width="552"
            >
              <a href="https://chanel-parfait.itch.io/gloria-armada">
                Gloria Armada by Chanel Parfait, Alexis986, iMxttq, samMcksell
              </a>
            </iframe>
          </div>
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
