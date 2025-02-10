import React from "react";
import * as Feature from "../Features";

const ScrollTo = () => {
  // Function to handle scroll
  const scrollToSection = () => {
    const targetSection = document.getElementById("target-section");
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <Feature.MinimalButton darkMode={true} onClick={scrollToSection}>
        Go to Section
      </Feature.MinimalButton>

      {/* Some content to make the page scrollable */}
      <div style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
        <h1>Welcome to the Page</h1>
      </div>

      {/* Target section to scroll to */}
      <div
        id="target-section"
        style={{ height: "100vh", backgroundColor: "#ddeeff" }}
      >
        <h2>This is the target section</h2>
        <p>Content of the section...</p>
      </div>
    </div>
  );
};

export default ScrollTo;
