import React, { useState, useEffect } from "react";
import "./MinimalButton.css";

const MinimalButton = ({ darkMode, text, style, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`minimal-button ${darkMode ? "dark-mode" : "light-mode"}`}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default MinimalButton;
