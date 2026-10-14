import React from "react";
import ProjectPage, {
  ProjectSection,
  FeatureCards,
  Figure,
  FigureRow,
  Video,
} from "./ProjectPage";

const IMG = "assets/Images/DeformablePoly/";

const overviewCards = [
  {
    title: "Application",
    color: "#80c352",
    href: "application",
    groups: [
      { heading: "Drawing to the screen", items: ["Building an exe", "Using OpenGL"] },
      { heading: "Exploring libraries", items: ["ImGui", "Glad", "GLFW", "GLM"] },
      { heading: "Realtime graphing and UI" },
      { heading: "Interactivity & control" },
    ],
  },
  {
    title: "Meshes",
    color: "#a666e1",
    href: "meshes",
    groups: [
      {
        heading: "Loading mesh files",
        items: ["Tetrahedral meshes", "Hexahedral meshes", "Quad/Tri meshes"],
      },
      {
        heading: "Processing geometry",
        items: [
          "Correcting edge winding",
          "Extracting the external polyhedron",
          "Creating edge networks",
        ],
      },
    ],
  },
  {
    title: "Physics",
    color: "#30acec",
    href: "physics",
    groups: [
      { heading: "Exploring solvers", items: ["PBDS", "XPBDS"] },
      {
        heading: "“Regular” constraints",
        items: ["Distance", "Height / floor friction", "Volume"],
      },
      {
        heading: "Novel constraints (volumetric meshes)",
        items: ["Face distance", "Face angle"],
      },
      { heading: "Performance tracking" },
    ],
  },
  {
    title: "Cutting",
    color: "#e29d3e",
    href: "cutting",
    groups: [
      {
        heading: "Realtime slicing into 2 new polyhedral meshes",
        items: [
          "Methods for face reconstruction",
          "Speedups for volumetric mesh cutting",
          "Integration with physics",
        ],
      },
    ],
  },
];

const GameEngine = () => (
  <ProjectPage
    title="PolyEngine"
    subtitle="A scratch-built C++ / OpenGL engine for simulating, deforming and cutting volumetric polyhedral meshes in real time."
    hero="assets/Images/PolyEngine.jpg"
    heroAlt="A polyhedral sphere being sliced, with the frame time graph alongside"
    tags={["C++", "OpenGL", "ImGui", "GLFW", "GLM", "PBD", "XPBD", "Computational Geometry"]}
  >
    <FeatureCards cards={overviewCards} />

    <ProjectSection title="Application" id="application">
      <p>
        PolyEngine is built with minimal external dependencies. Rather than
        starting from an existing engine, the project starts at a blank window:
        GLFW provides the window and input, Glad loads the OpenGL functions, GLM
        handles the vector and matrix maths, and Dear ImGui provides the
        tooling interface. Everything else, from mesh loading and rendering to
        the physics solver and the cutting algorithm, is written from scratch.
      </p>
      <p>
        The engine is a research tool as much as a renderer, so every
        simulation parameter is exposed through the UI and can be changed while
        the simulation is running. Gravity, solver iterations, damping,
        friction and the stiffness of each constraint type can all be tuned
        live. The simulation can also be paused and stepped one frame at a time.
      </p>
      <FigureRow>
        <Figure src={`${IMG}image7.png`} caption="Simulation controls: solver iterations, damping, friction and per-constraint stiffness" />
        <Figure src={`${IMG}image2.png`} caption="Mesh browser for loading volumetric meshes from disk" />
      </FigureRow>
      <h3>Performance tracking</h3>
      <p>
        A realtime frame time graph breaks each frame down by constraint type,
        so the cost of every part of the solver is visible as the simulation
        runs. This made it easy to see which constraints were expensive and
        where optimisation would have the most effect.
      </p>
      <FigureRow>
        <Figure src={`${IMG}image11.png`} caption="Frame time breakdown with face angle and face distance constraints dominating" />
        <Figure src={`${IMG}image12.png`} caption="Frame time breakdown for a lighter scene" />
      </FigureRow>
    </ProjectSection>

    <ProjectSection title="Meshes" id="meshes">
      <p>
        The engine loads <strong>tetrahedral</strong> and{" "}
        <strong>hexahedral</strong> volume meshes, as well as ordinary quad and
        triangle surface meshes. A volumetric mesh describes the whole interior
        of an object as a set of connected cells, rather than just its outer
        shell. This is what allows the object to deform and be cut like a solid.
      </p>
      <FigureRow>
        <Figure src={`${IMG}image3.png`} caption="Tetrahedral cylinder (wireframe)" />
        <Figure src={`${IMG}image21.jpg`} caption="Hexahedral meshes (wireframe)" />
      </FigureRow>
      <h3>Processing geometry</h3>
      <p>Loaded meshes go through several processing steps before they can be simulated:</p>
      <ul>
        <li>
          <strong>Correcting edge winding</strong>, so that every face of every
          cell has a consistent orientation and its normal points outwards.
        </li>
        <li>
          <strong>Extracting the external polyhedron</strong>, the boundary
          surface of the volume, which is what gets rendered.
        </li>
        <li>
          <strong>Creating edge networks</strong> that link the polyhedra
          together, which the physics constraints are built on.
        </li>
      </ul>
      <FigureRow>
        <Figure src={`${IMG}image5.png`} caption="Rendered surface of a hexahedral mesh with three holes" />
        <Figure src={`${IMG}image6.png`} caption="The same mesh from another angle" />
      </FigureRow>
    </ProjectSection>

    <ProjectSection title="Physics" id="physics">
      <p>
        Soft bodies are simulated with <strong>Position Based Dynamics</strong>{" "}
        (PBDS). Each step, particle positions are predicted from their
        velocities, then a set of constraints is solved iteratively by
        projecting particle positions directly back onto valid
        configurations. Velocities are then derived from how far each particle
        moved. The engine also implements <strong>XPBDS</strong>, the extended
        formulation that adds compliance to each constraint so that stiffness
        behaves consistently regardless of the timestep and iteration count.
      </p>
      <Video
        src="assets/Videos/Deformable_Volume.mp4"
        poster="assets/Videos/Deformable_Volume.jpg"
        caption="A soft body picked up with the mouse and dropped, held in shape by the volume constraint"
      />
      <h3>Constraints</h3>
      <p>The solver combines standard PBD constraints with ones designed for volumetric meshes:</p>
      <ul>
        <li>
          <strong>Distance</strong>: keeps connected particles at their rest
          length.
        </li>
        <li>
          <strong>Height / floor friction</strong>: stops particles passing
          through the floor and applies friction when they are in contact with it.
        </li>
        <li>
          <strong>Volume</strong>: preserves the volume of each cell so the body
          does not collapse or inflate.
        </li>
        <li>
          <strong>Face distance and face angle</strong> (novel): constraints
          defined on the faces of polyhedral cells, which keep cells that are
          not simple tetrahedra in shape.
        </li>
      </ul>
      <FigureRow>
        <Figure src={`${IMG}image4.png`} caption="A vertex of the cylinder being dragged with the mouse" />
        <Figure src={`${IMG}image8.png`} caption="Polyhedral sphere resting on the floor" />
      </FigureRow>
      <p>
        The individual cells of a polyhedral mesh are held together by a{" "}
        <strong>face-vertex glue</strong> constraint. With the glue stiffness
        at zero the cells separate and fall into a loose pile. Raising it live
        pulls them back together into a single body.
      </p>
      <Video src="assets/Videos/Deformable_Glue.mp4" caption="Raising the face-vertex glue stiffness reassembles a collapsed mesh" />
    </ProjectSection>

    <ProjectSection title="Cutting" id="cutting">
      <p>
        The cutting tool slices a volumetric mesh along a plane in real time,
        producing <strong>two new polyhedral meshes</strong> that carry on
        being simulated. The cutting plane can be rotated and positioned through
        the UI, with a debug view showing exactly how the mesh is being split.
      </p>
      <FigureRow>
        <Figure src={`${IMG}image13.png`} caption="Cutting plane controls" maxWidth="300px" />
        <Figure src={`${IMG}image14.png`} caption="Debug view: vertices are coloured by which side of the plane they fall on, with intersection points in red" />
      </FigureRow>
      <h3>How a cut works</h3>
      <ol>
        <li>Each polyhedron is tested against the plane. This test has to be fast because it runs over every cell in the mesh.</li>
        <li>Cells that cross the plane are split at the points where their edges intersect it.</li>
        <li>New faces are reconstructed along the cut so that both halves are closed.</li>
        <li>The two resulting meshes are handed back to the physics system as independent bodies.</li>
      </ol>
      <FigureRow>
        <Figure src={`${IMG}image16.png`} caption="A single tetrahedron..." />
        <Figure src={`${IMG}image17.png`} caption="...intersected by the cutting plane..." />
        <Figure src={`${IMG}image18.png`} caption="...and split into two polyhedra" />
      </FigureRow>
      <FigureRow>
        <Figure src={`${IMG}image19.jpg`} caption="A sphere cut into two independent bodies" />
        <Figure src={`${IMG}image20.jpg`} caption="The same cut in wireframe, showing the reconstructed faces" />
      </FigureRow>
      <FigureRow>
        <Figure src={`${IMG}image22.png`} caption="Cutting a bone mesh lengthways" />
        <Figure src={`${IMG}image23.png`} caption="Debug view of the same cut" />
      </FigureRow>
    </ProjectSection>
  </ProjectPage>
);

export default GameEngine;
