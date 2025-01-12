import React, { useEffect, useLayoutEffect, useRef } from "react";
import setupThreeJS from "../../threeTest.js";

const ThreeJSSection = ({ darkMode }) => {
  const containerRef = useRef(null);
  let parentElement = useRef(null);
  let threeJSInstance = useRef(null);

  useEffect(() => {
    parentElement = containerRef.current?.parentElement;
    while (parentElement && parentElement.tagName !== "SECTION") {
      //console.log("Parent Element: ", parentElement.tagName);
      parentElement = parentElement.parentElement; // Move up one level
    }
    console.log("Parent Element: ", parentElement);

    threeJSInstance = setupThreeJS(containerRef, parentElement);
    // console.log("Container: ", containerRef.current);
    // console.log(
    //   "init container size",
    //   containerRef.current.offsetWidth,
    //   containerRef.current.offsetHeight
    // );

    // Function to handle dark mode change
    const handleDarkModeChange = () => {
      if (threeJSInstance?.handleDarkModeChange) {
        threeJSInstance.handleDarkModeChange(darkMode);
      }
    };

    // Call the handleDarkModeChange function when darkMode changes
    handleDarkModeChange();
    const delayResize = setTimeout(() => {
      // console.log(
      //   "delayed container size",
      //   containerRef.current.offsetWidth,
      //   containerRef.current.offsetHeight
      // );
      console.log("ThreeJS Instance: ", threeJSInstance);
      if (threeJSInstance?.handleResize) {
        threeJSInstance.handleResize(containerRef); // Call the resize function from Three.js setup
      }
    }, 1000);

    // Cleanup the timeout when component unmounts
    return () => {
      clearTimeout(delayResize);
      if (threeJSInstance?.cleanup) {
        threeJSInstance.cleanup(); // Cleanup Three.js resources
      }
    };
  }, [darkMode]);

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
