import React, { useEffect, useState } from "react";

const SceneSelector = ({ threeJSInstance, switchScene }) => {
  const [loading, setLoading] = useState(true);
  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    if (threeJSInstance.current) {
      const sceneList = threeJSInstance.current.scenes || [];
      setScenes(sceneList);
      setLoading(false);
    }
  }, [threeJSInstance]); // Re-run this effect if threeJSInstance changes

  if (loading) {
    return <p>Loading scenes...</p>;
  }

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {scenes.length > 0 ? (
        scenes.map((scene, index) => (
          <button
            key={index}
            onClick={() => switchScene(scene)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#333",
              color: "white",
              cursor: "pointer",
            }}
          >
            {scene.name}
          </button>
        ))
      ) : (
        <p>No scenes found</p>
      )}
    </div>
  );
};

export default SceneSelector;
