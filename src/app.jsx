import React, { useState } from "react";
import "./app.css";
import Section from "./Components/Section.jsx";
import ThreeJSSection from "./Components/ThreeJSCanvas.jsx";
import FlexReveal from "./Components/FlexReveal.jsx";
import SettingsMenu from "./Components/SettingsMenu.jsx";
import MinimalButton from "./Components/MinimalButton.jsx";
import LightboxModal from "./Components/LightboxModal.jsx";
import Socials from "./Components/Socials.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState(null);

  const handleOpenLightbox = (content) => {
    setLightboxContent(content); // Set the content dynamically
    setIsLightboxOpen(true); // Open the lightbox
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

const toggleDarkMode = () => {
  setDarkMode((prevMode) => {
    const newMode = !prevMode;
    document.body.className = newMode ? "dark-mode" : "light-mode";
    return newMode;
  });
};

  return (
    <div className="app">
      <LightboxModal
        darkMode={darkMode}
        isOpen={isLightboxOpen}
        content={lightboxContent}// Can be replaced with an iframe, image, etc.
        onClose={handleCloseLightbox}
      />

      <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
        <div>
          <img src={`assets/Images/Peregrine_${darkMode ? 'dark.png' : 'light.png'}`}
            alt="Logo"
            className="logo"
            
            style={{ marginBottom:"1rem", verticalAlign:"middle", objectFit:"contain", width: "50px", height: "50px", marginRight: "8px" }} />
          <h1 style={{display:"inline-block", paddingLeft: "10px"}}>Samuel Mckenzie-Sell</h1>
        </div>
        
        <SettingsMenu darkMode = {darkMode} toggleDarkMode={toggleDarkMode} />
      </header>

      <main className= {`main ${darkMode ? "dark-mode" : "light-mode"}`}>
        <Section title="Greetings" darkMode={darkMode} style={{paddingTop: "6rem"}}>
          
          <div className="container">
            <div className="column" style={{paddingLeft:"10%", flexGrow: "0"}}>

                <div style={{ flex: "1", flexDirection: "vertical" }}>
                  <div style={{justifyContent: "center", padding:"2rem"}}>
                    <h2 style={{textAlign:"left", fontSize:"36", textWrap:"wrap", paddingLeft:"0rem"}}> 
                      Let's make something amazing together!
                    </h2>
                  </div>
                  <p> I am a software engineer with a passion for creating innovative solutions. </p>
                  <p> I have experience in various programming languages and frameworks. </p>
                  <p> I enjoy collaborating with teams and solving complex problems. </p>
                  </div>
                  <Socials darkMode={darkMode}/>
                  
            </div>
            <div className="column" margin="4rem" padding="4rem" style={{flexShrink:"3"}}>
              <img src="assets/Images/Profile.png" alt="Profile" style={{ maxWidth: "300px", verticalAlign:"middle", height: "auto" }} />
            </div>  
            
          </div>
        </Section>

        <Section title="Overview" darkMode={darkMode}>
          <FlexReveal style={{justifyContent:"center"}}
          childStyle={{minWidth:"250px"}}>
            <div className="majorColumn">
              <h2 style={{textAlign: "center"}}>Game Development</h2>
              <a href="https://chanel-parfait.itch.io/gloria-armada" target="_blank" rel="noreferer">
                <img className="clickableImage" src="assets/Images/Gloria_Armada.png"
                 alt="Gloria Armada"
                 style={{ maxWidth: "100%", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </a>
              <h3>Gloria Armada</h3>
              <p>Gloria Armada combines 2D shootemup genres but with physics based controls and a perspective that changes between top-down, side-on and rear aspect! </p>
              <MinimalButton
                darkMode={darkMode}
                text="More Info"
                onClick={() =>
                  handleOpenLightbox(
                    <div style={{ textAlign: "center" }}>
                      <h2>Gloria Armada</h2>
                      <p>
                        Gloria Armada combines 2D shoot-'em-up genres but with physics-based
                        controls and a perspective that changes between top-down, side-on, and
                        rear aspect!
                      </p>
                      <iframe src="https://itch.io/embed-upload/10600258?color=0484d1" allowfullscreen=""  width="100%" height="60%"><a href="https://chanel-parfait.itch.io/gloria-armada">Play Gloria Armada on itch.io</a></iframe>
                    </div>
                  )
                }
              />
            </div>
            <div className="majorColumn">
              <h2 style={{textAlign: "center"}}>Data Analysis</h2>
              <p>Gloria Armada combines 2D shootemup genres but with physics based controls and a perspective that changes between top-down, side-on and rear aspect! </p>
            </div>
            <div className="majorColumn">
              <h2 style={{textAlign: "center"}}>Interactive Visualizations</h2>
              <div className="column-content" id="threejsContainer">
                <ThreeJSSection darkMode={darkMode} containerID = "threejsContainer" />   
              </div>
            </div>

          </FlexReveal>
        </Section>

        <Section title="Skills" darkMode={darkMode}>
          <h2 style={{textAlign:"center"}}> Languages </h2>
          <FlexReveal style={{flexDirection:"column", justifyContent:"center"}}>
            <FlexReveal style={{justifyContent:"center"}}
            childStyle={{minWidth:"250px"}}>
              <div className="majorColumn">
                <img src="assets/Images/Skills/CSharp.png" alt="C#" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </div>
              <div className="majorColumn">
                <img src="assets/Images/Skills/CPP.png" alt="Python" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </div>
              <div className="majorColumn">
                <img src="assets/Images/Skills/js.svg" alt="JavaScript" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </div>
              <div className="majorColumn">
                <img src="assets/Images/Skills/typescript.svg" alt="TypeScript" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </div>
              <div className="majorColumn">
                <img src="assets/Images/Skills/python.svg" alt="Python" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </div>
              </FlexReveal>
              
          <h2 style={{textAlign:"center"}}> Frameworks </h2>
              <FlexReveal style={{justifyContent:"center"}}
            childStyle={{minWidth:"250px"}}>
              <div className="majorColumn">
                <img src="assets/Images/Skills/reactjs.svg" alt="React" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </div>
              <div className="majorColumn">
                <img src="assets/Images/Skills/git-icon.svg" alt="Git" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </div>
              <div className="majorColumn">
                <img src="assets/Images/Skills/mysql.svg" alt="mySQL" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
              </div>
              </FlexReveal>
              
              <h2 style={{textAlign:"center"}}> APIs </h2>
              <FlexReveal style={{justifyContent:"center"}}>
                <div className="majorColumn">
                  <img src="assets/Images/Skills/graphql.svg" alt="graphQL" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} />
                </div>
              </FlexReveal>

              <h2 style={{textAlign:"center"}}> Tools </h2>
              <FlexReveal style={{justifyContent:"center"}}>
                <div><img src={`assets/Images/Skills/UnityCube_${darkMode ? 'White.svg' : 'Black.svg'}`} alt="graphQL" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} /></div>
                <div><img src="assets/Images/Skills/UE.svg" alt="graphQL" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} /></div>
                <div><img src="assets/Images/Skills/blender.png" alt="graphQL" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} /></div>
                <div><img src="assets/Images/Skills/graphql.svg" alt="graphQL" style={{ maxWidth: "100%", width:"80px", objectFit: "contain", alignSelf: "normal", height: "auto" }} /></div>
              </FlexReveal>
              
            </FlexReveal>

        </Section>


        <Section title="End Section" darkMode={darkMode} >
          <div className="container" style={{justifyContent:"space-around", paddingRight:"60lvw", paddingLeft:"60lvw"}}>  
              <div className="column" style={{flexShrink:"3"}}>
                <img src={`assets/Images/Peregrine_${darkMode ? 'dark.png' : 'light.png'}`} 
                style={{height:"300px"}}/>              
              </div>
              <div className="column" style={{ flexGrow: "3"}}>
                <h2 style={{textAlign:"left"}}> Get in touch! </h2>
                <p style={{fontSize: "24px"}}> samuelmckenziesell@gmail.com</p>
                <Socials darkMode={darkMode}/>
              </div>
          </div>
        </Section>

      </main>
    </div>

 
  );
};

export default App;