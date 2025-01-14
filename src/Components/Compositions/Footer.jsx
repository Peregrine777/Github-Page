import React from "react";
import Socials from "./Socials";

const Footer = ({ darkMode }) => {
  return (
    <div
      className="container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: "0 1 auto",
        margin: "auto",
      }}
    >
      <div className="column" style={{ flex: "0 0 auto" }}>
        <img
          src={`assets/Images/Peregrine_${darkMode ? "dark.png" : "light.png"}`}
          style={{ height: "200px", verticalAlign: "middle" }}
        />
      </div>
      <div
        className="column"
        style={{ flexBasis: "45%", flex: "0 0 auto", textAlign: "left" }}
      >
        <h2 style={{ textAlign: "left" }}> Links </h2>
        <a href="https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b">
          LinkedIn
        </a>
        <br />
        <a href="https://www.linkedin.com/in/samuel-mckenzie-sell-95a63231b">
          GitHub
        </a>
        <p style={{ textAlign: "left", fontSize: "24px" }}> </p>

        <Socials darkMode={darkMode} />
      </div>
      <div
        className="column"
        style={{ flex: "0", alignSelf: "start", textAlign: "left" }}
      >
        <h2 style={{ textAlign: "left" }}> Contact </h2>
        <p> samuelmckenziesell@gmail.com </p>
        <p> +61 0401 384 885 </p>
      </div>
    </div>
  );
};
export default Footer;
