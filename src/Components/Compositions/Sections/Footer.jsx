import React from "react";
import Socials from "../Socials";
import "./Footer.css";

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
      <div className="column" style={{ flexBasis: "10%", flex: "0 0 auto" }}>
        <img
          src={`assets/Images/Peregrine_${darkMode ? "dark.png" : "light.png"}`}
          style={{ height: "100px", verticalAlign: "middle" }}
        />
      </div>
      <div
        className="column"
        style={{
          flexBasis: "25%",
          flex: "1 2 auto",
          alignItems: "left",
          textAlign: "left",
          padding: "0 10px",
        }}
      >
        <Socials darkMode={darkMode} />
      </div>
      <div
        className="column"
        style={{
          flex: "0",
          alignSelf: "start",
          lineHeight: "14px",
          textAlign: "left",
        }}
      >
        <p style={{ margin: "0" }}> samuelmckenziesell@gmail.com </p>
        <p> +61 0401 384 885 </p>
      </div>
    </div>
  );
};
export default Footer;
