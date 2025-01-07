import React, { useState } from "react";
import "./app.css";
import Section from "./Components/Section.jsx";
import ThreeJSSection from "./Components/ThreeJSCanvas.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

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
        <div>
          <img src={`assets/Images/Peregrine_${darkMode ? 'dark.png' : 'light.png'}`}
            alt="Logo"
            className="logo"
            
            style={{ marginBottom:"1rem", verticalAlign:"middle", objectFit:"contain", width: "50px", height: "50px", marginRight: "8px" }} />
          <h1 style={{display:"inline-block", paddingLeft: "10px"}}>Samuel Mckenzie-Sell</h1>
        </div>
        
        <div className="settings">
          <button className="settings-icon">⚙️</button>
          <div className= {`settings-menu ${darkMode ? "dark-mode" : "light-mode"}`}>
            <button onClick={toggleDarkMode}>
              <img className="clickableImage"
                src={`assets/Images/${darkMode ? 'DarkMode.png' : 'LightMode.png'}`} 
                alt={darkMode ? "Dark Mode" : "Light Mode"} 
                style={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>
        </div>
      </header>

      <main className= {`main ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Section title="Section 1" darkMode={darkMode} height="80lvh" >
          
          <div className="container">
            <div className="column" style={{flexGrow: "3"}}>
              <div style={{ flex: "1", flexDirection: "horizontal" }}>
                <div style={{ flex: "1", flexDirection: "vertical" }}>
                  <h2 style={{fontStyle: "italic"}}> Hi there! </h2>
                  <p> I am a software engineer with a passion for creating innovative solutions. </p>
                  <p> I have experience in various programming languages and frameworks. </p>
                  <p> I enjoy collaborating with teams and solving complex problems. </p>
                  </div>
                  <div className="container" style={{justifyContent:"center"}}>
                    <div className = "column" style={{flex: "0"}}>
                      <a href="https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b" target="_blank" rel="noreferer">
                        <img className="clickableImage" src="assets/Images/linkedIn_logo.png"
                        alt="LinkedIn"
                        style={{ width: "100px", height: "100px", marginRight: "8px" }} />
                      </a>
                    </div>
                    <div className = "column" style={{flex: "0"}}>
                      <a href="https://github.com/Peregrine777" target="_blank" rel="noreferer">
                        <img className="clickableImage" src={`assets/Images/github-logo_${darkMode ? 'dark.png' : 'light.png'}`}
                        alt="GitHub"
                        style={{ width: "100px", height: "100px", marginRight: "8px" }}/>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="column" style={{flexShrink:"3"}}>
              <img src="assets/Images/Profile.png" alt="Profile" style={{ maxWidth: "300px", height: "auto" }} />
            </div>  
            
          </div>
        </Section>

        <Section title="Section 2" darkMode={darkMode}>
          <div className="container">
            <div className="column">
              <h2>Column 1</h2>
              <p>This is the first column.</p>
            </div>
            <div className="column-content" id="threejsContainer">
              <ThreeJSSection darkMode={darkMode} containerID = "threejsContainer" />
                
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