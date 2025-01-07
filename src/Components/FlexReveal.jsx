import React from "react";
import { useInView } from "react-intersection-observer";
import "./FlexReveal.css";

const FlexReveal = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the flexbox is in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <div
      ref={ref}
      className={`flex-reveal ${className} ${
        inView ? "flex-reveal-visible" : "flex-reveal-hidden"
      }`}
    >
      {React.Children.map(children, (child, index) => (
        <div
          className="flex-child"
          style={{
            transitionDelay: `${index * 0.2}s`, // Add delay based on index
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FlexReveal;