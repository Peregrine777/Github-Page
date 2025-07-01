import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Compositions from "..";
import "./SoftwareEngineering.css";

const SoftwareEngineering = ({ darkMode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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
    "Game Engine": { subOptions: [] },
    "Interactive Experiences": { subOptions: [] },
  };

  const GameInfo = ({ title, img, link, description, children, tags }) => {
    const handleClick = () => {
      navigate(link);
    };
    return (
      <div
        className={`game ${darkMode ? "dark-mode" : "light-mode"}`}
        onClick={handleClick}
      >
        {!isMobile && <GameImage img={img} link={link} />}
        <GameDesc
          title={title}
          descr={description}
          img={img}
          link={link}
          tags={tags}
        >
          {children}
        </GameDesc>
      </div>
    );
  };

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

  const GameDesc = ({ title, descr, img, link, children, tags }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="game-info">
        <GameTitle>{title}</GameTitle>
        <GameTags tags={tags} />
        {isMobile && (
          <div className="image-holder-small">
            {" "}
            <GameImage img={img} link={link} />{" "}
          </div>
        )}
        <GameFeatures>{children}</GameFeatures>
        <GameDescription>{descr}</GameDescription>
      </div>
    </a>
  );

  const GameTitle = ({ children }) => (
    <div className="game-title">{children}</div>
  );

  const GameTags = ({ tags }) => (
    <div className="game-tags">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`tag ${darkMode ? "dark-mode" : "light-mode"}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );

  const GameFeatures = ({ children }) => (
    <div className="features">{children}</div>
  );

  const GameDescription = ({ children }) => (
    <div className="game-description">{children}</div>
  );

  return (
    <div style={{ textAlign: "center", maxHeight: "100vh" }}>
      <h2>Showcase</h2>

      <div className="game-list">
        <GameInfo
          title="Gloria Armada"
          img="assets/Images/Gloria_Armada.png"
          link="/Github-Page/GloriaArmada"
          description="Gloria Armada combines 2D shoot-'em-up genres but with physics-based controls and a perspective that changes between top-down, side-on, and rear aspect!"
          tags={["Game", "Unity", "C#", "Physics", "AI"]}
        ></GameInfo>
        <GameInfo
          title="PolyEngine"
          img="assets/Images/PolyEngine.jpg"
          link="/Github-Page/GameEngine"
          description="PolyEngine is a scratch-built game engine with minimal external library dependencies. Built to test computational geometry algorithms, PBDS, XPBDS and UI design"
          tags={["Engine", "C++", "OpenGL", "PBDS", "Geometry", "UI"]}
        ></GameInfo>
        <GameInfo
          title="Procedural Jones"
          img="assets/Images/PJ_CaveGen.png"
          link="/Github-Page/CaveGen"
          description="Procedural Jones is a tech demo that showcases procedural generation of walkable caves using rules-based box/corridor placement and marching-cubes terrain generation."
          tags={["Tool", "UE5", "C++", "Procedural Generation"]}
        ></GameInfo>
      </div>
    </div>
  );
};

export default SoftwareEngineering;
