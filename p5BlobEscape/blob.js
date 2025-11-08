// blob.js - Physics-based blob with WASD controls and food collection

import { ParticleSystem } from "./particles.js";

export class Blob {
  constructor(x, y, initialNodes = 3) {
    this.nodes = [];
    this.connections = [];
    this.center = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.targetVelocity = createVector(0, 0);

    // Physics properties
    this.friction = 0.995;
    this.baseAcceleration = 0.1; // Base acceleration when blob is small
    this.baseMaxSpeed = 0.1; // Base max speed when blob is small
    this.acceleration = 0.1; // Current acceleration (calculated based on weight)
    this.maxSpeed = 0.1; // Current max speed (calculated based on weight)
    this.nodeRadius = 8;
    this.connectionStrength = 0.01;
    this.connectionDistance = 35;
    this.damping = 0.98;

    // Weight scaling properties
    this.weightScaling = 0.85; // How much weight affects movement (lower = more weight effect)
    this.minAccelerationRatio = 0.3; // Minimum acceleration as ratio of base (prevents complete immobility)
    this.minSpeedRatio = 0.5; // Minimum speed as ratio of base

    // Create initial blob structure
    this.createInitialBlob(x, y, initialNodes);

    // Ensure center is calculated
    this.updateCenter();

    // Initialize physics properties
    this.updatePhysicsFromWeight();

    // Goal and food properties
    this.goal = null;
    this.reachedGoal = false;
    this.foodCollected = 0;

    // Light exposure properties
    this.lightExposureTime = 0;
    this.maxLightExposure = 20; // frames before losing a node
    this.isInLight = false;
    this.evaporationTimer = 0;
    this.isDead = false;
    this.currentLightSource = null; // Store light source for smart evaporation

    // Particle system for evaporation effects
    this.particleSystem = new ParticleSystem();
  }

  // Create the initial blob structure in a circle
  createInitialBlob(x, y, nodeCount) {
    this.nodes = [];
    this.connections = [];

    // Create nodes in a circle
    for (let i = 0; i < nodeCount; i++) {
      let angle = (TWO_PI / nodeCount) * i;
      let radius = this.connectionDistance * 0.8;
      let nodeX = x + cos(angle) * radius;
      let nodeY = y + sin(angle) * radius;

      this.nodes.push({
        pos: createVector(nodeX, nodeY),
        oldPos: createVector(nodeX, nodeY),
        velocity: createVector(0, 0),
        isCore: i === 0, // First node is the core
      });
    }

    // Create connections between adjacent nodes and to center
    for (let i = 0; i < this.nodes.length; i++) {
      // Connect to next node (circular)
      let nextIndex = (i + 1) % this.nodes.length;
      this.connections.push({
        nodeA: i,
        nodeB: nextIndex,
        restLength: this.connectionDistance,
        strength: this.connectionStrength,
      });

      // Connect to center node (node 0)
      if (i !== 0) {
        this.connections.push({
          nodeA: 0,
          nodeB: i,
          restLength: this.connectionDistance * 0.7,
          strength: this.connectionStrength * 1.5,
        });
      }
    }
  }

  // Update physics properties based on blob weight (food collected)
  updatePhysicsFromWeight() {
    // Calculate weight factor - more food = heavier blob
    let weightFactor = pow(this.weightScaling, this.foodCollected);

    // Update acceleration - heavier blob accelerates slower
    this.acceleration = max(
      this.baseAcceleration * weightFactor,
      this.baseAcceleration * this.minAccelerationRatio
    );

    // Update max speed - heavier blob has lower top speed but not as dramatically
    this.maxSpeed = max(
      this.baseMaxSpeed * (weightFactor * 0.7 + 0.3), // Less dramatic speed reduction
      this.baseMaxSpeed * this.minSpeedRatio
    );

    // Debug log when weight changes significantly
    if (this.foodCollected > 0 && this.foodCollected % 3 === 0) {
      console.log(
        `Blob weight update: Food=${
          this.foodCollected
        }, Accel=${this.acceleration.toFixed(3)}, Speed=${this.maxSpeed.toFixed(
          3
        )}`
      );
    }
  }

  // Handle WASD input for movement
  handleInput() {
    this.targetVelocity.set(0, 0);

    // Check for WASD keys
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
      // W or Up
      this.targetVelocity.y = -this.maxSpeed;
    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      // S or Down
      this.targetVelocity.y = this.maxSpeed;
    }
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      // A or Left
      this.targetVelocity.x = -this.maxSpeed;
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      // D or Right
      this.targetVelocity.x = this.maxSpeed;
    }

    // Normalize diagonal movement
    if (this.targetVelocity.mag() > this.maxSpeed) {
      this.targetVelocity.normalize();
      this.targetVelocity.mult(this.maxSpeed);
    }
  }

  // Update physics simulation
  update() {
    if (this.isDead) return;

    this.handleInput();

    // Update center velocity towards target
    this.velocity.lerp(this.targetVelocity, this.acceleration);
    this.velocity.mult(this.friction);

    // Apply velocity to core node
    if (this.nodes.length > 0) {
      this.nodes[0].velocity.add(this.velocity);
    }

    // Update node physics
    this.updateNodePhysics();

    // Apply constraints
    this.satisfyConnections();

    // Update center position
    this.updateCenter();

    // Keep blob in bounds
    this.constrainToBounds();

    // Update light exposure
    this.updateLightExposure();

    // Update particle system
    this.particleSystem.update();

    // Check if blob is dead
    if (this.nodes.length <= 1) {
      this.isDead = true;
    }
  }

  // Update individual node physics
  updateNodePhysics() {
    for (let node of this.nodes) {
      // Store old position for Verlet integration
      let temp = node.pos.copy();

      // Verlet integration
      node.pos.add(p5.Vector.sub(node.pos, node.oldPos).mult(this.damping));
      node.pos.add(node.velocity);

      // Update old position
      node.oldPos = temp;

      // Apply damping to velocity
      node.velocity.mult(0.9);
    }
  }

  // Satisfy connection constraints between nodes
  satisfyConnections() {
    // Multiple iterations for stability
    for (let iteration = 0; iteration < 10; iteration++) {
      for (let connection of this.connections) {
        let nodeA = this.nodes[connection.nodeA];
        let nodeB = this.nodes[connection.nodeB];

        let delta = p5.Vector.sub(nodeB.pos, nodeA.pos);
        let distance = delta.mag();

        if (distance > 0) {
          let difference = connection.restLength - distance;
          let percent = difference / distance / 2;
          let offset = p5.Vector.mult(delta, percent * connection.strength);

          nodeA.pos.sub(offset);
          nodeB.pos.add(offset);
        }
      }
    }
  }

  // Update center position based on node positions
  updateCenter() {
    if (!this.center) {
      this.center = createVector(0, 0);
    }

    if (this.nodes.length === 0) {
      console.warn("Blob has no nodes, cannot update center");
      return;
    }

    this.center.set(0, 0);
    for (let node of this.nodes) {
      this.center.add(node.pos);
    }
    this.center.div(this.nodes.length);
  }

  // Keep blob within canvas bounds (fixed)
  constrainToBounds() {
    let margin = this.nodeRadius;
    for (let node of this.nodes) {
      let wasConstrained = false;

      // X bounds with gentle correction
      if (node.pos.x < margin) {
        let penetration = margin - node.pos.x;
        node.pos.x = margin;
        // Adjust old position to reduce velocity towards wall
        node.oldPos.x = node.pos.x + penetration * 0.5;
        wasConstrained = true;
      }
      if (node.pos.x > width - margin) {
        let penetration = node.pos.x - (width - margin);
        node.pos.x = width - margin;
        // Adjust old position to reduce velocity towards wall
        node.oldPos.x = node.pos.x - penetration * 0.5;
        wasConstrained = true;
      }

      // Y bounds with gentle correction
      if (node.pos.y < margin) {
        let penetration = margin - node.pos.y;
        node.pos.y = margin;
        // Adjust old position to reduce velocity towards wall
        node.oldPos.y = node.pos.y + penetration * 0.5;
        wasConstrained = true;
      }
      if (node.pos.y > height - margin) {
        let penetration = node.pos.y - (height - margin);
        node.pos.y = height - margin;
        // Adjust old position to reduce velocity towards wall
        node.oldPos.y = node.pos.y - penetration * 0.5;
        wasConstrained = true;
      }

      // Add small damping if constrained to prevent sticking
      if (wasConstrained) {
        let velocity = p5.Vector.sub(node.pos, node.oldPos);
        velocity.mult(0.8); // Reduce velocity
        node.oldPos = p5.Vector.sub(node.pos, velocity);
      }
    }
  }

  // Check collision with food and collect it
  checkFoodCollision(foodItems) {
    for (let i = foodItems.length - 1; i >= 0; i--) {
      let food = foodItems[i];

      // Check if any node is close enough to food
      for (let node of this.nodes) {
        let distance = p5.Vector.dist(node.pos, food.pos);
        if (distance < this.nodeRadius + food.radius) {
          // Consume food
          this.consumeFood(food);
          foodItems.splice(i, 1);
          break;
        }
      }
    }
  }

  // Add food to blob network
  consumeFood(food) {
    this.foodCollected++;

    // Update physics properties based on new weight
    this.updatePhysicsFromWeight();

    // Find the closest node to attach new node to
    let closestNode = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < this.nodes.length; i++) {
      let distance = p5.Vector.dist(this.nodes[i].pos, food.pos);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestNode = i;
      }
    }

    // Create new node at food position
    let newNodeIndex = this.nodes.length;
    this.nodes.push({
      pos: food.pos.copy(),
      oldPos: food.pos.copy(),
      velocity: createVector(0, 0),
      isCore: false,
    });

    // Connect new node to closest existing node
    this.connections.push({
      nodeA: closestNode,
      nodeB: newNodeIndex,
      restLength: this.connectionDistance,
      strength: this.connectionStrength,
    });

    // Connect to nearby nodes for stability
    for (let i = 0; i < this.nodes.length - 1; i++) {
      let distance = p5.Vector.dist(
        this.nodes[i].pos,
        this.nodes[newNodeIndex].pos
      );
      if (distance < this.connectionDistance * 1.5 && i !== closestNode) {
        this.connections.push({
          nodeA: i,
          nodeB: newNodeIndex,
          restLength: distance,
          strength: this.connectionStrength * 0.5,
        });
      }
    }
  }

  // Check if blob reached the goal
  checkGoalCollision(goal) {
    if (!goal || this.reachedGoal) return false;

    let distance = p5.Vector.dist(this.center, goal.pos);
    if (distance < goal.radius + this.nodeRadius * 2) {
      this.reachedGoal = true;
      return true;
    }
    return false;
  }

  // Check collision with blockers and respond
  checkBlockerCollision(blockers) {
    for (let blocker of blockers) {
      for (let node of this.nodes) {
        // Check if node is inside blocker
        if (
          node.pos.x > blocker.x &&
          node.pos.x < blocker.x + blocker.width &&
          node.pos.y > blocker.y &&
          node.pos.y < blocker.y + blocker.height
        ) {
          // Move node out of blocker
          // Find closest edge
          let leftDist = abs(node.pos.x - blocker.x);
          let rightDist = abs(node.pos.x - (blocker.x + blocker.width));
          let topDist = abs(node.pos.y - blocker.y);
          let bottomDist = abs(node.pos.y - (blocker.y + blocker.height));
          let minDist = min(leftDist, rightDist, topDist, bottomDist);
          if (minDist === leftDist) {
            node.pos.x = blocker.x;
          } else if (minDist === rightDist) {
            node.pos.x = blocker.x + blocker.width;
          } else if (minDist === topDist) {
            node.pos.y = blocker.y;
          } else if (minDist === bottomDist) {
            node.pos.y = blocker.y + blocker.height;
          }
        }
      }
    }
  }

  // Draw the blob
  draw() {
    if (this.isDead) return;

    // Change colors based on light exposure
    let exposurePercent = this.lightExposureTime / this.maxLightExposure;
    let redTint = this.isInLight ? 255 * exposurePercent : 0;

    // Draw connections
    stroke(100 + redTint, 200 - redTint, 255, 150);
    strokeWeight(2);
    for (let connection of this.connections) {
      let nodeA = this.nodes[connection.nodeA];
      let nodeB = this.nodes[connection.nodeB];
      line(nodeA.pos.x, nodeA.pos.y, nodeB.pos.x, nodeB.pos.y);
    }

    // Draw blob body (filled shape) with danger coloring
    fill(100 + redTint, 200 - redTint, 255, 100);
    stroke(150 + redTint, 220 - redTint, 255);
    strokeWeight(1);
    if (this.nodes.length > 2) {
      beginShape();
      for (let node of this.nodes) {
        vertex(node.pos.x, node.pos.y);
      }
      endShape(CLOSE);
    }

    // Draw nodes with danger coloring
    for (let i = 0; i < this.nodes.length; i++) {
      let node = this.nodes[i];

      if (node.isCore) {
        // Core node (larger and different color)
        fill(255, 200 - redTint, 100 - redTint);
        stroke(255, 150 - redTint, 50 - redTint);
      } else {
        // Regular nodes
        fill(120 + redTint, 220 - redTint, 255);
        stroke(180 + redTint, 240 - redTint, 255);
      }

      strokeWeight(2);
      ellipse(node.pos.x, node.pos.y, this.nodeRadius * 2);
    }

    // Draw light exposure warning
    if (this.isInLight && exposurePercent > 0.5) {
      fill(255, 0, 0, 100 + sin(frameCount * 0.3) * 50);
      noStroke();
      ellipse(this.center.x, this.center.y, 40 + sin(frameCount * 0.2) * 10);
    }

    // Draw particle effects
    this.particleSystem.draw();
  }

  // Draw stats
  drawStats() {
    fill(255);
    noStroke();
    textSize(16);
    text(`Nodes: ${this.nodes.length}`, 10, 30);
    text(`Food Collected: ${this.foodCollected}`, 10, 50);

    // Light exposure warning
    if (this.isInLight) {
      let exposurePercent = this.lightExposureTime / this.maxLightExposure;
      fill(255, 255 - exposurePercent * 255, 0);
      text(`Light Exposure: ${Math.round(exposurePercent * 100)}%`, 10, 70);
    }

    if (this.reachedGoal) {
      fill(0, 255, 0);
      textSize(24);
      text("GOAL REACHED!", width / 2 - 80, height / 2);
    }

    if (this.isDead) {
      fill(255, 0, 0);
      textSize(32);
      text("BLOB EVAPORATED!", width / 2 - 120, height / 2);
      textSize(16);
      text("The light consumed your blob!", width / 2 - 80, height / 2 + 30);
    }
  }

  // Check if blob is in light and handle evaporation
  checkLightExposure(lightSource, blockers) {
    this.isInLight = false;

    // Safety check for invalid light source
    if (!lightSource || isNaN(lightSource.x) || isNaN(lightSource.y)) {
      this.currentLightSource = null;
      return;
    }

    // Store current light source for smart evaporation
    this.currentLightSource = { x: lightSource.x, y: lightSource.y };

    // Check if any blob nodes are in the light cone
    for (let node of this.nodes) {
      if (lightSource.isPointInLight(node.pos, blockers)) {
        this.isInLight = true;
        break;
      }
    }

    // Debug: log when exposure is happening but light might be invisible
    if (this.isInLight && frameCount % 60 === 0) {
      console.log(
        `Blob taking light damage. Light at: (${lightSource.x}, ${lightSource.y}), state: ${lightSource.state}`
      );
    }
  }

  // Update light exposure and handle evaporation
  updateLightExposure() {
    if (this.isInLight) {
      this.lightExposureTime++;

      // Create mist particles while blob is evaporating
      if (this.lightExposureTime > 5) {
        // Start creating mist after some exposure
        // Create mist trail from center and random nodes
        this.particleSystem.createMistTrail(this.center.x, this.center.y, 1);

        // Add some random mist from nodes
        if (this.nodes.length > 0 && frameCount % 3 === 0) {
          let randomNode =
            this.nodes[Math.floor(Math.random() * this.nodes.length)];
          this.particleSystem.createMistTrail(
            randomNode.pos.x,
            randomNode.pos.y,
            1
          );
        }

        // Create area mist around the center when heavily exposed
        if (this.lightExposureTime > this.maxLightExposure * 0.7) {
          this.particleSystem.createAreaMist(
            this.center.x,
            this.center.y,
            30,
            2
          );
        }
      }

      // Evaporate a node if exposed too long
      if (this.lightExposureTime >= this.maxLightExposure) {
        this.evaporateNode();
        this.lightExposureTime = 0;
      }
    } else {
      // Slowly recover when not in light
      this.lightExposureTime = max(0, this.lightExposureTime - 1);
    }
  }

  // Remove a node due to light evaporation - smart edge-based removal
  evaporateNode() {
    if (this.nodes.length <= 1) return; // Don't remove the last node

    // Find edge nodes (nodes with fewer connections = outer edge)
    let edgeNodes = this.findEdgeNodes();

    if (edgeNodes.length === 0) {
      console.log("No edge nodes found for evaporation");
      return;
    }

    let nodeToRemove = -1;

    // If we have light source position, choose edge node closest to light
    if (this.currentLightSource && edgeNodes.length > 1) {
      let closestDistance = Infinity;
      let lightPos = createVector(
        this.currentLightSource.x,
        this.currentLightSource.y
      );

      for (let nodeIndex of edgeNodes) {
        let node = this.nodes[nodeIndex];
        let distance = p5.Vector.dist(node.pos, lightPos);

        if (distance < closestDistance) {
          closestDistance = distance;
          nodeToRemove = nodeIndex;
        }
      }

      console.log(
        `Evaporating edge node closest to light: ${nodeToRemove} (distance: ${closestDistance.toFixed(
          1
        )})`
      );
    } else {
      // Fallback: remove any edge node (prefer non-core)
      for (let nodeIndex of edgeNodes) {
        if (!this.nodes[nodeIndex].isCore) {
          nodeToRemove = nodeIndex;
          break;
        }
      }
      // If all edge nodes are core, remove the first edge node
      if (nodeToRemove === -1) {
        nodeToRemove = edgeNodes[0];
      }

      console.log(
        `Evaporating edge node (no light targeting): ${nodeToRemove}`
      );
    }

    if (nodeToRemove !== -1) {
      // Get the position of the node before removing it for particle effect
      let nodePosition = this.nodes[nodeToRemove].pos.copy();

      // Create pop explosion particles at the node position
      this.particleSystem.createPopExplosion(nodePosition.x, nodePosition.y, 4);

      // Remove node
      console.log(
        `Removing node ${nodeToRemove}, blob size: ${this.nodes.length - 1}`
      );
      this.nodes.splice(nodeToRemove, 1);

      // Remove connections involving this node
      this.connections = this.connections.filter(
        (conn) => conn.nodeA !== nodeToRemove && conn.nodeB !== nodeToRemove
      );

      // Update connection indices
      for (let conn of this.connections) {
        if (conn.nodeA > nodeToRemove) conn.nodeA--;
        if (conn.nodeB > nodeToRemove) conn.nodeB--;
      }

      // Update physics after losing mass
      this.updatePhysicsFromWeight();
    }
  }

  // Find nodes on the outer edge (fewer connections)
  findEdgeNodes() {
    let connectionCounts = new Array(this.nodes.length).fill(0);

    // Count connections for each node
    for (let conn of this.connections) {
      connectionCounts[conn.nodeA]++;
      connectionCounts[conn.nodeB]++;
    }

    // Find minimum connection count (these are edge nodes)
    let minConnections = Math.min(...connectionCounts);

    // Get all nodes with minimum connections (edge nodes)
    let edgeNodes = [];
    for (let i = 0; i < connectionCounts.length; i++) {
      if (connectionCounts[i] === minConnections) {
        edgeNodes.push(i);
      }
    }

    console.log(
      `Found ${edgeNodes.length} edge nodes with ${minConnections} connections each`
    );
    return edgeNodes;
  }

  // Get blob size for collision detection
  getBounds() {
    let minX = Infinity,
      maxX = -Infinity;
    let minY = Infinity,
      maxY = -Infinity;

    for (let node of this.nodes) {
      minX = min(minX, node.pos.x - this.nodeRadius);
      maxX = max(maxX, node.pos.x + this.nodeRadius);
      minY = min(minY, node.pos.y - this.nodeRadius);
      maxY = max(maxY, node.pos.y + this.nodeRadius);
    }

    return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
  }
}

// Food item class
export class Food {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.radius = 5;
    this.pulsePhase = random(TWO_PI);
  }

  update() {
    this.pulsePhase += 0.1;
  }

  draw() {
    let pulse = sin(this.pulsePhase) * 2 + 8;
    // fill with green colour
    fill(0, 255, 0);
    stroke(100);
    strokeWeight(1);
    ellipse(this.pos.x, this.pos.y, pulse);
  }
}

// Goal class
export class Goal {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.radius = 20;
    this.glowPhase = 0;
  }

  update() {
    this.glowPhase += 0.05;
  }

  draw() {
    let glow = sin(this.glowPhase) * 50 + 200;

    // Draw glow effect
    for (let r = this.radius * 3; r > this.radius; r -= 5) {
      let alpha = map(r, this.radius, this.radius * 3, 255, 0);
      fill(0, 255, 0, alpha * 0.3);
      noStroke();
      ellipse(this.pos.x, this.pos.y, r * 2);
    }

    // Draw goal
    fill(0, glow, 0);
    stroke(0, 255, 0);
    strokeWeight(3);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);

    // Draw target symbol
    stroke(255);
    strokeWeight(2);
    line(this.pos.x - 10, this.pos.y, this.pos.x + 10, this.pos.y);
    line(this.pos.x, this.pos.y - 10, this.pos.x, this.pos.y + 10);
  }
}
