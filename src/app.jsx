import React, { useState } from "react";
import "./app.css";
import Section from "./Section.jsx";
import ThreeJSSection from "./Components/ThreeJSCanvas.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode((prevMode) => {
    const newMode = !prevMode;
    document.body.className = newMode ? "dark-mode" : "light-mode";
    return newMode;
  });
};

  return (
    <div className="app">
      <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
        <h1>Samuel Mckenzie-Sell</h1>
        <div className="settings">
          <button className="settings-icon">⚙️</button>
          <div className= {`settings-menu ${darkMode ? "dark-mode" : "light-mode"}`}>
            <button onClick={toggleDarkMode}>
              <img 
                src={`assets/Images/${darkMode ? 'DarkMode.png' : 'LightMode.png'}`} 
                alt={darkMode ? "Dark Mode" : "Light Mode"} 
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        </div>
      </header>
      <main>
        <Section title="Section 1" darkMode={darkMode}>
          <p>This is custom content for the first section.</p>
          <img src="path-to-image.jpg" alt="Example" />
        </Section>

        <Section title="Section 2" darkMode={darkMode}>
          <div className="container">
            <div className="column">
              <h2>Column 1</h2>
              <p>This is the first column.</p>
            </div>
            <div className="column-content">
                <ThreeJSSection darkMode={darkMode} />
            </div>

          </div>  

          

        </Section>
        <Section title="Section 3" darkMode={darkMode} />
        <Section title="Section 4" darkMode={darkMode} />
      </main>
    </div>
  );
};

export default App;