import React from "react";
import { useInView } from "react-intersection-observer";
import "./Section.css";

const Section = (props) => {
  const { children, id, height, style, darkMode, revealPercent } = props;
  const percent = revealPercent ? revealPercent : "-35% 0px";
  const { ref, inView } = useInView({
    root: null, // Uses viewport as root
    rootMargin: percent, // Triggers when 50% of the viewport is taken up
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <section
      ref={ref}
      id={id}
      style={{ minHeight: height, ...style }}
      className={`section ${inView ? "section-visible" : "section-hidden"} ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
