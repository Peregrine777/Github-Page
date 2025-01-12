import React, { useEffect, useState } from "react";
import "./app.css";
import Section from "./Components/Features/Section.jsx";
import ThreeJSSection from "./Components/Features/ThreeJSCanvas.jsx";
import FlexReveal from "./Components/Features/FlexReveal.jsx";
import SettingsMenu from "./Components/Compositions/SettingsMenu.jsx";
import MinimalButton from "./Components/Features/MinimalButton.jsx";
import LightboxModal from "./Components/Features/LightboxModal.jsx";
import Socials from "./Components/Compositions/Socials.jsx";
import Skills from "./Components/Compositions/Skills.jsx";
import Header from "./Components/Compositions/Header.jsx";
import Footer from "./Components/Compositions/Footer.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState(null);
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

  const handleOpenLightbox = (content) => {
    setLightboxContent(content); // Set the content dynamically
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
      <LightboxModal
        darkMode={darkMode}
        isOpen={isLightboxOpen}
        content={lightboxContent} // Can be replaced with an iframe, image, etc.
        onClose={handleCloseLightbox}
      />

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className={`main ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Section
          title="Greetings"
          darkMode={darkMode}
          style={{ paddingTop: "6rem" }}
        >
          <div className="container">
            <div
              className="column"
              style={{ paddingLeft: "10%", flexGrow: "0" }}
            >
              <div style={{ flex: "1", flexDirection: "vertical" }}>
                <div style={{ justifyContent: "center", padding: "2rem" }}>
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "36",
                      textWrap: "wrap",
                      paddingLeft: "0rem",
                    }}
                  >
                    Let's make something amazing together!
                  </h2>
                </div>
                <p>
                  {" "}
                  I am a software engineer with a passion for creating
                  innovative solutions.{" "}
                </p>
                <p>
                  {" "}
                  I have experience in various programming languages and
                  frameworks.{" "}
                </p>
                <p>
                  {" "}
                  I enjoy collaborating with teams and solving complex problems.{" "}
                </p>
              </div>
              <Socials darkMode={darkMode} />
            </div>
            <div
              className="column"
              margin="4rem"
              padding="4rem"
              style={{ flexShrink: "3" }}
            >
              <img
                src="assets/Images/Profile.png"
                alt="Profile"
                style={{
                  maxWidth: "300px",
                  verticalAlign: "middle",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </Section>

        <Section title="Overview" darkMode={darkMode}>
          <FlexReveal
            style={{ justifyContent: "center" }}
            childStyle={{ minWidth: "400px" }}
          >
            <div className="majorColumn">
              <h2 style={{ textAlign: "center" }}>Game Development</h2>
              <a
                href="https://chanel-parfait.itch.io/gloria-armada"
                target="_blank"
                rel="noreferer"
              >
                <img
                  className="clickableImage"
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
              <h3>Gloria Armada</h3>
              <p>
                Gloria Armada combines 2D shootemup genres but with physics
                based controls and a perspective that changes between top-down,
                side-on and rear aspect!{" "}
              </p>
              <MinimalButton
                darkMode={darkMode}
                text="More Info"
                onClick={() =>
                  handleOpenLightbox(
                    <div style={{ textAlign: "center" }}>
                      <h2>Gloria Armada</h2>
                      <p>
                        Gloria Armada combines 2D shoot-'em-up genres but with
                        physics-based controls and a perspective that changes
                        between top-down, side-on, and rear aspect!
                      </p>
                      <iframe
                        src="https://itch.io/embed-upload/10600258?color=0484d1"
                        width="100%"
                        height="60%"
                      >
                        <a href="https://chanel-parfait.itch.io/gloria-armada">
                          Play Gloria Armada on itch.io
                        </a>
                      </iframe>
                    </div>
                  )
                }
              />
            </div>
            <div className="majorColumn">
              <h2 style={{ textAlign: "center" }}>Data Analysis</h2>
              <p>
                Gloria Armada combines 2D shootemup genres but with physics
                based controls and a perspective that changes between top-down,
                side-on and rear aspect!{" "}
              </p>
            </div>
            <div className="majorColumn">
              <h2 style={{ textAlign: "center" }}>
                Interactive Visualizations
              </h2>
              <div className="column-content" id="threejsContainer">
                <ThreeJSSection
                  darkMode={darkMode}
                  containerID="threejsContainer"
                />
              </div>
            </div>
          </FlexReveal>
        </Section>

        <Section title="Skills" darkMode={darkMode}>
          <Skills darkMode={darkMode} />
        </Section>

        <Section title="Footer" darkMode={darkMode}>
          <Footer darkMode={darkMode} />
        </Section>
      </main>
    </div>
  );
};

export default App;
