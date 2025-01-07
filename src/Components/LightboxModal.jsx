import React, { useState } from 'react';
import './LightboxModal.css';
const LightboxModal = ({ darkMode, isOpen, content, onClose }) => {
  if (!isOpen) return null;  // Don't render if not open

  return (
    <div className={`lightbox-overlay`} onClick={onClose}>
      <div className={`lightbox-content ${darkMode ? 'dark-mode' : 'light-mode'}`}  onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div>{content}</div>
      </div>
    </div>
  );
};
export default LightboxModal;
