import React from "react";
import { useInView } from "react-intersection-observer";
import "./Section.css";

const Section = ({ height, title, darkMode, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is in view
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <section
      ref={ref}
      style = {{minHeight: height}}
      className={`section ${inView ? "section-visible" : "section-hidden"} ${darkMode ? "dark-mode" : "light-mode"}`}    >
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;