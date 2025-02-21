import React, { useState, useEffect } from "react";
import "./SettingsMenu.css";

const SettingsMenu = ({ darkMode, toggleDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <div className="settings">
      <button className="settings-icon">
        <img
          src={`assets/Images/settings_gear_icon_${
            darkMode ? "White.png" : "Black.png"
          }`}
          alt="Settings"
          width="20px"
          size="20px"
        />
      </button>

      <div
        className={`settings-menu-wrapper ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
      >
        {" "}
        {/* Apply the glow effect here */}
        <div
          className={`settings-menu ${darkMode ? "dark-mode" : "light-mode"}`}
        >
          <button onClick={toggleDarkMode} className="settingsMenuButton">
            <img
              className="clickableImage"
              src={`assets/Images/${
                darkMode ? "DarkMode.png" : "LightMode.png"
              }`}
              alt={darkMode ? "Dark Mode" : "Light Mode"}
              style={{ width: "25px", height: "25px", marginRight: "0.5rem" }}
            />
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
