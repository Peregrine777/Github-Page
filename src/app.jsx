import React, { useEffect, useState } from "react";
import "./app.css";
import * as Features from "./Components/Features";
import { SettingsMenu, Contact, Socials } from "./Components/Compositions";
import * as Sections from "./Components/Compositions/Sections";
import Greetings from "./Components/Compositions/Sections/Greetings";
import * as PP from "./Components/Compositions/PortfolioPieces";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState("Test");
  const [lightboxStyle, setLightboxStyle] = useState(null);
  useEffect(() => {
    // Ensure scrolling happens after rendering
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 5); // Delay the scroll to the next tick of the event loop
  }, []);
  const [firstScrollTriggered, setFirstScrollTriggered] = useState(false);

  useEffect(() => {
    const handleFirstScroll = () => {
      // Set the flag when the user scrolls for the first time
      setFirstScrollTriggered(true);
      // Remove the event listener after the first scroll
      window.removeEventListener("scroll", handleFirstScroll);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleFirstScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleFirstScroll);
    };
  }, []);

  const scrollToSection = () => {
    const targetSection = document.getElementById("contactMe");
    if (targetSection != null) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error("Target section not found");
    }
  };

  const handleOpenLightbox = (content, style) => {
    setLightboxContent(content); // Set the content dynamically
    setLightboxStyle(style); // Set the style dynamically
    setIsLightboxOpen(true); // Open the lightbox
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.className = newMode ? "dark-mode" : "light-mode";
      return newMode;
    });
  };

  return (
    <div className="app">
      <Features.LightboxModal
        darkMode={darkMode}
        isOpen={isLightboxOpen}
        content={lightboxContent} // Can be replaced with an iframe, image, etc.
        style={lightboxStyle}
        onClose={handleCloseLightbox}
      />

      <Sections.Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className={`main ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Features.Section
          title="Greetings"
          darkMode={darkMode}
          style={{ paddingTop: "1rem" }}
          revealPercent="-50% 0px"
        >
          <Sections.Greetings
            darkMode={darkMode}
            scrollToSection={scrollToSection}
          />
        </Features.Section>

        <Features.Section title="Overview" darkMode={darkMode}>
          <Sections.Portfolio
            darkMode={darkMode}
            handleOpenLightbox={handleOpenLightbox}
          />
        </Features.Section>

        <Features.Section title="Skills" darkMode={darkMode}>
          <Sections.Skills darkMode={darkMode}> </Sections.Skills>
        </Features.Section>

        <Features.Section
          title="ContactMe"
          id="contactMe"
          darkMode={darkMode}
          revealPercent="50px 0px"
          style={{
            backgroundColor: "#0061aa",
            paddingBottom: "1rem",
            paddingTop: "1rem",
          }}
        >
          <h2 style={{ textAlign: "center", color: "white", marginTop: "0px" }}>
            Get In Touch!
          </h2>
          <Features.MinimalButton
            darkMode={darkMode}
            text="Contact"
            style={{
              color: "white",
              borderColor: "white",
              borderRadius: "5px",
            }}
            onClick={() =>
              handleOpenLightbox(<Contact darkMode={darkMode} />, {
                height: "unset",
              })
            }
          />
        </Features.Section>

        <Features.Section
          title="Portfolio"
          darkMode={darkMode}
          style={{ padding: "0px" }}
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

export default App;
