import React, { useEffect, useState } from "react";
import * as Compositions from "../../Compositions";
import "./GameDev.css";

const GameDev = ({ darkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
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

  const menuContent = {
    Games: { subOptions: [] },
    "Game Engines": { subOptions: [] },
    "Interactive Experiences": { subOptions: [] },
  };

  const GameInfo = ({ title, img, link, description, children }) => (
    <div className="game">
      {!isMobile && <GameImage img={img} link={link} />}
      <GameDesc title={title} descr={description} img={img} link={link}>
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

  const GameDesc = ({ title, descr, img, link, children }) => (
    <div className="game-info">
      <GameTitle>{title}</GameTitle>
      {isMobile && (
        <div className="image-holder-small">
          {" "}
          <GameImage img={img} link={link} />{" "}
        </div>
      )}
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
          <div style={{ padding: "10px" }}>
            <h2 style={{ textAlign: "left", marginBottom: "16px" }}>Games</h2>
            <div className="game-list">
              <GameInfo
                title="Gloria Armada"
                img="assets/Images/Gloria_Armada.png"
                link="https://chanel-parfait.itch.io/gloria-armada"
                description="Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"
              ></GameInfo>
              <h2 style={{ textAlign: "left", marginBottom: "0px" }}>
                Tech Demos
              </h2>
              <GameInfo
                title="Procedural Jones"
                img="assets/Images/PJ_CaveGen.png"
                link="https://github.com/Peregrine777/Procedural-Jones-CaveGen"
                description="Procedural Jones is a tech demo that showcases procedural generation of walkable caves using rules-based box/corridor placement and marching-cubes terrain generation."
              ></GameInfo>
            </div>
          </div>
        );
      } else if (activeSection === "Game Engines") {
        return <div style={{ width: "95vw", padding: "10px" }} />;
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
