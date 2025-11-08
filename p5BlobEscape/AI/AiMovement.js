// AiMovement.js - Handles AI movement mechanics and pathfinding

export class AiMovement {
  constructor() {
    // Movement properties
    this.position = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    // Movement parameters
    this.maxSpeed = 3;
    this.maxAcceleration = 0.2;
    this.friction = 0.95;
    this.arrivalDistance = 10; // Distance at which we consider target "reached"

    // Aim properties
    this.currentAim = 0; // Current light bearing/direction
    this.targetAim = 0; // Target light bearing/direction
    this.aimSpeed = 0.1; // How fast to rotate aim
    this.aimSmoothing = 0.15; // Smoothing factor for aim transitions

    // Pathfinding
    this.currentPath = [];
    this.pathIndex = 0;
    this.stuckCounter = 0;
    this.stuckThreshold = 60; // Frames before considering AI stuck
    this.lastPosition = createVector(0, 0);

    // Obstacle avoidance
    this.avoidanceRadius = 40;
    this.avoidanceStrength = 1.5;
  }

  /**
   * Set the target position to move toward
   * @param {number} x - Target X coordinate
   * @param {number} y - Target Y coordinate
   */
  setTargetPosition(x, y) {
    this.targetPosition = createVector(x, y);
  }

  /**
   * Set the target aim direction
   * @param {number} x - Aim target X coordinate
   * @param {number} y - Aim target Y coordinate
   */
  setTargetAim(x, y) {
    if (this.position) {
      let aimVector = createVector(x - this.position.x, y - this.position.y);
      this.targetAim = aimVector.heading();
    }
  }

  /**
   * Set aim by angle directly
   * @param {number} angle - Target angle in radians
   */
  setTargetAimAngle(angle) {
    this.targetAim = angle;
  }

  /**
   * Update movement and aim
   * @param {Object} lightSource - Light source object to move
   * @param {Array} blockers - Obstacles to avoid
   * @param {number} speed - Speed multiplier for this frame
   */
  update(lightSource, blockers = [], speed = 1) {
    if (!lightSource) return;

    // Sync position with light source
    this.position.set(lightSource.x, lightSource.y);

    // Update movement
    this.updateMovement(lightSource, blockers, speed);

    // Update aim
    this.updateAim(lightSource);

    // Check if stuck
    this.updateStuckDetection();

    // Apply final position to light source
    lightSource.x = this.position.x;
    lightSource.y = this.position.y;

    if (lightSource.bearing !== undefined) {
      lightSource.bearing = this.currentAim;
    }
  }

  /**
   * Update position movement
   */
  updateMovement(lightSource, blockers, speed) {
    if (!this.targetPosition) return;

    // Calculate desired movement vector
    let desired = p5.Vector.sub(this.targetPosition, this.position);
    let distance = desired.mag();

    // Check if we've reached the target
    if (distance < this.arrivalDistance) {
      this.velocity.mult(0.8); // Slow down when arrived
      return;
    }

    // Calculate steering force
    desired.normalize();
    desired.mult(this.maxSpeed * speed);

    let steering = p5.Vector.sub(desired, this.velocity);
    steering.limit(this.maxAcceleration);

    // Add obstacle avoidance
    let avoidance = this.calculateObstacleAvoidance(blockers);
    steering.add(avoidance);

    // Apply steering
    this.velocity.add(steering);
    this.velocity.mult(this.friction);

    // Limit velocity
    this.velocity.limit(this.maxSpeed * speed);

    // Update position
    this.position.add(this.velocity);

    // Keep in bounds
    this.constrainToBounds();
  }

  /**
   * Update aim direction
   */
  updateAim(lightSource) {
    if (this.targetAim === undefined || this.targetAim === null) return;

    // Calculate shortest rotation to target
    let angleDiff = this.targetAim - this.currentAim;

    // Normalize angle difference to [-PI, PI]
    while (angleDiff > PI) angleDiff -= TWO_PI;
    while (angleDiff < -PI) angleDiff += TWO_PI;

    // Smoothly rotate toward target
    this.currentAim += angleDiff * this.aimSmoothing;

    // Normalize current aim
    while (this.currentAim > PI) this.currentAim -= TWO_PI;
    while (this.currentAim < -PI) this.currentAim += TWO_PI;
  }

  /**
   * Calculate obstacle avoidance force
   */
  calculateObstacleAvoidance(blockers) {
    let avoidanceForce = createVector(0, 0);

    for (let blocker of blockers) {
      // Calculate closest point on blocker to AI position
      let closestX = constrain(
        this.position.x,
        blocker.x,
        blocker.x + blocker.width
      );
      let closestY = constrain(
        this.position.y,
        blocker.y,
        blocker.y + blocker.height
      );

      let distance = dist(this.position.x, this.position.y, closestX, closestY);

      if (distance < this.avoidanceRadius && distance > 0) {
        // Calculate avoidance vector
        let avoid = createVector(
          this.position.x - closestX,
          this.position.y - closestY
        );
        avoid.normalize();

        // Strength inversely proportional to distance
        let strength = (this.avoidanceRadius - distance) / this.avoidanceRadius;
        avoid.mult(strength * this.avoidanceStrength);

        avoidanceForce.add(avoid);
      }
    }

    return avoidanceForce;
  }

  /**
   * Keep AI within canvas bounds
   */
  constrainToBounds() {
    let margin = 50;
    let bounced = false;

    if (this.position.x < margin) {
      this.position.x = margin;
      this.velocity.x = abs(this.velocity.x) * 0.5; // Bounce with damping
      bounced = true;
    }
    if (this.position.x > width - margin) {
      this.position.x = width - margin;
      this.velocity.x = -abs(this.velocity.x) * 0.5;
      bounced = true;
    }
    if (this.position.y < margin) {
      this.position.y = margin;
      this.velocity.y = abs(this.velocity.y) * 0.5;
      bounced = true;
    }
    if (this.position.y > height - margin) {
      this.position.y = height - margin;
      this.velocity.y = -abs(this.velocity.y) * 0.5;
      bounced = true;
    }

    // If we bounced, clear target to prevent getting stuck
    if (bounced && this.targetPosition) {
      let distToTarget = p5.Vector.dist(this.position, this.targetPosition);
      if (distToTarget < margin * 2) {
        this.targetPosition = null;
      }
    }
  }

  /**
   * Detect if AI is stuck and needs help
   */
  updateStuckDetection() {
    let movement = p5.Vector.dist(this.position, this.lastPosition);

    if (movement < 0.5 && this.velocity.mag() > 0.1) {
      this.stuckCounter++;
    } else {
      this.stuckCounter = 0;
    }

    // If stuck, add random jitter to help escape
    if (this.stuckCounter > this.stuckThreshold) {
      let jitter = createVector(random(-2, 2), random(-2, 2));
      this.velocity.add(jitter);
      this.stuckCounter = 0;

      console.log("AI Movement: Detected stuck state, applying jitter");
    }

    this.lastPosition = this.position.copy();
  }

  /**
   * Set movement parameters
   */
  setMovementParams(maxSpeed, acceleration, friction) {
    this.maxSpeed = maxSpeed || this.maxSpeed;
    this.maxAcceleration = acceleration || this.maxAcceleration;
    this.friction = friction || this.friction;
  }

  /**
   * Set aim parameters
   */
  setAimParams(aimSpeed, aimSmoothing) {
    this.aimSpeed = aimSpeed || this.aimSpeed;
    this.aimSmoothing = aimSmoothing || this.aimSmoothing;
  }

  /**
   * Check if AI has reached target position
   */
  hasReachedTarget() {
    if (!this.targetPosition) return true;

    let distance = p5.Vector.dist(this.position, this.targetPosition);
    return distance < this.arrivalDistance;
  }

  /**
   * Check if AI has reached target aim
   */
  hasReachedTargetAim() {
    if (this.targetAim === undefined || this.targetAim === null) return true;

    let angleDiff = abs(this.targetAim - this.currentAim);
    while (angleDiff > PI) angleDiff = TWO_PI - angleDiff;

    return angleDiff < 0.1; // Within ~6 degrees
  }

  /**
   * Get current movement speed
   */
  getCurrentSpeed() {
    return this.velocity.mag();
  }

  /**
   * Clear current targets
   */
  clearTargets() {
    this.targetPosition = null;
    this.targetAim = null;
  }

  /**
   * Stop movement immediately
   */
  stop() {
    this.velocity.mult(0);
    this.targetPosition = null;
  }

  /**
   * Reset to initial state
   */
  reset() {
    this.velocity.set(0, 0);
    this.acceleration.set(0, 0);
    this.targetPosition = null;
    this.targetAim = null;
    this.currentAim = 0;
    this.stuckCounter = 0;
    this.currentPath = [];
    this.pathIndex = 0;
  }

  /**
   * Get debug information
   */
  getDebugInfo() {
    return {
      position: this.position
        ? { x: this.position.x.toFixed(1), y: this.position.y.toFixed(1) }
        : null,
      velocity: {
        x: this.velocity.x.toFixed(2),
        y: this.velocity.y.toFixed(2),
      },
      targetPosition: this.targetPosition
        ? {
            x: this.targetPosition.x.toFixed(1),
            y: this.targetPosition.y.toFixed(1),
          }
        : null,
      currentAim: ((this.currentAim * 180) / PI).toFixed(1) + "°",
      targetAim:
        this.targetAim !== null
          ? ((this.targetAim * 180) / PI).toFixed(1) + "°"
          : null,
      speed: this.getCurrentSpeed().toFixed(2),
      hasReachedTarget: this.hasReachedTarget(),
      hasReachedAim: this.hasReachedTargetAim(),
      stuckCounter: this.stuckCounter,
    };
  }

  /**
   * Draw debug visualization
   */
  drawDebug(showVelocity = true, showTargets = true, showAvoidance = true) {
    if (!this.position) return;

    push();

    // Current position
    fill(255, 255, 0);
    noStroke();
    ellipse(this.position.x, this.position.y, 8);

    // Velocity vector
    if (showVelocity && this.velocity.mag() > 0.1) {
      stroke(0, 255, 0);
      strokeWeight(2);
      let velEnd = p5.Vector.add(
        this.position,
        p5.Vector.mult(this.velocity, 10)
      );
      line(this.position.x, this.position.y, velEnd.x, velEnd.y);
    }

    // Target position
    if (showTargets && this.targetPosition) {
      stroke(255, 0, 0);
      strokeWeight(2);
      noFill();
      ellipse(this.targetPosition.x, this.targetPosition.y, 20);

      // Line to target
      line(
        this.position.x,
        this.position.y,
        this.targetPosition.x,
        this.targetPosition.y
      );
    }

    // Aim direction
    if (showTargets && this.currentAim !== null) {
      stroke(0, 100, 255);
      strokeWeight(3);
      let aimLength = 30;
      let aimEnd = createVector(
        this.position.x + cos(this.currentAim) * aimLength,
        this.position.y + sin(this.currentAim) * aimLength
      );
      line(this.position.x, this.position.y, aimEnd.x, aimEnd.y);
    }

    pop();
  }
}
