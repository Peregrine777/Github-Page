import React, { isValidElement, cloneElement, useState } from "react";
import "./LightboxModal.css";
const LightboxModal = ({ darkMode, isOpen, content, style, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  /* log changes to darkMode */
  console.log("LightboxModal darkMode:", darkMode);

  // Clone content and pass darkMode
  const contentWithProps = isValidElement(content)
    ? cloneElement(content, { darkMode })
    : content;

  return (
    <div className={`lightbox-overlay`} onClick={onClose}>
      <div
        className={`lightbox-content ${darkMode ? "dark-mode" : "light-mode"}`}
        onClick={(e) => e.stopPropagation()}
        style={style}
      >
        <button
          className={`close-button ${darkMode ? "dark-mode" : "light-mode"}`}
          onClick={onClose}
        >
          X
        </button>
        <div>{contentWithProps}</div>
      </div>
    </div>
  );
};
export default LightboxModal;
