import React from "react";
import * as Compositions from "../../Compositions";

const GameDev = ({ darkMode }) => {
  const menuContent = {
    "Game Engines": { subOptions: ["OpenGL engine", "Physics"] }, // No sub-options for A
    Games: { subOptions: [] }, // Sub-options for B
    C: { subOptions: [] }, // No sub-options for C
  };

  const contentRenderer = (activeSection, activeSubOption) => {
    if (activeSubOption) {
      // Render content for the selected sub-option
      return (
        <div>
          <h2>{activeSubOption}</h2>
          <p>This is the content for {activeSubOption}.</p>
        </div>
      );
    } else if (activeSection) {
      if (activeSection === "Games") {
        return (
          <div>
            <h2>Games</h2>
            <p>
              Gloria Armada combines 2D shoot-'em-up genres but with
              physics-based controls and a perspective that changes between
              top-down, side-on, and rear aspect!
            </p>
            <img src="assets/Images/Gloria_Armada.png" alt="Gloria Armada" />

            <a href="https://chanel-parfait.itch.io/gloria-armada">
              Play Gloria Armada on itch.io
            </a>
          </div>
        );
      }
      // Render content for the selected section
      return (
        <div>
          <h2>{activeSection}</h2>
          <p>This is the content for {activeSection}.</p>
        </div>
      );
    } else {
      // Default content when nothing is selected
      return <p>Please select a section or sub-option.</p>;
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Game Development</h2>
      <div>
        <Compositions.MenuBar
          content={menuContent}
          darkMode={true}
          contentRenderer={contentRenderer}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: "1", padding: "1rem" }}>
          <h3>Games</h3>
          <p>
            Gloria Armada combines 2D shoot-'em-up genres but with physics-based
            controls and a perspective that changes between top-down, side-on,
            and rear aspect!
          </p>

          <img src="assets/Images/Gloria_Armada.png" alt="Gloria Armada" />
          {/* <iframe
            src="https://itch.io/embed-upload/10600258?color=0484d1"
            width="100%"
            height="60%"
            title="Gloria Armada"
          >
            <a href="https://chanel-parfait.itch.io/gloria-armada">
              Play Gloria Armada on itch.io
            </a>
          </iframe> */}
        </div>
        <div style={{ flex: "1", padding: "1rem" }}>
          <h3>Game Engines</h3>
          <p>s</p>
        </div>
      </div>
    </div>
  );
};

export default GameDev;
