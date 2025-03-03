import React, { useEffect, useRef } from "react";

const ThreeJSSection = ({ darkMode, threeJSEntry, style, onInit }) => {
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

    console.log("ThreeJS Container:", containerRef.current);

    // Initialize the Three.js scene
    threeJSInstanceRef.current = threeJSEntry(containerRef, parentElement);

    if (onInit) {
      onInit(threeJSInstanceRef);
    }

    // Return instance to parent component

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
        maxHeight: "100%",
        height: "100%",
        width: "100%",
        ...style,
      }}
    />
  );
};

export default ThreeJSSection;
