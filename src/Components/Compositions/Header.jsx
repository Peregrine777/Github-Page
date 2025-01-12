import React from "react";
import SettingsMenu from "./SettingsMenu";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div>
        <img
          src={`assets/Images/Peregrine_${darkMode ? "dark.png" : "light.png"}`}
          alt="Logo"
          className="logo"
          style={{
            marginBottom: "1rem",
            verticalAlign: "middle",
            objectFit: "contain",
            width: "50px",
            height: "50px",
            marginRight: "8px",
          }}
        />
        <h1 style={{ display: "inline-block", paddingLeft: "10px" }}>
          Samuel Mckenzie-Sell
        </h1>
      </div>
      <SettingsMenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
};
export default Header;
