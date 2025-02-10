import React from "react";
import * as Compositions from "../../Compositions";
import * as Feature from "../../Features";

const Greetings = ({ darkMode, handleOpenLightbox, scrollToSection }) => {
  return (
    <div className="container">
      <div className="column" style={{ flexGrow: "0" }}>
        <div style={{ flex: "1", flexDirection: "vertical" }}>
          <div style={{ justifyContent: "center", padding: "2rem" }}>
            <h2
              style={{
                textAlign: "left",
                fontSize: "36",
                textWrap: "wrap",
                paddingLeft: "0rem",
              }}
            >
              Let's make something amazing together!
            </h2>
          </div>
          <p>
            {" "}
            I am a software engineer with a passion for creating innovative
            solutions.{" "}
          </p>
          <p>
            {" "}
            I have experience in various programming languages and frameworks.{" "}
          </p>
          <p>
            {" "}
            I enjoy collaborating with teams and solving complex problems.{" "}
          </p>
        </div>

        <Compositions.Socials
          darkMode={darkMode}
          scrollToSection={scrollToSection}
        />
      </div>
      <div
        className="column"
        margin="4rem"
        padding="4rem"
        style={{ flexShrink: "3" }}
      >
        <img
          src="assets/Images/Profile.png"
          alt="Profile"
          style={{
            maxWidth: "300px",
            verticalAlign: "middle",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};
export default Greetings;
