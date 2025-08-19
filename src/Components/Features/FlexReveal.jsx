import React from "react";
import { useInView } from "react-intersection-observer";
import "./FlexReveal.css";

const FlexReveal = ({
  children,
  className,
  style,
  childStyle,
  revealMode,
  revealPercent,
  transitionSpeed = 1.2,
  transitionDelay = 0.5,
}) => {
  const mode = revealMode ? revealMode : "rootMargin";
  mode === "threshold" ? (revealPercent ? revealPercent : 0.5) : "-50% 0px";

  const { ref, inView } = useInView(
    mode === "rootMargin"
      ? {
          root: null, // Uses viewport as root
          rootMargin: revealPercent, // Triggers when `revealPercent` of the viewport is taken up
          triggerOnce: true, // Only trigger the animation once
        }
      : {
          threshold: revealPercent, // Triggers when `revealPercent` of the element is in view
          triggerOnce: true,
        }
  );

  return (
    <div
      ref={ref}
      className={`flex-reveal ${className} ${
        inView ? "flex-reveal-visible" : "flex-reveal-hidden"
      }`}
      style={{
        display: "flex", // Ensure the container is a flexbox
        width: "100%", // Span full width
        ...style,
      }} //
    >
      {React.Children.map(children, (child, index) => (
        <div
          className="flex-child"
          style={{
            transitionDelay: `${index * transitionDelay}s`, // Add delay based on index
            flex: "1", // Allow children to grow and shrink
            flexWrap: "wrap",
            ...childStyle, // Merge with child's existing styles
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FlexReveal;
