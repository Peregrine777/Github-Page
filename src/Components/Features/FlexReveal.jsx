import React from "react";
import { useInView } from "react-intersection-observer";
import "./FlexReveal.css";

const FlexReveal = ({ children, className, style, childStyle }) => {
  const { ref, inView } = useInView({
    root: null, // Uses viewport as root
    rootMargin: "-50% 0px", // Triggers when 50% of the viewport is taken up
    triggerOnce: true, // Only trigger the animation once
  });

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
            transitionDelay: `${index * 0.5}s`, // Add delay based on index
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
