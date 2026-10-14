import React from "react";
import ProjectPage, {
  ProjectSection,
  FeatureCards,
  Figure,
  FigureRow,
} from "./ProjectPage";

const ITCH_URL = "https://chanel-parfait.itch.io/gloria-armada";

const openGame = (openLightbox) =>
  openLightbox(
    <iframe
      src="https://itch.io/embed-upload/10600258?color=0484d1"
      title="Gloria Armada"
      allowFullScreen
      style={{ width: "90vw", height: "75vh", border: "none" }}
    >
      <a href={ITCH_URL}>Play Gloria Armada on itch.io</a>
    </iframe>,
    { width: "95%", height: "80vh" }
  );

const overviewCards = [
  {
    title: "Physics",
    color: "#80c352",
    href: "physics",
    groups: [
      {
        heading: "Full 3D aerodynamics model",
        items: [
          "Modular, component based airframe definition",
          "Serialized plug and play airframes",
          "Global and local parameters (gravity, drag etc.)",
          "Stall, centre of pressure change and thrust vectoring",
        ],
      },
      { heading: "API", items: ["Access to sensor output and control inputs"] },
      {
        heading: "Misc",
        items: ["Fracturing and breakup that preserves angular and part momentum"],
      },
    ],
  },
  {
    title: "AI",
    color: "#a666e1",
    href: "ai",
    groups: [
      {
        heading: "State machine AI",
        items: [
          "Fly to location",
          "Fly to target",
          "Fly heading",
          "Intercept",
          "Formation with leader",
          "Shoot at target",
          "Evade",
        ],
      },
      {
        heading: "Features",
        items: ["Targeting with 1st and 2nd order intercepts", "Target prioritization"],
      },
    ],
  },
  {
    title: "Graphics",
    color: "#30acec",
    href: "graphics",
    groups: [
      {
        heading: "Particles",
        items: ["Global particle manager with intelligent pooling and culling"],
      },
    ],
  },
];

const GloriaArmada = () => (
  <ProjectPage
    title="Gloria Armada"
    subtitle="A shoot-'em-up with physics-based flight, where the perspective shifts between top-down, side-on and rear views."
    hero="assets/Images/Gloria_Armada.png"
    heroAlt="Gloria Armada"
    onHeroClick={openGame}
    tags={["Unity", "C#", "Physics", "AI", "Game"]}
    links={[
      { label: "Play in browser", onClick: openGame },
      { label: "View on itch.io", href: ITCH_URL },
    ]}
  >
    <FeatureCards cards={overviewCards} />

    <ProjectSection title="Physics" id="physics">
      <h3>Full aerodynamic model</h3>
      <p>
        Aircraft are fully customizable, and lift is calculated per surface
        from lookup tables. The model includes a centre of pressure that varies
        per surface, lift shadowing between surfaces, angular drag and thrust
        vectoring.
      </p>
      <p>
        Airframes are built from modular components and serialized, so new
        aircraft can be plugged in without code changes. Physical parameters
        such as gravity and drag can be set globally or per airframe. An API
        exposes each aircraft&apos;s sensor outputs and control inputs.
      </p>
      <Figure src="assets/Images/GloriaArmada/Physics.png" caption="Per-surface aerodynamic model" maxWidth="400px" />
      <h3>Disintegration</h3>
      <p>
        When an aircraft is destroyed it fractures and breaks apart. Each piece
        keeps its share of the aircraft&apos;s linear and angular momentum, so
        the debris carries on believably from the moment of impact.
      </p>
      <FigureRow>
        <Figure src="assets/Images/GloriaArmada/Fracture2.png" caption="Aircraft breaking up" />
        <Figure src="assets/Images/GloriaArmada/Fracture.png" caption="Debris keeping its momentum" />
      </FigureRow>
    </ProjectSection>

    <ProjectSection title="AI" id="ai">
      <p>
        Enemy aircraft are controlled by a state machine built from small,
        reusable behaviours. Each behaviour handles one manoeuvre, and the state
        machine switches between them as the situation changes:
      </p>
      <ul>
        <li><strong>Fly to location</strong>: navigate to a point in the world.</li>
        <li><strong>Fly to target</strong>: close in on another aircraft.</li>
        <li><strong>Fly heading</strong>: hold a given direction.</li>
        <li><strong>Intercept</strong>: head for where the target will be, not where it is.</li>
        <li><strong>Formation</strong>: hold position relative to a leader.</li>
        <li><strong>Shoot at target</strong>: line up and fire.</li>
        <li><strong>Evade</strong>: break away when under threat.</li>
      </ul>
      <h3>Targeting</h3>
      <p>
        Aiming uses <strong>first and second order intercepts</strong>. A first
        order intercept predicts where the target will be based on its current
        velocity. A second order intercept also accounts for its acceleration,
        which keeps shots accurate against turning targets. When several
        targets are available, the AI prioritizes which one to engage.
      </p>
    </ProjectSection>

    <ProjectSection title="Dialogue" id="dialogue">
      <p>
        The tutorial is delivered by an instructor over the radio. Dialogue
        sequences are authored in the Unity inspector as a list of lines. Each
        line has a speaker and a type (dialogue, prompt or choice). Choices let the player answer in the flow of
        the conversation, such as picking inverted or normal pitch controls.
      </p>
      <Figure src="assets/Images/GA_Dialogue.png" caption="Authoring the tutorial dialogue in the inspector" maxWidth="600px" />
    </ProjectSection>

    <ProjectSection title="Graphics" id="graphics">
      <h3>Particles</h3>
      <p>
        Combat produces a large number of short lived effects. A global
        particle manager pools particle systems and
        reuses them instead of creating and destroying them, and culls effects
        that aren&apos;t contributing to the frame. This keeps performance
        steady during heavy combat.
      </p>
    </ProjectSection>
  </ProjectPage>
);

export default GloriaArmada;
