// sketch.js - Main p5.js sketch that imports from utils.js
import { getRandomColor, calculateDistance } from "./utils.js";
import { LightSource } from "./lightsource.js";
import { LightAI } from "./lightAI.js";
import { Blob, Food, Goal } from "./blob.js";
import { AlarmZoneManager } from "./alarmZone.js";

let circles = [];
let mousePressed = false;

let light = [];
let blockers = [];
let lightAI;

// Combined game variables
let blob;
let foodItems = [];
let goal;
let gameState = "playing"; // "playing", "blobWon", "lightWon"

// Alarm system
let alarmZoneManager;

function setup() {
  try {
    createCanvas(800, 600);
    background(220);

    // Create some rectangular blockers
    //Start gate
    blockers.push({ x: 150, y: 100, width: 30, height: 200 });
    blockers.push({ x: 150, y: 400, width: 30, height: 200 });

    // Horizontal beams
    blockers.push({ x: 180, y: 270, width: 200, height: 30 });

    // Top things
    blockers.push({ x: 220, y: 100, width: 150, height: 60 });

    // Center wall
    blockers.push({ x: 350, y: 0, width: 40, height: 200 });
    blockers.push({ x: 450, y: 0, width: 40, height: 300 });
    blockers.push({ x: 450, y: 400, width: 40, height: 400 });

    // Right side momentum trap
    blockers.push({ x: 600, y: 100, width: 30, height: 300 });

    // Right side maze
    blockers.push({ x: 680, y: 0, width: 30, height: 250 });
    blockers.push({ x: 700, y: 350, width: 30, height: 300 });

    // Random blocks
    blockers.push({ x: 490, y: 200, width: 60, height: 60 });
    blockers.push({ x: 540, y: 100, width: 60, height: 60 });
    blockers.push({ x: 250, y: 330, width: 70, height: 100 });

    // Create a lightsource at center position
    light.push(new LightSource(350, 300));

    // Create AI for the light
    lightAI = new LightAI();

    // Initialize alarm zone system
    alarmZoneManager = new AlarmZoneManager();

    // Add strategic alarm zones in key locations

    alarmZoneManager.addZone(500, 330, 60, 100); // Right side
    alarmZoneManager.addZone(640, 270, 100, 50); // Far right
    alarmZoneManager.addZone(300, 490, 75, 105); // Bottom center
    alarmZoneManager.addZone(720, 160, 60, 80); // Near Goal

    // Initialize combined game
    initializeGame();

    console.log("Setup completed successfully");
  } catch (error) {
    console.error("Error in setup():", error);
  }
}

function draw() {
  try {
    drawCombinedGame();
    drawGameUI();

    // Show light debug info (with safety checks)
    if (lightAI && light.length > 0) {
      lightAI.drawDebugInfo(light[0]);
    }
  } catch (error) {
    console.error("Error in draw():", error);
  }
}

function drawCombinedGame() {
  background(20, 20, 40); // Dark background

  // Draw blockers
  fill(60, 50, 50);
  stroke(100, 80, 80);
  strokeWeight(2);
  for (let blocker of blockers) {
    rect(blocker.x, blocker.y, blocker.width, blocker.height);
  }

  // Update and draw alarm zones
  if (alarmZoneManager && blob) {
    alarmZoneManager.update(blob);
    alarmZoneManager.draw();
  }

  if (gameState === "playing") {
    // Update and draw food
    for (let food of foodItems) {
      food.update();
      food.draw();
    }

    // Update and draw goal
    if (goal) {
      goal.update();
      goal.draw();
    }

    // Update blob
    if (blob && !blob.isDead) {
      blob.update();
      blob.checkFoodCollision(foodItems);
      blob.checkBlockerCollision(blockers);

      // Check light exposure
      blob.checkLightExposure(light[0], blockers);

      if (goal && blob.checkGoalCollision(goal)) {
        gameState = "blobWon";
      }

      if (blob.isDead) {
        gameState = "lightWon";
      }

      blob.draw();
    }

    // Update light AI to chase blob (not mouse)
    if (light.length > 0 && blob && !blob.isDead && blob.center) {
      // Update light AI with goal and alarm information
      lightAI.update(light[0], blob, blockers, goal, alarmZoneManager);
    }

    // Draw light source with shadows
    for (let l of light) {
      l.draw(blockers);
    }

    // Draw light source position
    fill(255, 255, 0);
    noStroke();
    ellipse(light[0].x, light[0].y, 8);
  }

  // Draw blob stats
  if (blob) {
    blob.drawStats();
  }
}

function initializeGame() {
  // Create blob starting position
  blob = new Blob(100, 500, 3);

  // Generate random food items
  foodItems = [];
  for (let i = 0; i < 15; i++) {
    let x, y;
    let validPosition = false;
    let attempts = 0;

    // Find valid position not inside blockers
    while (!validPosition && attempts < 100) {
      x = random(50, width - 50);
      y = random(50, height - 50);

      validPosition = true;
      for (let blocker of blockers) {
        if (
          x > blocker.x - 20 &&
          x < blocker.x + blocker.width + 20 &&
          y > blocker.y - 20 &&
          y < blocker.y + blocker.height + 20
        ) {
          validPosition = false;
          break;
        }
      }
      attempts++;
    }

    if (validPosition) {
      foodItems.push(new Food(x, y));
    }
  }

  // Create goal at opposite corner
  goal = new Goal(width - 50, 50);
  gameState = "playing";
}

function drawGameUI() {
  // Game instructions
  fill(0, 0, 0, 150);
  noStroke();
  rect(10, height - 50, 200, 110);

  fill(255);
  textSize(14);
  text("🎯 ESCAPE THE LIGHT!", 15, height - 30);
  text("WASD: Move blob", 15, height - 10);

  if (gameState !== "playing") {
    text("Press R to restart", 15, height - 100);
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    // Restart the game
    initializeGame();

    // Reset light source to original position
    if (light.length > 0) {
      light[0].x = 350;
      light[0].y = 300;
      light[0].bearing = 0; // Reset bearing to default
      light[0].state = "searching"; // Reset state to searching
      light[0].lastKnownBlobPosition = null; // Clear blob memory
    }

    // Reset light AI state
    if (lightAI) {
      lightAI.reset();
    }
  }
}

// Make functions globally available for p5.js
window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;

// Add error handling to see what's going wrong
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error);
});

// Add p5.js specific error handling
if (typeof p5 !== "undefined") {
  p5.prototype._friendlyError = function (message, method, color) {
    console.error("p5.js Error in", method + "():", message);
  };
}
