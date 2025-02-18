import React from "react";
import * as Compositions from "../../Compositions";
import "./GameDev.css";

const GameDev = ({ darkMode }) => {
  const menuContent = {
    Games: { subOptions: [] },
    "Game Engines": { subOptions: ["OpenGL engine", "Physics"] },
  };

  const GameInfo = ({ title, img, link, description, children }) => (
    <div className="game">
      <GameImage img={img} link={link} />
      <GameDesc title={title} descr={description}>
        {children}
      </GameDesc>
    </div>
  );

  const GameImage = ({ img, link }) => (
    <a
      className="game-icon"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="game-icon-img" src={img} alt="Game Icon" />
    </a>
  );

  const GameDesc = ({ title, descr, children }) => (
    <div className="game-info">
      <GameTitle>{title}</GameTitle>
      <GameFeatures>{children}</GameFeatures>
      <GameDescription>{descr}</GameDescription>
    </div>
  );

  const GameTitle = ({ children }) => (
    <div className="game-title">{children}</div>
  );

  const GameFeatures = ({ children }) => (
    <div className="features">{children}</div>
  );

  const GameDescription = ({ children }) => (
    <div className="game-description">{children}</div>
  );

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
            <div className="game-list">
              <GameInfo
                title="Gloria Armada"
                img="assets/Images/Gloria_Armada.png"
                link="https://chanel-parfait.itch.io/gloria-armada"
                description="Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"
              ></GameInfo>
              <h2 style={{ textAlign: "left", marginBottom: "0px" }}>
                Tech Demoes
              </h2>
              <GameInfo
                title="Gloria Armada"
                img="assets/Images/Gloria_Armada.png"
                link="https://chanel-parfait.itch.io/gloria-armada"
                description="Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"
              ></GameInfo>
            </div>
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
    <div style={{ textAlign: "center", maxHeight: "100vh" }}>
      <h2>Game Development</h2>
      <div>
        <Compositions.MenuBar
          content={menuContent}
          darkMode={darkMode}
          contentRenderer={contentRenderer}
        />
      </div>
    </div>
  );
};

export default GameDev;
