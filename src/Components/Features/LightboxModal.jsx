import React, { isValidElement, cloneElement, useState } from "react";
import "./LightboxModal.css";
import MinimalButton from "./MinimalButton";

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
        <MinimalButton
          darkMode={darkMode}
          className={`close-button ${darkMode ? "dark-mode" : "light-mode"}`}
          onClick={onClose}
          text="X"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontWeight: "bold",
          }}
        />
        <div>{contentWithProps}</div>
      </div>
    </div>
  );
};
export default LightboxModal;
