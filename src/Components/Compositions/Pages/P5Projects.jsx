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

  // State for controlling game visibility
  const [showGame, setShowGame] = useState(false);

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
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "600px",
              border: darkMode ? "2px solid #444" : "2px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: darkMode ? "#1a1a1a" : "#f0f0f0",
            }}
          >
            {!showGame ? (
              // Game preview with play button
              <div
                onClick={() => setShowGame(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
                      <rect width="800" height="600" fill="${
                        darkMode ? "#1a1a40" : "#2a2a60"
                      }"/>
                      <rect x="150" y="100" width="30" height="200" fill="#4a4a4a"/>
                      <rect x="350" y="0" width="40" height="200" fill="#4a4a4a"/>
                      <rect x="450" y="0" width="40" height="300" fill="#4a4a4a"/>
                      <rect x="450" y="400" width="40" height="400" fill="#4a4a4a"/>
                      <rect x="600" y="100" width="30" height="300" fill="#4a4a4a"/>
                      <circle cx="100" cy="200" r="8" fill="#00ff00"/>
                      <circle cx="700" cy="100" r="15" fill="#00ff00" stroke="#ffffff" stroke-width="2"/>
                      <text x="700" y="110" fill="white" font-size="20" text-anchor="middle">+</text>
                      <circle cx="350" cy="300" r="6" fill="#ffff00"/>
                      <polygon points="355,295 365,305 345,305" fill="#0088ff"/>
                      <polygon points="450,195 465,205 455,220 445,210" fill="#ff8800"/>
                      <text x="400" y="350" fill="white" font-size="16" text-anchor="middle">AI-Powered Lights</text>
                      <text x="400" y="370" fill="white" font-size="12" text-anchor="middle">Escape the intelligent searchlights!</text>
                    </svg>
                  `)}'`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid rgba(255, 255, 255, 0.8)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "0",
                      height: "0",
                      borderLeft: "20px solid white",
                      borderTop: "12px solid transparent",
                      borderBottom: "12px solid transparent",
                      marginLeft: "4px",
                    }}
                  />
                </div>
              </div>
            ) : (
              // Game iframe with close button
              <>
                <button
                  onClick={() => setShowGame(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "rgba(255, 0, 0, 0.8)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    cursor: "pointer",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 0, 0, 1)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 0, 0, 0.8)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  ×
                </button>
                <iframe
                  src={`${
                    import.meta.env.BASE_URL
                  }p5BlobEscape/blob-escape.html`}
                  title="Blob Escape Game"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{
                    border: "none",
                    borderRadius: "6px",
                  }}
                />
              </>
            )}
          </div>
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
