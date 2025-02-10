import React, { useState, useEffect } from "react";
import FlexReveal from "../../Features/FlexReveal";
import VariableImage from "../../Features/VariableImage";
import "./Skills.css";

const Skills = ({ darkMode }) => {
  const [skills, setSkills] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("assets/Data/skills.json")
      .then((response) => response.json())
      .then((data) => {
        // Log the list of categories and the number of skills in each
        console.log(
          "Categories and Skill Counts:",
          data.map((category) => ({
            category: category.title,
            skillCount: category.skills.length,
          }))
        );
        setSkills(data);
        setIsLoaded(true);
      })
      .catch((error) => console.error("Error loading skills:", error));
  }, []);

  if (!isLoaded) {
    return <p>Loading skills...</p>;
  }

  const getImageVariant = (imagePath) => {
    if (!imagePath) return null;

    // Split the file path into parts
    const [name, extension] = imagePath.split(/(?=\.[^.]+$)/); // Splits before the file extension
    return darkMode ? `${name}_White${extension}` : `${name}_Black${extension}`;
  };

  return (
    <div>
      {skills.map((category) => (
        <div key={category.title}>
          <h2 style={{ textAlign: "center", margin: "0.2rem" }}>
            {category.title}
          </h2>
          <div className="partial-divider" />
          <FlexReveal
            style={{
              justifyContent: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
            childStyle={{ flexGrow: "0", minWidth: "150px" }}
          >
            {category.skills.map((skill) => {
              const variantImage = getImageVariant(skill.image);

              return (
                <div className="skillItem" key={skill.name} style={{}}>
                  <VariableImage
                    darkMode={darkMode}
                    src={`assets/Images/Skills/${skill.image}`} // Fallback to the original if the variant doesn't exist
                    alt={skill.name}
                    style={{
                      maxWidth: "100%",
                      width: "80px",
                      objectFit: "contain",
                      alignSelf: "normal",
                      height: "auto",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "0.1rem",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </FlexReveal>
        </div>
      ))}
    </div>
  );
};

export default Skills;
