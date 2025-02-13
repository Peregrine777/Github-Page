import React, { useEffect, useRef } from "react";

const ThreeJSSection = ({ darkMode, threeJSEntry }) => {
  const containerRef = useRef(null);
  const parentElementRef = useRef(null);
  const threeJSInstanceRef = useRef(null);

  useEffect(() => {
    // Ensure we have a valid Three.js entry function
    if (typeof threeJSEntry !== "function") {
      console.error("Invalid threeJSEntry function provided.");
      return;
    }

    // Find the parent <section> element
    let parentElement = containerRef.current?.parentElement;
    while (parentElement && parentElement.tagName !== "SECTION") {
      parentElement = parentElement.parentElement;
    }
    parentElementRef.current = parentElement;

    console.log("Parent Element:", parentElement);

    // Initialize the Three.js scene
    threeJSInstanceRef.current = threeJSEntry(containerRef, parentElement);

    // Handle dark mode changes
    const handleDarkModeChange = () => {
      if (threeJSInstanceRef.current?.handleDarkModeChange) {
        threeJSInstanceRef.current.handleDarkModeChange(darkMode);
      }
    };

    handleDarkModeChange();

    // Handle resizing after a slight delay
    const delayResize = setTimeout(() => {
      if (threeJSInstanceRef.current?.handleResize) {
        threeJSInstanceRef.current.handleResize(containerRef);
      }
    }, 1000);

    // Cleanup on unmount
    return () => {
      clearTimeout(delayResize);
      if (threeJSInstanceRef.current?.cleanup) {
        threeJSInstanceRef.current.cleanup();
      }
    };
  }, [darkMode, threeJSEntry]);

  return (
    <div
      ref={containerRef}
      style={{
        minWidth: "250px",
        minHeight: "250px",
        width: "auto",
        height: "auto",
      }}
    />
  );
};

export default ThreeJSSection;
