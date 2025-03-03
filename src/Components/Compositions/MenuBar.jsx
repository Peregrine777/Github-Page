import React, { useRef, useEffect, useState } from "react";
import "./MenuBar.css"; // Import CSS for styling and animations

const MenuBar = ({ content, darkMode, contentRenderer }) => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSubOption, setActiveSubOption] = useState(null);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [subMenuContent, setSubMenuContent] = useState([]);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const underlineRef = useRef(null);

  const moveUnderline = (target) => {
    if (underlineRef.current) {
      const { left, width } = target.getBoundingClientRect();
      const containerLeft = document
        .querySelector(".menu-items")
        .getBoundingClientRect().left;
      underlineRef.current.style.transform = `translateX(${
        left - containerLeft + width / 2 - 50
      }px)`;
      underlineRef.current.style.width = `${100}px`;
    }
  };

  const handleSectionClick = (target, section) => {
    moveUnderline(target);
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
        if (content[section]?.subOptions) {
          setSubMenuContent(content[section].subOptions);
          setActiveSubOption(content[section].subOptions[0]);
          setSubMenuVisible(true);
        } else {
          setSubMenuVisible(false);
        }
        setIsContentVisible(true); // Show new content
      }, 300); // Match this delay with the CSS transition duration
    }
  };

  // Set the first section as the default when the component mounts
  useEffect(() => {
    const firstSection = Object.keys(content)[0];
    setActiveSection(firstSection);
    setIsContentVisible(true); // Show content for the first section by default
  }, [content]);

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
        <div
          className={`menu-underline ${darkMode ? "dark-mode" : "light-mode"}`}
          ref={underlineRef}
        ></div>
        {Object.keys(content).map((section) => (
          <div
            key={section}
            className={`menu-item ${activeSection === section ? "active" : ""}`}
            onClick={(e) => handleSectionClick(e.currentTarget, section)}
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

      <div
        className={`content ${isContentVisible ? "fade-in" : "fade-out"}`}
        style={{ overflow: "auto" }}
      >
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
