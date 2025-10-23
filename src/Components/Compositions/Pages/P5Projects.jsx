import React, { useState, useEffect } from "react";
import BlobEscapeGame from "../../P5Projects/BlobEscape/BlobEscapeGame";
import * as Features from "../../Features";
import * as Sections from "../Sections";

const P5Projects = () => {
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

  useEffect(() => {
    //Apply darkmode to body on darkMode change
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{
        backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5",
        minHeight: "100vh",
        color: darkMode ? "white" : "#333",
      }}
    >
      <Sections.Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className={`main ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Features.Section
          title="Blob Escape Game"
          darkMode={darkMode}
          revealPercent="50px 0px"
          style={{ padding: "0" }}
        >
          <BlobEscapeGame />
        </Features.Section>

        <Features.Section
          title="Coming Soon"
          darkMode={darkMode}
          revealPercent="50px 0px"
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              borderTop: `1px solid ${darkMode ? "#333" : "#ddd"}`,
            }}
          >
            <h3 style={{ marginBottom: "20px", color: "#00ff88" }}>
              More Projects Coming Soon!
            </h3>
            <p style={{ opacity: "0.7" }}>
              This section will be expanded with additional p5.js projects,
              including:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "20px 0",
                opacity: "0.7",
              }}
            >
              <li>🎨 Generative art pieces</li>
              <li>🌊 Physics simulations</li>
              <li>🎮 More interactive games</li>
              <li>📊 Data visualizations</li>
            </ul>
          </div>
        </Features.Section>

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

export default P5Projects;
