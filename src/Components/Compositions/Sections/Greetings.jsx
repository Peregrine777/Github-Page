import React, { useState, useEffect } from "react";
import * as Compositions from "../../Compositions";
import * as Feature from "../../Features";
import "./Greetings.css";

const Greetings = ({ darkMode, handleOpenLightbox, scrollToSection }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Hook to check if the screen size is smaller than 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize the check
    handleResize();

    // Set up event listener for resizing the window
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="greetings-container">
      {/* Left Section (Text & Socials) */}
      <div className="greetings-content">
        <h2 className="title">Let's make something amazing together!</h2>
        <p className="greetings-text">
          Senior Data Analyst and Software Engineer with a strong interest in
          systems programming and low-level development.{" "}
        </p>
        <br />

        {/* Socials inside content for larger screens */}
        {!isMobile && (
          <div className="button-container">
            <Compositions.Socials
              darkMode={darkMode}
              scrollToSection={scrollToSection}
            />
          </div>
        )}
      </div>

      {/* Right Section (Profile Image) */}
      <div
        className="greetings-image"
        style={{ flexGrow: "0", flexShrink: "3", order: "1" }}
      >
        <img
          className="profileImg"
          src="assets/Images/Profile.png"
          alt="Profile"
        />
      </div>

      {/* Socials below content for smaller screens */}
      {isMobile && (
        <div className="button-container">
          <Compositions.Socials
            darkMode={darkMode}
            scrollToSection={scrollToSection}
          />
        </div>
      )}
    </div>
  );
};

export default Greetings;
