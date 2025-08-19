import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Features from "../../Features";
import { SettingsMenu, Contact, Socials } from "..";
import * as Sections from "../Sections";

import "./GloriaArmada.css";

const Test = (props) => {
  document.body.classList.remove("no-scroll");

  const [localDarkMode, setLocalDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : true;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(localDarkMode));
  }, [localDarkMode]);

  const localToggleDarkMode = () => {
    setLocalDarkMode((prevMode) => !prevMode);
  };
  const darkMode = props.darkMode ?? localDarkMode;
  const toggleDarkMode = props.toggleDarkMode ?? localToggleDarkMode;

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState("Test");
  const [lightboxStyle, setLightboxStyle] = useState(null);
  const navigate = useNavigate();

  const handleOpenLightbox = (content, style) => {
    document.body.classList.add("no-scroll");

    history.pushState({ lightboxOpen: true }, "", "#lightbox");
    setLightboxContent(content);
    setLightboxStyle(style);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    document.body.classList.remove("no-scroll");
    setIsLightboxOpen(false);
    if (history.state?.lightboxOpen) {
      setTimeout(() => history.back(), 100);
    }
  };
  return (
    <div>
      <Features.LightboxModal
        darkMode={darkMode}
        isOpen={isLightboxOpen}
        content={lightboxContent}
        style={lightboxStyle}
        onClose={handleCloseLightbox}
      />
      <Sections.Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Features.Section
          title="about"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <div> </div>
        </Features.Section>

        <Features.Section
          title="Overview"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <div className="flex-container" style={{ padding: "10px" }}>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#80c352" }}
              >
                <h2>FBM Terrain</h2>
              </div>
              <div className="column-content-inner">
                <h3>Graph Based Marching Squares Cave System</h3>
                <ul>
                  <li> Random walk (ivy algo) path construction</li>
                  <li> Modular configurable cave system generation</li>
                </ul>
                <h3>Organic Rooms with Noise</h3>
                <ul>
                  <li>
                    {" "}
                    Use cave graph as premise for a cube/rectangular prism cave
                    system
                  </li>
                  <li> FBM-driven organic looking cave room shapes </li>
                </ul>
                <h3>Misc</h3>
                <ul>
                  <li>
                    Fracturing and breakup with preservation of angular and part
                    momentum
                  </li>
                </ul>
              </div>
            </div>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#a666e1" }}
              >
                <h2>AI</h2>
              </div>
              <div className="column-content-inner">
                <h3> State Machine AI</h3>
                <ul>
                  <li> Fly to Location</li>
                  <li> Fly to Target</li>
                  <li> Fly Heading</li>
                  <li> Intercept</li>
                  <li> Formation with </li>
                  <li> Shoot At Target </li>
                  <li> Evade </li>
                </ul>
                <h3> Features </h3>
                <ul>
                  <li> Targeting with 1st and 2nd order intercepts</li>
                  <li> Target prioritization </li>
                </ul>
              </div>
            </div>
            <div className="column-content-container">
              <div
                className="column-content-titlebar"
                style={{ backgroundColor: "#30acec" }}
              >
                <h2>Graphics</h2>
              </div>
              <div className="column-content-inner">
                <h3> Particles </h3>
                <ul>
                  <li>
                    {" "}
                    Global Particle Manager with intelligent pooling and culling{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Features.Section>

        <Features.Section
          title="Physics"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <h2 id="procedural-jones-raiders-of-the-randomly-generated-relics">
            Procedural Jones: Raiders of the Randomly Generated Relics
          </h2>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/d76dba22-63a7-48f7-bdf0-1706b5d6add0"
              alt="Pasted image 20231012151325"
            />
          </p>
          <pre>
            <code class="lang-ad-abstract">
              Get into the cave system, find switch(es), escape (Place collected
              relics on to specially shaped pedestals to open{" "}
              <span class="hljs-keyword">exit</span>)
            </code>
          </pre>

          <li>Smokescreen (AI/Player?)</li>
          <h4 id="bonus">Bonus</h4>
          <ul>
            <li>
              Minecart escape sequence (hehe)
              <ul>
                <li>Splines</li>
                <li>Explosions</li>
              </ul>
            </li>
          </ul>
          <h2 id="pcg-a3-sam-mckenzie-sell">PCG A3 - Sam Mckenzie-Sell</h2>
          <p>
            For assignment 3 I have worked on a procedural cave generation
            system that combines a level generator that places rooms and tunnels
            and a marching Cubes system that intelligently creates chunks based
            on the level.{" "}
          </p>
          <p>
            The system uses deterministic algorithms to generate the cave and
            mesh, making replication of the level (which can be too large to
            save) light on performance.{" "}
          </p>
          <p>
            To interact with the level go to Levels, SamTests, ProceduralMap.{" "}
          </p>
          <p>
            The AProceduralCaveGen Actor contains the controls for the
            generation. These controls are arranged in to sections for the
            CaveGen, Chunks and Noise
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/1c3a2bff-599e-4fa3-a518-0df90b4b9b3c"
              alt="Pasted image 20231010163948"
            />
          </p>
          <p>
            By default I have set this up to generate simple test level that is
            light on performance.
          </p>
          <h3 id="debug-options">Debug options</h3>
          <p>
            Debug options are at the bottom of each section. In PCG You can
            toggle Showing the rooms/tunnels in realtime and set it to only
            render 1 chunk instead of the whole level.
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/99c5ac0b-7014-4df2-af80-d0c70fcaaf3e"
              alt="Pasted image 20231012104255"
            />
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/68069a4d-9c1f-403e-b66d-706d4273359d"
              alt="Pasted image 20231012104255"
            />
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/be371226-3459-457f-a9ca-cc606e53f113"
              alt="Pasted image 20231010164352"
            />
          </p>
          <p>
            You can also set it to show the RoomNodes, low LOD navNodes that
            will allow for efficient pathing across a large level.
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/f95c9644-9193-46c1-9e00-8192011e9f1f"
              alt="Pasted image 20231012104206"
            />
          </p>
          <p>
            In Chunks you can show Chunk Borders and show every voxel
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/e6e352f9-27d5-4779-b80e-cbb066af2b39"
              alt="Pasted image 20231010164431"
            />
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/4dd73271-4cb8-4848-9b72-89232389d541"
              alt="Pasted image 20231010164604"
            />
          </p>
          <pre>
            <code class="lang-ad-warning">
              <span class="hljs-keyword">Do</span>{" "}
              <span class="hljs-keyword">not</span> turn{" "}
              <span class="hljs-keyword">on</span> DebugVoxels unless
              DebugOnly1Chunk <span class="hljs-keyword">is</span>{" "}
              <span class="hljs-keyword">ON</span>{" "}
              <span class="hljs-keyword">and</span> VoxelDensity{" "}
              <span class="hljs-keyword">is</span>{" "}
              <span class="hljs-keyword">less</span>{" "}
              <span class="hljs-keyword">than</span>{" "}
              <span class="hljs-number">12.</span>
            </code>
          </pre>
          <p>
            You can also invert the solids to make the cave visible from the
            outside, which has a corresponding impact on the voxel values
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/45bbfb00-dbcf-4ac7-a017-7b387cacc488"
              alt="Pasted image 20231010164727"
            />
          </p>
          <p>
            (Invert solids with a directional light in the scene)
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/dfc81642-120f-417e-ac4b-8ea137417d9c"
              alt="Pasted image 20231010164847"
            />
          </p>
          <h3 id="level-generator-controls">Level Generator Controls</h3>
          <h4 id="inputs-">Inputs:</h4>
          <ul>
            <li>LevelSize</li>
            <li>
              HeightDifference (The difference between the start point and the
              end point)
            </li>
            <li>Cave min/max sizes</li>
            <li>Number of paths (minimum 2)</li>
            <li>
              Approximate number of boxes per path (in diagram below this is 4)
            </li>
            <li>
              Interconnection ratio (at 1 it generates ALL possible
              interconnects)
              <img
                src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/7ea215e1-8dc0-4b87-b27b-877c40469a2b"
                alt="Pasted image 20231010120934"
              />
            </li>
          </ul>
          <h4 id="operation">Operation</h4>
          <p>
            The Cave generation system lays out the cave system using a series
            of boxes. A starting box is placed at 0, 0, 0 An ending box is
            placed at Levelsize, 0, 0
          </p>
          <p>
            The distance between start/end will be filled by approximately
            &#39;numBoxesPerPath&#39; boxes and there can be more than one path
            So we go towards the destination, but with some accuracy smudge
            factor, by approximately that distance and place a box The box we
            just placed is then linked to the box before it on the path.{" "}
          </p>
          <h5 id="room-creation">Room Creation</h5>
          <p>
            When a box (room or tunnel) is placed it also runs some code that
            can be used to spawn items. At the moment this just generates a
            light on the inside of the rooms.
          </p>
          <pre>
            <code class="lang-ad-todo">
              This will be used <span class="hljs-keyword">to</span> randomly
              spawn enemies, torches (<span class="hljs-keyword">for</span>{" "}
              <span class="hljs-keyword">the</span> light sources){" "}
              <span class="hljs-keyword">and</span>{" "}
              <span class="hljs-keyword">some</span> traps
            </code>
          </pre>
          <h5 id="tunnel-creation">Tunnel Creation</h5>
          <p>A tunnel is just a room but with a start and end box defined. </p>
          <p>
            Tunnels are rotated and sized to face the destination box, they are
            also offset from the center of the box to stop tunnels being made
            above head height.{" "}
          </p>
          <p>
            Offsetting the tunnels also makes the different paths clear to the
            player
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/3b486113-39a8-4d96-b7bc-d74ff782b652"
              alt="Pasted image 20231012164539"
            />
          </p>
          <h5 id="interconnections">Interconnections</h5>
          <p>
            We then generate interconnects based on the{" "}
            <strong>Interconnectedness</strong> variable. Interconnections are
            like rungs on a ladder, they connect a box from one path to another.
            If the variable is 1, it will try to create all possible
            interconnections. A connection is deemed &quot;possible&quot; if it
            doesn&#39;t intersect with another box, and the gradient isn&#39;t
            so steep you can&#39;t walk down it.{" "}
          </p>
          <p>
            High vs Low interconnectedness
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/d41c1357-46c0-4fff-b453-4a1d975f5b1c"
              alt="Pasted image 20231010172846"
            />
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/0a6e98e6-42f9-4f64-b189-c08f39153dc3"
              alt="Pasted image 20231010172902"
            />
          </p>
          <h4 id="chunk-creation">Chunk Creation</h4>
          <p>
            The system then generates chunks within the world. A chunk is just a
            small section of our cave - I&#39;ll detail why we need chunks
            later. A chunk is only created if it intersects with one of the
            boxes or tunnels (+ a small margin of error). Because the chunk
            collision check includes tunnels (and their rotation) the check for
            intersection is a little slow. Only the voxels inside a chunk will
            be checked during marching cubes, this gives us a good way to
            increase efficiency. I&#39;ve found 256, <strong>512</strong>, 1024
            to be good values.{" "}
          </p>
          <p>1024 sized chunks</p>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/6cae2a5b-f760-4665-a693-e88809d8e89c"
              alt="Pasted image 20231010174157"
            />
          </p>
          <p>512</p>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/21919075-5d52-40bb-8641-cfd83bd3122f"
              alt="Pasted image 20231010174213"
            />
          </p>
          <p>256</p>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/59c0a2f2-e171-4056-9743-a28f79f8ea1e"
              alt="Pasted image 20231010174249"
            />
          </p>
          <h3 id="marching-cubes">Marching Cubes</h3>
          <p>
            The object data (all objects that will interact with the voxel
            fields, and the chunks to be meshed) is passed to the marching Cubes
            Terrain mesher.{" "}
          </p>
          <pre>
            <code class="lang-ad-todo">
              This could be sped up <span class="hljs-keyword">by</span> only
              passing objects that are <span class="hljs-keyword">in</span>{" "}
              <span class="hljs-keyword">the</span> same area{" "}
              <span class="hljs-keyword">as</span>{" "}
              <span class="hljs-keyword">the</span> chunk. Spatial hash
              functions <span class="hljs-keyword">or</span>{" "}
              <span class="hljs-keyword">an</span> additional input (based{" "}
              <span class="hljs-keyword">on</span>{" "}
              <span class="hljs-title">the</span>{" "}
              <span class="hljs-title">overlap</span>{" "}
              <span class="hljs-title">test</span>)
            </code>
          </pre>
          <h4 id="voxels">Voxels</h4>
          <p>
            Given the level boxes (rooms, tunnels) that make up the cave, we now
            need a way to generate geometry, in such a way that we can add noise
            and distort the shapes so we don&#39;t just end up with... cubes.{" "}
          </p>
          <p>
            To do this we sample the space at discrete locations, these voxels
            (volumetric pixels) will check their distance to every object in the
            array, subtracted by the size of the object in the direction of the
            voxel.{" "}
          </p>
          <h5 id="signed-distance-fields">Signed Distance Fields</h5>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/7cbc74c2-d07b-413e-aceb-6d32721cbc83"
              alt="Pasted image 20231012154726"
            />
          </p>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/73564014-90c9-4e51-99ae-01b5499d8a34"
              alt="Pasted image 20231012155020"
            />
          </p>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/90aaa7c7-d28b-4472-ba3c-260396d483df"
              alt="Pasted image 20231012155146"
            />
          </p>
          <p>
            In this scenario we are directly parallel with the length, but if
            the voxel is not parallel with any major axis of the box then it
            needs to be the sum of the components in that direction.{" "}
          </p>
          <p>
            The tunnels are also rotated, to check for that we just unrotate
            everything first. (Multiply by inverse quaternion)
          </p>
          <p>
            If the object is outside the object, it will return a positive
            number, if it is inside it will return a negative number. If it lies
            exactly on the surface the value will be 0.{" "}
          </p>
          <h4 id="the-algorithm">The algorithm</h4>
          <p>
            So we have a bunch of boxes in an area... we need to create our
            geometry.
          </p>
          <p>
            Creating geometry is easy, we&#39;ve done that in the Procedural
            Landscape tutorial - so a lot of this will be copy pasted from that.
            But that created a 2D plane, we need a lot of 3D geometry to make
            our caves.{" "}
          </p>
          <p>
            We&#39;ll use an algorithm called Marching Cubes to do this. The
            premise is surprisingly simple. If we have some random boolean noise
            (1 or 0) that we sample at 4 points then we could make a square out
            of those 4 points, drawing a line between the midpoints of the
            square where the values are opposite.
          </p>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/e0015767-7641-46fe-b3eb-39a1fe6ab189"
              alt="MarchingCubesCases"
            />
          </p>
          <p>
            This idea scales up to 3D as well, instead of a line it will
            generate a rectangle, which we can split to make 2 triangles.{" "}
          </p>
          <p>
            If the values are not 0 or 1, but instead -1 and 1 then our midpoint
            line lies where the field is 0.{" "}
          </p>
          <p>
            Lastly, if the values are not boolean but instead some float between
            -1 and 1 then we can draw the line only if they have opposite signs,
            and bias it towards the smallest (absolute) value.{" "}
          </p>
          <p>
            So if we look at this example again
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/288b6227-87bc-4943-8c86-59027b987dc2"
              alt="Pasted image 20231012153739"
            />
          </p>
          <p>
            If a filled circle = 1.0 and unfilled = -1.0 the above is correct.
            The points are the maximum difference apart they could be:{" "}
            <strong>2.0</strong>.
          </p>
          <p>
            But if the filled circle is only 0.2 then the points lie only 1.2
            units apart. The line will be drawn 80% of the way towards the
            filled circle{" "}
            <em>from the midpoint between it and the unfilled circles</em>
          </p>
          <p>
            We can march this over the voxels we created earlier and make the
            rooms!
          </p>
          <p>
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/5bf9491c-386c-4efd-9004-94562eb00c2b"
              alt="Pasted image 20231012155433"
            />
          </p>
          <pre>
            <code class="lang-ad-note">
              I<span class="hljs-symbol">'m</span> using a bunch{" "}
              <span class="hljs-keyword">of</span> precalculated functions that
              define how different patterns <span class="hljs-keyword">of</span>{" "}
              <span class="hljs-number">1</span>
              <span class="hljs-symbol">'s</span>{" "}
              <span class="hljs-keyword">and</span>{" "}
              <span class="hljs-number">0</span>
              <span class="hljs-symbol">'s</span>{" "}
              <span class="hljs-keyword">for</span> each{" "}
              <span class="hljs-keyword">of</span> the vertices{" "}
              <span class="hljs-keyword">of</span> the box will result{" "}
              <span class="hljs-keyword">in</span> triangles. These have been
              adapted from Sebastian Lague<span class="hljs-symbol">'s</span>{" "}
              brilliant Marching Cubes video
            </code>
          </pre>
          <h4 id="adding-noise">Adding Noise</h4>
          <p>
            For the Procedural Landscape we used 2D Perlin Noise, I&#39;m just
            using the same thing but in 3D from FastNoise (MIT license).
          </p>
          <p>
            Originally the voxels were calculated just by checking if they were
            inside, if they were they had a value of 1, otherwise -1. But if you
            introduce noise into that you end up with either no effect or bits
            of rock hovering in your face so you can&#39;t walk anywhere.
            Switching to the Signed Distance Function (SDF) means that we can
            scale the noise based on how close the original voxel was to a
            surface. So we can have maximum impact on the walls themselves,
            without clogging up the interior of the room.{" "}
          </p>
          <p>
            We scale the SDF so that it reaches a maximum at about 1 human&#39;s
            height (to try to ensure that no room is crushed too small to walk
            through). The noise will output values between -1 and 1, so all we
            need to do is multiply the noise by 1/abs(voxelValue) and it will
            impact the walls
          </p>
          <pre>
            <code class="lang-ad-todo">
              The noise <span class="hljs-keyword">is</span> currently very high
              frequency (lots <span class="hljs-keyword">of</span> small
              geometry) <span class="hljs-keyword">but</span> I'd like{" "}
              <span class="hljs-keyword">it</span>{" "}
              <span class="hljs-keyword">to</span> have a mixture{" "}
              <span class="hljs-keyword">of</span> frequencies using fractal
              brownian motion.
            </code>
          </pre>
          <h4 id="chunks">Chunks</h4>
          <p>
            Say that we want a reasonable resolution for our cave:
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/d948857f-575f-404d-b415-cf9ec7bb10f6"
              alt="Pasted image 20231012151325"
            />
          </p>
          <p>
            Achieving this sort of resolution over the entire cave requires 32
            voxels per side length of chunk. The debug image earlier had 8.
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/dd2674e0-0037-442a-a44a-d479963582d5"
              alt="Pasted image 20231012151444"
            />
            Therefore each chunk will contain 32^3 voxels. The test level
            I&#39;m using is about 10,000 units in length, and at a chunk size
            of 1024 that means it will be around 10 chunks long. If we&#39;re
            not using chunks that means we need 320^3 voxels to make a cube
            shaped play area that fits the level.{" "}
          </p>
          <p>
            And for each voxel we aim to calculate the (signed) distance between
            that voxel and the nearest object. (looping through all objects)
          </p>
          <p>This is... too much. Unreal Engine crashes upon trying it.</p>
          <p>
            Instead we will use the chunks to divide up the level, and only draw
            chunks where they overlap with a box. That drastically reduces our
            checks. The smaller we make our boxes, the faster this whole thing
            will run - up to a point. If we made our chunks the size of a single
            voxel (each containing a single voxel) then we will have just added
            overhead for no gain.{" "}
          </p>
          <p>
            Note that the box checks can&#39;t be the super fast ones I was
            using for room placement, they have to take into account the
            rotation of the destination box (in the case of tunnels). Without
            this there will be holes in some of the tunnels.{" "}
          </p>
          <h5 id="voxels-chunk">Voxels / Chunk</h5>
          <p>
            Earlier I stated that the debug image of voxels had 8 per side, but
            actually there are 9. We&#39;ve added one extra voxel per dimension
            which should be the same as the first voxels for the next chunk. We
            need both chunks to stitch together so by calculating that we get
            the geometry that covers that last bit of distance.
          </p>
          <pre>
            <code class="lang-ad-question">
              There are still seams <span class="hljs-keyword">in</span> between
              some geometry <span class="hljs-keyword">if</span> you look
              carefully - <span class="hljs-literal">it</span> probably has{" "}
              <span class="hljs-keyword">to</span>{" "}
              <span class="hljs-keyword">do</span>{" "}
              <span class="hljs-keyword">with</span>{" "}
              <span class="hljs-keyword">this</span> step, float precision{" "}
              <span class="hljs-keyword">and</span> powers{" "}
              <span class="hljs-keyword">of</span>{" "}
              <span class="hljs-number">2.</span>
              Can you figure out why <span class="hljs-keyword">this</span>{" "}
              <span class="hljs-keyword">is</span> happening?
            </code>
          </pre>
          <h3 id="a4-plan">A4 Plan</h3>
          <h4 id="initial-steps">Initial steps</h4>
          <p>
            The few remaining ToDo&#39;s in PCG need to be done ++ Indicates
            extras that I may come back to. Especially placing navNodes inside
            this custom geometry. Actors can path between rooms but we do need
            more detail than that.{" "}
          </p>
          <p>
            The AI side of things should be integrated, and any missed core
            objectives there must be implemented. AI will need some extra checks
            for finding alternative pathways if a certain route is blocked.
            Ideally they can notice that a route is blocked and (after trying to
            get through it for a bit and not succeeding) get rid of the
            node-&gt;node connection they thought was valid. It would also be
            great to implement jumping and crouching for the enemy.
          </p>
          <h4 id="optimization">Optimization</h4>
          <p>
            The level already performs well. It is capped at 60fps in all
            scenarios I can throw at it. But there is definitely room to
            optimize the loading times.
          </p>
          <p>
            A few ToDo&#39;s above are in reference to optimization. Beyond that
            I&#39;ve set up the system to behave well if you switch out chunks
            (either for smaller chunks, or higher voxel densities). The
            framerate is already great, even at high resolutions like 512x
            ChunkSize 32x VoxelDensity
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/87811213-6941-474e-90a7-fe63230a06ba"
              alt="Pasted image 20231012170341"
            />
          </p>
          <p>
            But more importantly it would allow us to speed up the loading times
            and RAM used during level generation (which gets to 16gb at 512x
            Chunk and 64x Voxel Density)
            <img
              src="https://github.com/Peregrine777/AGP_Assignment3_PCGAI/assets/111720817/54f2e65c-7d36-4ce3-871c-d3a762b4d8e9"
              alt="Pasted image 20231012170646"
            />
          </p>
          <h4 id="interactions">Interactions</h4>
          <p>
            <strong>Interactive torches:</strong> Some rooms will spawn without
            lights, they player should be able to light/snuff torches that are
            on the walls and carry a torch with them. Lights are great for
            seeing what you&#39;re doing, but a dark room prevents you from
            getting caught!
          </p>
        </Features.Section>

        <Features.Section
          title="Footer"
          darkMode={darkMode}
          revealPercent="50px 0px"
        >
          <Sections.Footer darkMode={darkMode} />
        </Features.Section>
      </main>
    </div>
  );
};

export default Test;
