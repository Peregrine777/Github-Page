import React, { createContext, useContext, useEffect, useState } from "react";
import * as Features from "../../Features";
import * as Sections from "../Sections";
import "./ProjectPage.css";

// Shared layout for the individual project pages (header, dark mode,
// image lightbox, footer). Child components read state through context.
const ProjectContext = createContext({ darkMode: true, openImage: () => {} });

const ProjectPage = ({ title, subtitle, hero, heroAlt, onHeroClick, tags = [], links = [], children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : true;
  });
  const [lightboxContent, setLightboxContent] = useState(null);
  const [lightboxStyle, setLightboxStyle] = useState(null);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // Pages are reached from the home page lightbox; start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", lightboxContent !== null);
  }, [lightboxContent, darkMode]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxContent(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const openLightbox = (content, style = null) => {
    setLightboxContent(content);
    setLightboxStyle(style);
  };

  const openImage = (src, caption) =>
    openLightbox(
      <figure className="lightbox-figure">
        <img src={src} alt={caption ?? ""} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>,
      { height: "auto", maxWidth: "90vw" }
    );

  return (
    <ProjectContext.Provider value={{ darkMode, openImage, openLightbox }}>
      <div className={`project-page ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Features.LightboxModal
          darkMode={darkMode}
          isOpen={lightboxContent !== null}
          content={lightboxContent}
          style={lightboxStyle}
          onClose={() => setLightboxContent(null)}
        />
        <Sections.Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode((prev) => !prev)}
        />

        <main className={`main ${darkMode ? "dark-mode" : "light-mode"}`}>
          <Features.Section title="about" darkMode={darkMode} revealPercent="50px 0px">
            <div className="project-hero">
              <h1 className="project-title">{title}</h1>
              {subtitle && <p className="project-subtitle">{subtitle}</p>}
              {tags.length > 0 && (
                <div className="project-tags">
                  {tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {hero && (
                <img
                  className={`project-hero-img ${onHeroClick ? "clickableImage" : ""}`}
                  src={hero}
                  alt={heroAlt ?? title}
                  onClick={onHeroClick ? () => onHeroClick(openLightbox) : () => openImage(hero, heroAlt)}
                />
              )}
              {links.length > 0 && (
                <div className="project-links">
                  {links.map(({ label, href, onClick }) =>
                    href ? (
                      <a key={label} className="project-link" href={href} target="_blank" rel="noopener noreferrer">
                        {label}
                      </a>
                    ) : (
                      <button key={label} className="project-link" onClick={() => onClick(openLightbox)}>
                        {label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </Features.Section>

          {children}

          <Features.Section
            title="Footer"
            darkMode={darkMode}
            revealPercent="50px 0px"
            style={{ padding: "10px", paddingTop: "2rem" }}
          >
            <Sections.Footer darkMode={darkMode} />
          </Features.Section>
        </main>
      </div>
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);

// A titled section of written content, constrained to a readable width
export const ProjectSection = ({ title, id, children }) => {
  const { darkMode } = useProject();
  return (
    <Features.Section title={title} darkMode={darkMode} revealPercent="50px 0px">
      <article className="project-article" id={id}>
        {title && <h2>{title}</h2>}
        {children}
      </article>
    </Features.Section>
  );
};

// Coloured summary cards, matching the overview slides
export const FeatureCards = ({ cards }) => {
  const { darkMode } = useProject();
  return (
    <Features.Section title="Overview" darkMode={darkMode} revealPercent="50px 0px">
      <div className="flex-container" style={{ padding: "10px" }}>
        {cards.map(({ title, color, href, groups }) => (
          <a key={title} className="column-content-container" href={href ? `#${href}` : undefined}
            onClick={(e) => {
              if (!href) return;
              // Hash routing owns the URL hash, so scroll manually
              e.preventDefault();
              document.getElementById(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <div className="column-content-titlebar" style={{ backgroundColor: color }}>
              <h2>{title}</h2>
            </div>
            <div className="column-content-inner">
              {groups.map(({ heading, items }) => (
                <React.Fragment key={heading}>
                  <h3>{heading}</h3>
                  {items && (
                    <ul>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Features.Section>
  );
};

// Clickable image with caption; opens full size in the lightbox
export const Figure = ({ src, caption, alt, maxWidth }) => {
  const { openImage } = useProject();
  return (
    <figure className="project-figure" style={maxWidth ? { maxWidth } : undefined}>
      <img className="clickableImage" src={src} alt={alt ?? caption ?? ""} loading="lazy" onClick={() => openImage(src, caption)} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export const FigureRow = ({ children }) => <div className="figure-row">{children}</div>;

export const Video = ({ src, poster, caption }) => (
  <figure className="project-figure project-video">
    <video controls preload="metadata" poster={poster} playsInline>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

// Highlighted note box (replaces the raw Obsidian admonition blocks)
export const Callout = ({ type = "note", children }) => (
  <aside className={`callout callout-${type}`}>
    <strong className="callout-label">{type}</strong>
    <div>{children}</div>
  </aside>
);

export default ProjectPage;
