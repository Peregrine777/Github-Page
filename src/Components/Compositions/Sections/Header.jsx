import React from "react";
import SettingsMenu from "../SettingsMenu";
import { useNavigate } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div>
        <a href="./" style={{ textDecoration: "none", color: "inherit" }}>
          <img
            src={`assets/Images/Peregrine_${
              darkMode ? "dark.png" : "light.png"
            }`}
            alt="Logo"
            className="logo"
            style={{
              //marginBottom: "1rem",
              verticalAlign: "text-bottom",
              objectFit: "contain",
              width: "auto",
              height: "30px",
            }}
          />
          <h1 style={{ display: "inline-block", paddingLeft: "10px" }}>
            Samuel McKenzie-Sell
          </h1>
        </a>
      </div>
      <SettingsMenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
};
export default Header;
