import React, { useState, useEffect } from "react";

const GlowEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  // Add and remove mousemove event listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="glow-effect"
      style={{
        position: "fixed",
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
        width: "150px", // Size of the glow
        height: "150px",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0) 70%)",
        pointerEvents: "none",
        zIndex: 1000,
        transition: "transform 0.2s ease-in-out", // Smooth transition if you want it to follow quickly
      }}
    />
  );
};

export default GlowEffect;
