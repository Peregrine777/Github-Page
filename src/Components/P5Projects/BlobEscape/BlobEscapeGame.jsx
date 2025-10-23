import React from "react";

const BlobEscapeGame = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px", fontSize: "2rem" }}>
        Blob Escape
      </h2>

      <iframe
        src="/blob-escape.html"
        width="820"
        height="620"
        style={{
          border: "3px solid #333",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
        }}
        title="Blob Escape Game"
      />

      <div
        style={{
          marginTop: "30px",
          color: "white",
          textAlign: "center",
          maxWidth: "600px",
          backgroundColor: "#2a2a2a",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          <strong>How to Play:</strong>
        </p>
        <p style={{ marginBottom: "10px" }}>
          🎮 Use <strong>WASD</strong> keys to move the blob around the maze
        </p>
        <p style={{ marginBottom: "10px" }}>
          🟢 Collect green food to grow your blob and become stronger
        </p>
        <p style={{ marginBottom: "10px" }}>
          💡 Avoid the yellow light - it will evaporate your nodes!
        </p>
        <p style={{ marginBottom: "10px" }}>
          🎯 Reach the green target to win the game
        </p>
        <p style={{ marginBottom: "10px" }}>
          🔄 Press <strong>R</strong> to restart at any time
        </p>
        <p style={{ fontSize: "0.9rem", opacity: "0.8" }}>
          The more food you collect, the slower but stronger your blob becomes!
        </p>
      </div>
    </div>
  );
};

export default BlobEscapeGame;
