import React, { useState, useEffect } from "react";
import FlexReveal from "../Features/FlexReveal";
import MinimalButton from "../Features/MinimalButton";

const Socials = ({ darkMode, scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setShowSocials(true);
    } else {
      setShowSocials(false);
    }
  }, [isHovered]);

  return (
    <div>
      <FlexReveal
        revealMode="threshold"
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          gap: "2rem",
        }}
      >
        <div className="buttons" style={{ display: "flex", gap: "1rem" }}>
          <MinimalButton
            darkMode={darkMode}
            text="Résumé"
            onClick={() => window.open("assets/Files/Resume.pdf", "_blank")}
          />
          <MinimalButton
            darkMode={darkMode}
            onClick={scrollToSection}
            text="Contact"
          />
        </div>

        <div className="images" style={{ display: "flex", gap: "1rem" }}>
          <div className="img" style={{ flex: "0" }}>
            <a
              href="https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b"
              target="_blank"
              rel="noreferer"
            >
              <img
                className="clickableImage"
                src="assets/Images/linkedIn_logo.png"
                alt="LinkedIn"
                style={{ width: "100px", height: "100px", marginRight: "8px" }}
              />
            </a>
          </div>
          <div className="img" style={{ flex: "0" }}>
            <a
              href="https://github.com/Peregrine777"
              target="_blank"
              rel="noreferer"
            >
              <img
                className="clickableImage"
                src={`assets/Images/github-logo_${
                  darkMode ? "dark.png" : "light.png"
                }`}
                alt="GitHub"
                style={{ width: "100px", height: "100px", marginRight: "8px" }}
              />
            </a>
          </div>
        </div>
      </FlexReveal>
    </div>
  );
};
export default Socials;
