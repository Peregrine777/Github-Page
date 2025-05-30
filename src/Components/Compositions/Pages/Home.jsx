import React, { useEffect, useState } from "react";

import * as Features from "../../Features";
import { SettingsMenu, Contact, Socials } from "../";
import * as Sections from "../Sections";

const Home = () => {
  // Initialize dark mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : true;
  });

  // Sync dark mode with localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState("Test");
  const [lightboxStyle, setLightboxStyle] = useState(null);

  const sceneModules = import.meta.glob("./Scenes/**/*.js");
  const removeHash = () => {
    // If the URL contains #lightbox, remove it
    if (window.location.hash === "#lightbox") {
      window.history.replaceState(null, "", window.location.pathname); // Remove the hash
    }
  };

  // Remove hash on component mount (for initial load)
  removeHash();
  //

  async function loadScenes() {
    const scenes = [];
    for (const path in sceneModules) {
      const module = await sceneModules[path]();
      for (const key in module) {
        if (typeof module[key] === "function" && key.startsWith("sc_")) {
          scenes.push(module[key]); // Assuming scene classes are exported
        }
      }
    }
    return scenes;
  }

  useEffect(() => {
    loadScenes().then((sceneList) => {
      console.log("Loaded scenes:", sceneList);
    });
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

  useEffect(() => {
    //Apply darkmode to body on darkMode change
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const scrollToSection = () => {
    const targetSection = document.getElementById("contactMe");
    if (targetSection != null) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error("Target section not found");
    }
  };

  const handleOpenLightbox = (content, style) => {
    requestAnimationFrame(() => {
      document.body.classList.add("no-scroll");
    });
    history.pushState({ lightboxOpen: true }, "", "#lightbox");

    setLightboxContent(content); // Set the content dynamically
    setLightboxStyle(style); // Set the style dynamically
    setIsLightboxOpen(true); // Open the lightboxC
  };

  const handleCloseLightbox = () => {
    requestAnimationFrame(() => {
      document.body.classList.remove("no-scroll");
      setIsLightboxOpen(false);

      if (window.location.hash === "#lightbox") {
        setTimeout(() => history.back(), 100);
      }
    });
  };

  useEffect(() => {
    const handlePopState = (event) => {
      console.log("Popstate event:", event.state);
      if (!event.state?.lightboxOpen) {
        console.log("Closing lightbox");
        handleCloseLightbox();
      }

      // If url contains #lightbox, remove it
      if (window.location.hash === "#lightbox") {
        window.history.replaceState(null, "", window.location.pathname); // This will remove the hash
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="app">
      <Features.LightboxModal
        lbName=""
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
          style={{ paddingTop: "1rem", minHeight: "70vh", maxHeight: "80vh" }}
          revealPercent="-50% 0px"
        >
          <Sections.Greetings
            darkMode={darkMode}
            scrollToSection={scrollToSection}
          />
        </Features.Section>

        <Features.Section
          title="Overview"
          darkMode={darkMode}
          revealPercent="50px 0px"
          style={{ padding: "0" }}
        >
          <Sections.Portfolio
            darkMode={darkMode}
            handleOpenLightbox={handleOpenLightbox}
          />
        </Features.Section>

        <Features.Section
          title="Skills"
          darkMode={darkMode}
          revealPercent="10px 0px"
        >
          <Sections.Skills darkMode={darkMode}> </Sections.Skills>
        </Features.Section>

        <Features.Section
          title="ContactMe"
          id="contactMe"
          darkMode={darkMode}
          revealPercent="50px 0px"
          style={{
            backgroundColor: "#0061aa",
            paddingBottom: "3rem",
            paddingTop: "2.5rem",
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
          title=""
          darkMode={darkMode}
          style={{ padding: "0px" }}
        ></Features.Section>
        <Features.Section
          title="Footer"
          darkMode={darkMode}
          revealPercent="50px 0px"
          style={{ padding: "10px", paddingTop: "2rem" }}
        >
          <Sections.Footer darkMode={darkMode} />
        </Features.Section>
      </main>
    </div>
  );
};

export default Home;
