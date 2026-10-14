import React from "react";
import ProjectPage, {
  ProjectSection,
  FeatureCards,
  Figure,
  FigureRow,
  Callout,
} from "./ProjectPage";

// Screenshots are hosted on the project's GitHub repository
const GH = "https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/";

const overviewCards = [
  {
    title: "Level Generator",
    color: "#80c352",
    href: "level-generator",
    groups: [
      {
        heading: "Rules-based layout",
        items: [
          "Multiple paths from start to exit",
          "Rooms and rotated tunnels",
          "Configurable interconnections",
        ],
      },
      { heading: "Room nodes", items: ["Low-LOD navigation graph for pathing"] },
    ],
  },
  {
    title: "Marching Cubes",
    color: "#a666e1",
    href: "marching-cubes",
    groups: [
      {
        heading: "Voxel terrain",
        items: [
          "Signed distance fields from rooms and tunnels",
          "Interpolated surface placement",
          "Fully deterministic meshing",
        ],
      },
    ],
  },
  {
    title: "Noise",
    color: "#30acec",
    href: "adding-noise",
    groups: [
      {
        heading: "Organic cave walls",
        items: [
          "3D Perlin noise (FastNoise)",
          "Scaled by the SDF so it shapes walls without blocking rooms",
        ],
      },
    ],
  },
  {
    title: "Chunks",
    color: "#e29d3e",
    href: "chunks",
    groups: [
      {
        heading: "Performance",
        items: [
          "Only mesh chunks that overlap the cave",
          "Configurable chunk size and voxel density",
          "Locked 60fps in testing",
        ],
      },
    ],
  },
];

const CaveGen = () => (
  <ProjectPage
    title="Procedural Jones"
    subtitle="Raiders of the Randomly Generated Relics: a UE5 tech demo that generates walkable cave systems from a rules-based level layout and marching cubes terrain."
    hero="assets/Images/PJ_CaveGen.png"
    heroAlt="A torch-lit procedurally generated cave tunnel"
    tags={["Unreal Engine 5", "C++", "Procedural Generation", "Marching Cubes", "SDF"]}
    links={[{ label: "View on GitHub", href: "https://github.com/Peregrine777/Procedural-Jones-CaveGen" }]}
  >
    <FeatureCards cards={overviewCards} />

    <ProjectSection title="The Concept">
      <p>
        Get into the cave system, find the relics, and escape. Collected relics
        are placed on specially shaped pedestals to open the exit.
      </p>
      <p>
        The cave is produced by two systems working together. A{" "}
        <strong>level generator</strong> lays out rooms and tunnels, and a{" "}
        <strong>marching cubes</strong> mesher turns that layout into terrain,
        creating chunks only where the level needs them.
      </p>
      <p>
        Both systems are deterministic, so a level can be reproduced exactly
        from its settings. This matters because a full level can be too large
        to save, and regenerating it is cheap.
      </p>
    </ProjectSection>

    <ProjectSection title="Using the Generator">
      <p>
        The <code>AProceduralCaveGen</code> actor holds all the controls for
        generation, grouped into sections for the cave generator, chunks and
        noise. The defaults generate a simple test level that is light on
        performance.
      </p>
      <Figure src={`${GH}1c3a2bff-599e-4fa3-a518-0df90b4b9b3c`} caption="Generator controls in the Unreal editor" maxWidth="500px" />
      <h3>Debug options</h3>
      <p>
        Each section has its own debug options. The generator can draw the
        rooms and tunnels in realtime, and can be limited to rendering a single
        chunk instead of the whole level.
      </p>
      <FigureRow>
        <Figure src={`${GH}99c5ac0b-7014-4df2-af80-d0c70fcaaf3e`} caption="Debug options on the generator actor" />
                <Figure src={`${GH}be371226-3459-457f-a9ca-cc606e53f113`} caption="Rooms and tunnels drawn by the debug view" />
      </FigureRow>
      <p>
        It can also show the <strong>room nodes</strong>, a low-LOD set of
        navigation nodes that allows efficient pathing across a large level.
      </p>
      <Figure src={`${GH}f95c9644-9193-46c1-9e00-8192011e9f1f`} caption="Room nodes" />
      <p>The chunk section can show chunk borders and every individual voxel.</p>
      <FigureRow>
        <Figure src={`${GH}e6e352f9-27d5-4779-b80e-cbb066af2b39`} caption="Chunk borders around the level" />
        <Figure src={`${GH}4dd73271-4cb8-4848-9b72-89232389d541`} caption="Voxel debug view" />
      </FigureRow>
      <Callout type="warning">
        Only enable <code>DebugVoxels</code> when <code>DebugOnly1Chunk</code>{" "}
        is on and <code>VoxelDensity</code> is less than 12.
      </Callout>
      <p>
        Solids can also be inverted to make the cave visible from the outside,
        which has a corresponding effect on the voxel values.
      </p>
      <FigureRow>
        <Figure src={`${GH}45bbfb00-dbcf-4ac7-a017-7b387cacc488`} caption="Inverted solids" />
        <Figure src={`${GH}dfc81642-120f-417e-ac4b-8ea137417d9c`} caption="Inverted solids lit by a directional light" />
      </FigureRow>
    </ProjectSection>

    <ProjectSection title="Level Generator" id="level-generator">
      <h3>Inputs</h3>
      <ul>
        <li>Level size</li>
        <li>Height difference between the start point and the end point</li>
        <li>Minimum and maximum cave sizes</li>
        <li>Number of paths (minimum 2)</li>
        <li>Approximate number of boxes per path (4 in the diagram below)</li>
        <li>Interconnection ratio (at 1 it generates all possible interconnections)</li>
      </ul>
      <Figure src={`${GH}7ea215e1-8dc0-4b87-b27b-877c40469a2b`} caption="Level layout: paths, boxes and interconnections" />
      <h3>Operation</h3>
      <p>
        The cave system is laid out as a series of boxes. A starting box is
        placed at <code>(0, 0, 0)</code> and an ending box at{" "}
        <code>(LevelSize, 0, 0)</code>.
      </p>
      <p>
        The distance between them is filled with roughly{" "}
        <code>numBoxesPerPath</code> boxes, and there can be more than one
        path. Each step moves towards the destination by about that distance,
        with a random offset applied to the heading, and places a box. The new
        box is then linked to the previous box on its path.
      </p>
      <h4>Room creation</h4>
      <p>
        When a box (room or tunnel) is placed, it runs a hook that can spawn
        items. Currently this places a light inside each room.
      </p>
      <Callout type="todo">
        This hook will be used to randomly spawn enemies, torches (as the light
        sources) and traps.
      </Callout>
      <h4>Tunnel creation</h4>
      <p>
        A tunnel is a room with a defined start and end box. Tunnels are
        rotated and sized to face their destination box, and are offset from
        the centre of the box so they are not created above head height. The
        offset also makes the separate paths clear to the player.
      </p>
      <Figure src={`${GH}3b486113-39a8-4d96-b7bc-d74ff782b652`} caption="Offset tunnels between rooms" />
      <h4>Interconnections</h4>
      <p>
        Interconnections are then generated based on the{" "}
        <strong>Interconnectedness</strong> variable. They work like rungs on a
        ladder, connecting a box on one path to a box on another. A connection
        is possible if it does not intersect another box and its gradient is not
        too steep to walk. At 1, the generator creates every possible
        interconnection.
      </p>
      <FigureRow>
        <Figure src={`${GH}d41c1357-46c0-4fff-b453-4a1d975f5b1c`} caption="High interconnectedness" />
        <Figure src={`${GH}0a6e98e6-42f9-4f64-b189-c08f39153dc3`} caption="Low interconnectedness" />
      </FigureRow>
      <h4>Chunk creation</h4>
      <p>
        The generator then divides the world into chunks. A chunk is only
        created if it intersects one of the boxes or tunnels, plus a small
        margin. Only voxels inside a chunk are evaluated during marching cubes,
        which is the main source of efficiency (see{" "}
        <a href="#chunks" onClick={(e) => { e.preventDefault(); document.getElementById("chunks")?.scrollIntoView({ behavior: "smooth" }); }}>
          <u>Chunks</u>
        </a>
        ). The intersection test has to account for tunnel rotation, which makes
        it slower. Chunk sizes of 256, <strong>512</strong> and 1024 work well.
      </p>
      <FigureRow>
        <Figure src={`${GH}6cae2a5b-f760-4665-a693-e88809d8e89c`} caption="1024 sized chunks" />
        <Figure src={`${GH}21919075-5d52-40bb-8641-cfd83bd3122f`} caption="512 sized chunks" />
        <Figure src={`${GH}59c0a2f2-e171-4056-9743-a28f79f8ea1e`} caption="256 sized chunks" />
      </FigureRow>
    </ProjectSection>

    <ProjectSection title="Marching Cubes" id="marching-cubes">
      <p>
        The object data (every object that affects the voxel field, plus the
        chunks to be meshed) is passed to the marching cubes terrain mesher.
      </p>
      <Callout type="todo">
        This could be sped up by only passing objects in the same area as the
        chunk, using spatial hashing or the result of the chunk overlap test.
      </Callout>
      <h3>Voxels</h3>
      <p>
        The level boxes need to become geometry that can be distorted with
        noise. Otherwise the cave would just be a set of cubes. To do this the
        space is sampled at discrete points called voxels (volumetric pixels).
        Each voxel measures its distance to every object, minus the size of
        the object in the direction of the voxel.
      </p>
      <h4>Signed distance fields</h4>
      <FigureRow>
        <Figure src={`${GH}7cbc74c2-d07b-413e-aceb-6d32721cbc83`} caption="A voxel and a level box" />
        <Figure src={`${GH}73564014-90c9-4e51-99ae-01b5499d8a34`} caption="Distance to the box centre, minus half the box length" />
        <Figure src={`${GH}90aaa7c7-d28b-4472-ba3c-260396d483df`} caption="The resulting signed distance" />
      </FigureRow>
      <p>
        The example above is aligned with one axis of the box. When a voxel is
        not aligned with any major axis, the distance is the sum of the
        components in that direction. Tunnels are rotated, so voxels are first
        transformed into the tunnel&apos;s local space by multiplying by the
        inverse quaternion.
      </p>
      <p>
        Points outside an object return a positive value, points inside return
        a negative value, and points exactly on the surface return 0.
      </p>
      <h3>The algorithm</h3>
      <p>
        Marching cubes turns this field into a mesh. In 2D the idea is simple:
        sample a boolean field (1 or 0) at the four corners of a square, then
        draw a line between the midpoints of each edge whose corners have
        opposite values.
      </p>
      <Figure src={`${GH}e0015767-7641-46fe-b3eb-39a1fe6ab189`} caption="Marching squares cases" maxWidth="600px" />
      <p>
        The same idea scales to 3D. Instead of a line, each cube produces a
        surface patch that is split into triangles.
      </p>
      <p>
        If the values are -1 and 1 instead of 0 and 1, the midpoint lies where
        the field is 0. If the values are floats between -1 and 1, a line is
        drawn only where the signs differ, and it is biased towards the value
        with the smallest magnitude.
      </p>
      <Figure src={`${GH}288b6227-87bc-4943-8c86-59027b987dc2`} caption="Interpolating the surface between samples" maxWidth="500px" />
      <p>
        If a filled circle is 1.0 and an unfilled one is -1.0, the points are
        as far apart as they can be: <strong>2.0</strong>. If the filled
        circle is only 0.2, the points are 1.2 apart, and the line moves 80%
        of the way towards the filled circle,{" "}
        <em>measured from the midpoint between it and the unfilled circle</em>.
      </p>
      <p>Marching this over the voxels produces the rooms.</p>
      <Figure src={`${GH}5bf9491c-386c-4efd-9004-94562eb00c2b`} caption="Rooms meshed with marching cubes" />
      <Callout type="note">
        The triangle lookup tables, which map each pattern of corner values to
        a set of triangles, are adapted from Sebastian Lague&apos;s Marching
        Cubes video.
      </Callout>
    </ProjectSection>

    <ProjectSection title="Adding Noise" id="adding-noise">
      <p>The walls are distorted with 3D Perlin noise from FastNoise (MIT license).</p>
      <p>
        Originally each voxel was simply 1 if it was inside an object and -1
        otherwise. Adding noise to that either had no visible effect or left
        floating bits of rock in the way, so the player couldn&apos;t walk
        anywhere. Switching to a signed distance field lets the noise be scaled
        by how close the voxel is to a surface. The noise has the most effect
        on the walls and leaves the interior of the room clear.
      </p>
      <p>
        The SDF is scaled to reach its maximum at about one human&apos;s
        height, so no room is squeezed too small to walk through. The noise
        outputs values between -1 and 1, so multiplying it by{" "}
        <code>1 / abs(voxelValue)</code> concentrates its effect on the walls.
      </p>
      <Callout type="todo">
        The noise is currently very high frequency (lots of small geometry).
        The plan is to mix frequencies using fractal Brownian motion.
      </Callout>
    </ProjectSection>

    <ProjectSection title="Chunks" id="chunks">
      <p>Take this as the target resolution for the cave:</p>
      <Figure src={`${GH}d948857f-575f-404d-b415-cf9ec7bb10f6`} caption="Target resolution" />
      <p>
        Reaching it across the whole cave takes 32 voxels per side of a chunk.
        The debug image earlier had 8.
      </p>
      <Figure src={`${GH}dd2674e0-0037-442a-a44a-d479963582d5`} caption="32 voxels per chunk side" />
      <p>
        Each chunk therefore holds 32³ voxels. The test level is about 10,000
        units long, so with a chunk size of 1024 it is roughly 10 chunks long.
        Without chunks, a cube-shaped play area that fits the level would need
        320³ voxels. Each of those needs its signed distance to the nearest
        object, which means looping over every object. That is too much, and
        Unreal Engine crashes when it is attempted.
      </p>
      <p>
        Chunks divide up the level instead, and only chunks that overlap a box
        are meshed. This drastically reduces the number of checks. Smaller
        chunks make generation faster, up to a point: chunks the size of a
        single voxel would only add overhead.
      </p>
      <p>
        These overlap checks can&apos;t use the fast axis-aligned tests from
        room placement. They must account for the rotation of each tunnel,
        otherwise some tunnels end up with holes.
      </p>
      <h3>Voxels per chunk</h3>
      <p>
        The voxel debug image looks like it has 8 voxels per side, but there
        are actually 9. Each chunk adds one extra voxel per dimension, matching
        the first voxels of the next chunk, so the two chunks join without a gap.
      </p>
      <Callout type="question">
        Small seams are still visible between some chunks if you look closely.
        This is likely related to this overlap step, float precision and
        powers of 2.
      </Callout>
    </ProjectSection>

    <ProjectSection title="Performance and Next Steps">
      <p>
        The level already performs well, staying at the 60fps cap in every
        scenario tested. That holds even at high resolutions such as a 512
        chunk size with a voxel density of 32.
      </p>
      <Figure src={`${GH}87811213-6941-474e-90a7-fe63230a06ba`} caption="512 chunk size, 32 voxel density" />
      <p>
        Loading time and memory use during generation are the main areas left
        to optimise. RAM use reaches 16GB at a 512 chunk size with 64 voxel
        density. The system is already set up to work well when chunk sizes or
        voxel densities are changed.
      </p>
      <Figure src={`${GH}54f2e65c-7d36-4ce3-871c-d3a762b4d8e9`} caption="512 chunk size, 64 voxel density" />
      <h3>Planned work</h3>
      <ul>
        <li>
          Finish the remaining generator TODOs, especially placing navigation
          nodes inside the generated geometry. AI can already path between
          rooms but needs more detail than that.
        </li>
        <li>
          Integrate the AI and let it detect blocked routes. After trying and
          failing to get through, an agent would remove the node-to-node
          connection it thought was valid. Jumping and crouching for enemies
          are also planned.
        </li>
        <li>
          <strong>Interactive torches:</strong> some rooms spawn without
          lights. The player can light and snuff wall torches and carry a torch
          with them. Light helps you see, but a dark room keeps you from being
          caught.
        </li>
        <li>
          Bonus: a minecart escape sequence using splines and explosions.
        </li>
      </ul>
    </ProjectSection>
  </ProjectPage>
);

export default CaveGen;
