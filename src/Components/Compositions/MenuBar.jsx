import React, { useState } from "react";
import "./MenuBar.css"; // Import CSS for styling and animations

const MenuBar = ({ content, darkMode, contentRenderer }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubOption, setActiveSubOption] = useState(null);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [subMenuContent, setSubMenuContent] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      // Deselect the current section
      setActiveSection(null);
      setActiveSubOption(null);
      setSubMenuVisible(false);
      setIsContentVisible(false); // Hide content
    } else {
      // Fade out the current content
      setIsContentVisible(false);

      // After a short delay, update the section and fade in the new content
      setTimeout(() => {
        setActiveSection(section);
        setActiveSubOption(null);
        if (content[section]?.subOptions) {
          setSubMenuContent(content[section].subOptions);
          setSubMenuVisible(true);
        } else {
          setSubMenuVisible(false);
        }
        setIsContentVisible(true); // Show new content
      }, 300); // Match this delay with the CSS transition duration
    }
  };

  const handleSubOptionClick = (subOption) => {
    if (activeSubOption === subOption) {
      // Deselect the current sub-option
      setActiveSubOption(null);
      setIsContentVisible(false); // Hide content
    } else {
      // Fade out the current content
      setIsContentVisible(false);

      // After a short delay, update the sub-option and fade in the new content
      setTimeout(() => {
        setActiveSubOption(subOption);
        setIsContentVisible(true); // Show new content
      }, 300); // Match this delay with the CSS transition duration
    }
  };

  return (
    <div className={`menu-bar ${darkMode ? "dark-mode" : ""}`}>
      <div className="menu-items">
        {Object.keys(content).map((section) => (
          <div
            key={section}
            className={`menu-item ${activeSection === section ? "active" : ""}`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </div>
        ))}
      </div>

      {subMenuVisible && (
        <div className="sub-menu">
          {subMenuContent.map((subOption) => (
            <div
              key={subOption}
              className={`sub-menu-item ${
                activeSubOption === subOption ? "active" : ""
              }`}
              onClick={() => handleSubOptionClick(subOption)}
            >
              {subOption}
            </div>
          ))}
        </div>
      )}

      <div className={`content ${isContentVisible ? "fade-in" : "fade-out"}`}>
        {contentRenderer
          ? contentRenderer(activeSection, activeSubOption)
          : activeSubOption
          ? `Content for ${activeSubOption}`
          : activeSection
          ? `Content for ${activeSection}`
          : "Select a section or sub-option"}
      </div>
    </div>
  );
};

export default MenuBar;
