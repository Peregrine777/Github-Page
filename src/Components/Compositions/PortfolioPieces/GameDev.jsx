import React from "react";

const GameDev = ({ darkMode }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Game Development</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: "1", padding: "1rem" }}>
          <h3>Games</h3>
          <p>
            Gloria Armada combines 2D shoot-'em-up genres but with physics-based
            controls and a perspective that changes between top-down, side-on,
            and rear aspect!
          </p>

          <img src="assets/Images/Gloria_Armada.png" alt="Gloria Armada" />
          <iframe
            src="https://itch.io/embed-upload/10600258?color=0484d1"
            width="100%"
            height="60%"
            title="Gloria Armada"
          >
            <a href="https://chanel-parfait.itch.io/gloria-armada">
              Play Gloria Armada on itch.io
            </a>
          </iframe>
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
