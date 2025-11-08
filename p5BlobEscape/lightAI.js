// lightAI.js - AI system for intelligent light movement and pathfinding

export class LightAI {
  constructor() {
    this.searchSpeed = 1; // Speed when searching/meandering - increased
    this.huntSpeed = 3; // Speed when hunting blob - increased
    this.alarmSpeed = 4; // Speed when responding to alarms - faster than hunting
    this.avoidanceRadius = 60; // How far to stay away from blockers - increased
    this.pathUpdateInterval = 30; // How often to recalculate path (frames) - reduced frequency
    this.frameCounter = 0;
    this.currentPath = [];
    this.pathIndex = 0;
    this.stuckCounter = 0; // Counter to detect if AI is stuck
    this.lastPosition = { x: 0, y: 0 };

    // Movement smoothing and momentum
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.maxAcceleration = 0.2; // How quickly it can change direction
    this.friction = 0.95; // How quickly it slows down
    this.targetDirection = createVector(0, 0);

    // Strafing behavior to avoid 180-degree turns
    this.lastMovementDirection = createVector(0, 1); // Default facing down
    this.strafeTimer = 0;
    this.strafeDirection = 1; // 1 for right, -1 for left
    this.maxStrafeTime = 60; // Maximum frames to strafe

    // Meandering behavior
    this.meanderTarget = null;
    this.meanderTimer = 0;
    this.meanderInterval = 180; // Change direction every 3 seconds (more predictable)

    // Predictive investigation tracking
    this.lastBlobPosition = null;
    this.blobVelocity = createVector(0, 0);
    this.predictedTarget = null;
    this.velocityDragFactor = 0.8; // How much blob momentum carries over

    // Investigation-specific tracking - capture velocity at moment of losing sight
    this.lastKnownBlobVelocity = createVector(0, 0); // Velocity when light lost sight
    this.investigationPredictedTarget = null; // Fixed predicted target for investigation

    // Alarm response system
    this.isRespondingToAlarm = false; // Track if currently responding to alarm
    this.alarmResponseStartTime = 0; // When alarm response began
    this.alarmResponseDuration = 180; // How long to investigate alarm (frames)
    this.alarmSpeed = 4; // Faster speed when responding to alarms
    this.currentAlarmPosition = null; // Track current alarm to detect new ones

    // Alarm sweep behavior
    this.isAlarmSweeping = false; // Track if doing 360 sweep at alarm location
    this.alarmSweepStartAngle = 0; // Starting angle for sweep
    this.alarmSweepCurrentAngle = 0; // Current sweep angle
    this.alarmSweepSpeed = 3; // Degrees per frame for sweep
    this.alarmSweepLocation = null; // Where to perform the sweep
    this.hasReachedAlarmLocation = false; // Track if we've reached the alarm position    // Debug waypoint visualization
    this.allWaypoints = []; // Store all generated waypoints for debugging
    this.waypointConnections = []; // Store connections for debugging
    this.showDebugText = true;

    // State change tracking
    this.previousState = "searching"; // Track previous state to detect transitions
  }

  // Validate and constrain light position
  validateLightPosition(lightSource) {
    // Check for NaN or invalid coordinates
    if (isNaN(lightSource.x) || isNaN(lightSource.y)) {
      console.warn("Invalid light coordinates detected, resetting to center");
      lightSource.x = width / 2;
      lightSource.y = height / 2;
    }

    // Ensure within bounds
    lightSource.x = constrain(lightSource.x, 20, width - 20);
    lightSource.y = constrain(lightSource.y, 20, height - 20);
  }

  // Handle state transitions and clear appropriate data
  handleStateTransition(oldState, newState) {
    console.log(`Light AI: State transition ${oldState} → ${newState}`);

    switch (newState) {
      case "searching":
        // Clear all pathfinding data when returning to searching
        this.currentPath = [];
        this.pathIndex = 0;
        this.allWaypoints = [];
        this.waypointConnections = [];
        // Clear investigation data
        this.investigationPredictedTarget = null;
        this.lastKnownBlobVelocity.mult(0);
        // Clear alarm response data
        this.isRespondingToAlarm = false;
        this.currentAlarmPosition = null;
        this.isAlarmSweeping = false;
        this.hasReachedAlarmLocation = false;
        this.alarmSweepLocation = null;
        console.log("Cleared pathfinding data for searching state");
        break;

      case "hunting":
        // Keep current path but reset pathfinding for new target
        this.currentPath = [];
        this.pathIndex = 0;
        break;

      case "investigating":
        // Capture the blob velocity at the moment we lose sight
        console.log(
          "Capturing blob velocity for investigation:",
          this.blobVelocity.mag()
        );
        this.lastKnownBlobVelocity = this.blobVelocity.copy();

        // Calculate investigation predicted target using the captured velocity
        if (this.lastKnownBlobVelocity.mag() > 0.5) {
          // Use the captured velocity to predict where blob might be going
          let lastPos = this.lastBlobPosition
            ? this.lastBlobPosition.copy()
            : createVector(0, 0);
          let futurePosition = p5.Vector.add(
            lastPos,
            p5.Vector.mult(this.lastKnownBlobVelocity, 60)
          ); // Predict 60 frames ahead using FROZEN velocity

          // Apply drag factor to the prediction
          let draggedVelocity = p5.Vector.mult(
            this.lastKnownBlobVelocity,
            this.velocityDragFactor
          );
          futurePosition = p5.Vector.add(
            lastPos,
            p5.Vector.mult(draggedVelocity, 60)
          );

          // Constrain predicted position to canvas bounds
          futurePosition.x = constrain(futurePosition.x, 50, width - 50);
          futurePosition.y = constrain(futurePosition.y, 50, height - 50);

          this.investigationPredictedTarget = {
            x: futurePosition.x,
            y: futurePosition.y,
          };
          console.log(
            "Investigation target set to:",
            this.investigationPredictedTarget
          );
        } else {
          // If blob wasn't moving much, just use last known position
          this.investigationPredictedTarget = null;
        }

        // Keep some path data but prepare for investigation pathfinding
        if (oldState === "hunting") {
          // Transitioning from hunting, keep the path initially
        } else {
          // Transitioning from searching, clear old data
          this.currentPath = [];
          this.pathIndex = 0;
        }
        break;
    }
  }

  // Track blob velocity for predictive investigation targeting
  updateBlobVelocityTracking(blob) {
    let currentBlobPos = createVector(blob.center.x, blob.center.y);

    if (this.lastBlobPosition) {
      // Calculate velocity
      this.blobVelocity = p5.Vector.sub(currentBlobPos, this.lastBlobPosition);

      // Update predicted target for investigation
      if (this.blobVelocity.mag() > 0.5) {
        // Only predict if blob is moving
        let futurePosition = p5.Vector.add(
          currentBlobPos,
          p5.Vector.mult(this.blobVelocity, 60)
        ); // Predict 60 frames ahead
        futurePosition.mult(this.velocityDragFactor); // Apply drag factor

        // Constrain predicted position to canvas bounds
        futurePosition.x = constrain(futurePosition.x, 50, width - 50);
        futurePosition.y = constrain(futurePosition.y, 50, height - 50);

        this.predictedTarget = { x: futurePosition.x, y: futurePosition.y };
      } else {
        // If blob isn't moving much, just use current position
        this.predictedTarget = { x: currentBlobPos.x, y: currentBlobPos.y };
      }
    }

    this.lastBlobPosition = currentBlobPos.copy();
  }

  // Main update function - call this every frame
  update(lightSource, blob, blockers, goal = null, alarmZoneManager = null) {
    this.frameCounter++;

    // Validate blockers on first frame
    if (this.frameCounter === 1) {
      this.validateBlockers(blockers);
    }

    // Validate light position first
    this.validateLightPosition(lightSource);

    // Check for alarm triggers and force investigating behavior
    if (alarmZoneManager && alarmZoneManager.hasActiveAlarms()) {
      let alarmPosition = alarmZoneManager.getMostRecentAlarm();

      // Check if this is a new alarm (different position) or first alarm
      let isNewAlarm = false;
      if (alarmPosition) {
        if (!this.currentAlarmPosition) {
          isNewAlarm = true; // First alarm
        } else {
          let distance = Math.sqrt(
            Math.pow(alarmPosition.x - this.currentAlarmPosition.x, 2) +
              Math.pow(alarmPosition.y - this.currentAlarmPosition.y, 2)
          );
          isNewAlarm = distance > 10; // New alarm if more than 10 pixels away
        }
      }

      if (alarmPosition && (!this.isRespondingToAlarm || isNewAlarm)) {
        if (isNewAlarm && this.isRespondingToAlarm) {
          console.log(
            `Light AI: NEW ALARM! Abandoning current response and switching to (${alarmPosition.x.toFixed(
              1
            )}, ${alarmPosition.y.toFixed(1)})`
          );
        } else {
          console.log(
            `Light AI: ALARM TRIGGERED! Investigating (${alarmPosition.x.toFixed(
              1
            )}, ${alarmPosition.y.toFixed(1)})`
          );
        }

        // Store current alarm position for comparison
        this.currentAlarmPosition = { x: alarmPosition.x, y: alarmPosition.y };

        // Reset any existing alarm response state
        if (this.isAlarmSweeping) {
          console.log("Light AI: Interrupting ongoing sweep for new alarm");
        }
        if (this.hasReachedAlarmLocation && !this.isAlarmSweeping) {
          console.log(
            "Light AI: Interrupting arrival at alarm location for new alarm"
          );
        }
        this.isAlarmSweeping = false;
        this.hasReachedAlarmLocation = false;

        // Start/restart alarm response
        this.isRespondingToAlarm = true;
        this.alarmResponseStartTime = this.frameCounter;

        // Set alarm flag in lightSource to prevent state overrides
        if (lightSource.hasOwnProperty("isRespondingToAlarm")) {
          lightSource.isRespondingToAlarm = true;
        }

        // Force light into investigating mode targeting the alarm position
        lightSource.state = "investigating";
        lightSource.lastKnownBlobPosition = {
          x: alarmPosition.x,
          y: alarmPosition.y,
        };

        // Set investigation target directly to alarm position (no velocity prediction needed)
        this.investigationPredictedTarget = {
          x: alarmPosition.x,
          y: alarmPosition.y,
        };

        // Set up sweep behavior at alarm location
        this.alarmSweepLocation = { x: alarmPosition.x, y: alarmPosition.y };
        this.hasReachedAlarmLocation = false;
        this.isAlarmSweeping = false; // Will start after reaching location

        // Clear current path to force immediate recalculation to alarm
        this.currentPath = [];
        this.pathIndex = 0;

        // Reset state tracking
        this.previousState = "investigating";

        // Cancel any ongoing reaction timing
        lightSource.isReacting = false;
        lightSource.reactionTimer = 0;
      }
    }

    // Handle ongoing alarm response
    if (this.isRespondingToAlarm) {
      let responseTime = this.frameCounter - this.alarmResponseStartTime;

      // Check if alarm response time is up OR sweep is completed
      if (
        responseTime >= this.alarmResponseDuration ||
        (!this.isAlarmSweeping && this.hasReachedAlarmLocation)
      ) {
        console.log(
          "Light AI: Alarm response completed, returning to normal behavior"
        );
        this.isRespondingToAlarm = false;
        this.investigationPredictedTarget = null;

        // Clear sweep state
        this.isAlarmSweeping = false;
        this.hasReachedAlarmLocation = false;
        this.alarmSweepLocation = null;
        this.currentAlarmPosition = null; // Clear current alarm tracking

        // Clear alarm flag in lightSource
        if (lightSource.hasOwnProperty("isRespondingToAlarm")) {
          lightSource.isRespondingToAlarm = false;
        }

        // If no blob is visible, return to searching
        if (
          lightSource.state === "investigating" &&
          !lightSource.canSeeBlob(blob, blockers)
        ) {
          lightSource.state = "searching";
          this.currentPath = [];
          this.pathIndex = 0;
        }
      }
    }

    // Track blob velocity for predictive targeting
    if (blob && !blob.isDead) {
      this.updateBlobVelocityTracking(blob);
    }

    // Update light behavior, but respect priority system during alarm responses
    if (!this.isRespondingToAlarm) {
      lightSource.updateBehavior(blob, blockers);
    } else {
      // During alarm response, only update movement direction but preserve state
      lightSource.updateMovementDirection();

      // Respect priority: Hunt > Investigate > Alarm
      // Only force investigating state if not already in higher priority state
      if (lightSource.state !== "hunting") {
        lightSource.state = "investigating";
        lightSource.isReacting = false;
        lightSource.reactionTimer = 0;
      }

      console.log(
        "Light AI: Preserving alarm state, skipping normal behavior update"
      );
    }

    // Check for state changes and clear path data when needed
    if (lightSource.state !== this.previousState) {
      this.handleStateTransition(this.previousState, lightSource.state);
      this.previousState = lightSource.state;
    }

    // Move based on light state
    if (lightSource.state === "searching") {
      this.meanderBehavior(lightSource, blockers, blob, goal);
    } else if (lightSource.state === "hunting" && blob && !blob.isDead) {
      this.huntBehavior(lightSource, blob, blockers);
    } else if (lightSource.state === "investigating") {
      this.investigateBehavior(lightSource, blockers, blob);
    } else {
      // No active behavior, apply momentum damping
      this.velocity.mult(0.9);
    }

    // Final check: ensure alarm state is preserved, but respect higher priority states
    // Priorities: Hunt > Investigate > Alarm > Search
    if (
      this.isRespondingToAlarm &&
      lightSource.state !== "investigating" &&
      lightSource.state !== "hunting"
    ) {
      console.log(
        `Light AI: CORRECTING state ${lightSource.state} back to investigating for alarm`
      );
      lightSource.state = "investigating";
      lightSource.isReacting = false;
      lightSource.reactionTimer = 0;
    }

    // Debug: log state changes
    if (frameCount % 120 === 0) {
      let reactionInfo = lightSource.isReacting
        ? ` [REACTING: ${lightSource.state}→${lightSource.targetState} ${
            lightSource.reactionTimer
          }/${Math.round(lightSource.reactionTimeNeeded)}]`
        : "";
      let alarmInfo = this.isRespondingToAlarm ? ` [ALARM RESPONSE]` : "";
      console.log(
        `Light AI: state=${lightSource.state}${reactionInfo}${alarmInfo}, pathLength=${this.currentPath.length}, pathIndex=${this.pathIndex}`
      );
    }

    // Check if stuck and handle it
    this.handleStuckState(lightSource, blob, blockers);
  }

  // Meandering behavior when searching
  meanderBehavior(lightSource, blockers, blob = null, goal = null) {
    this.meanderTimer++;

    // Check if we've reached the current target
    if (this.meanderTarget) {
      let currentPos = createVector(lightSource.x, lightSource.y);
      let distanceToTarget = p5.Vector.dist(currentPos, this.meanderTarget);

      // If we're close to the target, wait a bit before choosing a new one
      if (distanceToTarget < 30) {
        this.meanderTimer += 3; // Speed up timer when close to target
      }
    }

    // Choose new random target periodically or if we don't have one
    if (!this.meanderTarget || this.meanderTimer > this.meanderInterval) {
      this.meanderTarget = this.generateStrategicMeanderTarget(
        lightSource,
        blockers,
        blob,
        goal
      );
      this.meanderTimer = 0;
    }

    // Move toward meander target only if we're not too close
    if (this.meanderTarget) {
      let currentPos = createVector(lightSource.x, lightSource.y);
      let distanceToTarget = p5.Vector.dist(currentPos, this.meanderTarget);

      if (distanceToTarget > 25) {
        // Only move if we're far enough from target
        this.moveTowardTarget(
          lightSource,
          this.meanderTarget,
          this.searchSpeed
        );
      } else {
        // We're close, just apply gentle momentum damping
        this.velocity.mult(0.9);
      }
    }
  }

  // Generate a random but valid meander target
  generateMeanderTarget(lightSource, blockers) {
    let attempts = 0;
    let target;

    while (attempts < 20) {
      // Generate target in a smaller circle for more predictable movement
      let angle = random(TWO_PI);
      let distance = random(200, 200); // Smaller range for more controlled movement
      target = createVector(
        lightSource.x + cos(angle) * distance,
        lightSource.y + sin(angle) * distance
      );

      // Constrain to canvas bounds
      target.x = constrain(target.x, 50, width - 50);
      target.y = constrain(target.y, 50, height - 50);

      // Check if target is not inside a blocker
      let validTarget = true;
      for (let blocker of blockers) {
        if (
          target.x > blocker.x &&
          target.x < blocker.x + blocker.width &&
          target.y > blocker.y &&
          target.y < blocker.y + blocker.height
        ) {
          validTarget = false;
          break;
        }
      }

      if (validTarget) break;
      attempts++;
    }

    return target;
  }

  // Generate strategic meander target based on goal positioning
  generateStrategicMeanderTarget(lightSource, blockers, blob, goal) {
    // If no goal or blob info available, fall back to normal behavior
    if (!goal || !blob || blob.isDead) {
      return this.generateMeanderTarget(lightSource, blockers);
    }

    let attempts = 0;
    let target;
    let lightPos = createVector(lightSource.x, lightSource.y);
    let blobPos = createVector(blob.center.x, blob.center.y);
    let goalPos = createVector(goal.pos.x, goal.pos.y);

    // Calculate distances
    let lightToGoal = p5.Vector.dist(lightPos, goalPos);
    let blobToGoal = p5.Vector.dist(blobPos, goalPos);

    // Determine strategic positioning
    let strategicDistance;
    let strategicDirection;

    if (blobToGoal < lightToGoal) {
      // Blob is closer to goal than light - light should get closer to goal
      console.log("Light AI: Blob closer to goal, moving to intercept");
      strategicDirection = p5.Vector.sub(goalPos, lightPos).normalize();
      strategicDistance = random(250, 350); // Move towards goal area
    } else {
      // Blob is farther from goal than light - light should patrol farther from goal
      console.log("Light AI: Blob farther from goal, patrolling outer area");
      strategicDirection = p5.Vector.sub(lightPos, goalPos).normalize();
      strategicDistance = random(50, 150); // Move away from goal to create barrier
    }

    while (attempts < 30) {
      // Generate target in strategic direction with some randomness
      let baseAngle = atan2(strategicDirection.y, strategicDirection.x);
      let angleVariation = random(-PI / 3, PI / 3); // ±60 degrees variation
      let finalAngle = baseAngle + angleVariation;

      target = createVector(
        lightPos.x + cos(finalAngle) * strategicDistance,
        lightPos.y + sin(finalAngle) * strategicDistance
      );

      // Constrain to canvas bounds
      target.x = constrain(target.x, 50, width - 50);
      target.y = constrain(target.y, 50, height - 50);

      // Check if target is not inside a blocker
      let validTarget = true;
      for (let blocker of blockers) {
        if (
          target.x > blocker.x &&
          target.x < blocker.x + blocker.width &&
          target.y > blocker.y &&
          target.y < blocker.y + blocker.height
        ) {
          validTarget = false;
          break;
        }
      }

      if (validTarget) break;
      attempts++;
    }

    // If we couldn't find a strategic target, fall back to normal behavior
    if (attempts >= 30) {
      console.log("Light AI: Falling back to normal meander target");
      return this.generateMeanderTarget(lightSource, blockers);
    }

    return target;
  }

  // Hunting behavior - move toward blob
  huntBehavior(lightSource, blob, blockers) {
    let currentPos = createVector(lightSource.x, lightSource.y);
    let blobCenter = createVector(blob.center.x, blob.center.y);
    let distanceToBlob = p5.Vector.dist(currentPos, blobCenter);

    // Calculate safe following distance (blob radius + some margin)
    let blobRadius = 0;
    if (blob.nodes && blob.nodes.length > 0) {
      // Find maximum distance from center to any node
      for (let node of blob.nodes) {
        let nodeDistance = p5.Vector.dist(blobCenter, node.pos);
        blobRadius = Math.max(blobRadius, nodeDistance);
      }
    }
    let safeDistance = blobRadius + 30; // 30 pixel safety margin

    let target;

    if (distanceToBlob > safeDistance + 20) {
      // Far from blob - move toward it normally
      target = { x: blob.center.x, y: blob.center.y };

      // Update path periodically or if target moved significantly
      if (
        this.frameCounter % this.pathUpdateInterval === 0 ||
        this.shouldRecalculatePath(target)
      ) {
        this.calculatePath(lightSource, target, blockers);
      }

      // Move along calculated path
      this.moveAlongPath(lightSource, this.huntSpeed);
    } else if (distanceToBlob > safeDistance) {
      // Close to blob - move more carefully toward safe distance
      let direction = p5.Vector.sub(blobCenter, currentPos).normalize();
      let targetDistance = safeDistance + 5; // Aim for just outside safe distance
      target = p5.Vector.add(
        currentPos,
        p5.Vector.mult(direction, targetDistance - distanceToBlob)
      );

      this.moveTowardTarget(lightSource, target, this.huntSpeed * 0.5);
    } else {
      // Too close to blob - maintain safe distance by orbiting
      console.log("Light AI: Too close to blob, maintaining safe distance");

      // Calculate position at safe distance
      let directionFromBlob = p5.Vector.sub(currentPos, blobCenter).normalize();
      let safePosition = p5.Vector.add(
        blobCenter,
        p5.Vector.mult(directionFromBlob, safeDistance + 10)
      );

      // Add slight orbiting motion to avoid getting stuck
      let orbitAngle = frameCount * 0.02; // Slow orbit
      let orbitOffset = createVector(
        cos(orbitAngle) * 15,
        sin(orbitAngle) * 15
      );
      safePosition.add(orbitOffset);

      target = { x: safePosition.x, y: safePosition.y };
      this.moveTowardTarget(lightSource, target, this.huntSpeed * 0.3);

      // Also apply gentle repulsion force to push away from blob
      let repulsionForce = p5.Vector.sub(currentPos, blobCenter)
        .normalize()
        .mult(0.5);
      this.acceleration.add(repulsionForce);
    }
  }

  // Investigation behavior - move to predicted position based on FROZEN blob velocity
  investigateBehavior(lightSource, blockers, blob) {
    if (lightSource.lastKnownBlobPosition) {
      // Handle alarm sweep behavior if responding to alarm
      if (this.isRespondingToAlarm && this.alarmSweepLocation) {
        // Check for blob during sweep - this can interrupt the alarm!
        let foundBlob = this.handleAlarmSweep(lightSource, blockers, blob);
        if (foundBlob) {
          return; // Blob was found, alarm sweep was interrupted
        }
        return;
      }

      // Use investigation-specific predicted target (frozen at moment of losing sight)
      // or fall back to last known position if no velocity prediction available
      let target = this.investigationPredictedTarget || {
        x: lightSource.lastKnownBlobPosition.x,
        y: lightSource.lastKnownBlobPosition.y,
      };

      // Debug: Show what target we're using
      if (this.frameCounter % 120 === 0) {
        let speedInfo = this.isRespondingToAlarm
          ? ` at ALARM SPEED (${this.alarmSpeed})`
          : ` at search speed (${this.searchSpeed})`;
        if (this.investigationPredictedTarget) {
          console.log(
            `Investigating predicted position based on frozen velocity${speedInfo}:`,
            target
          );
        } else {
          console.log(
            `Investigating last known position (no velocity prediction)${speedInfo}:`,
            target
          );
        }
      }

      // Update path if needed (more frequent updates when responding to alarm)
      let pathUpdateFrequency = this.isRespondingToAlarm
        ? 15
        : this.pathUpdateInterval; // Update every 15 frames for alarms
      if (
        this.frameCounter % pathUpdateFrequency === 0 ||
        this.shouldRecalculatePath(target)
      ) {
        this.calculatePath(lightSource, target, blockers);
      }

      // Move along calculated path with appropriate speed
      let investigationSpeed = this.isRespondingToAlarm
        ? this.alarmSpeed
        : this.searchSpeed;
      this.moveAlongPath(lightSource, investigationSpeed);
    }
  }

  // Handle the 360-degree sweep behavior at alarm location
  handleAlarmSweep(lightSource, blockers, blob) {
    let currentPos = createVector(lightSource.x, lightSource.y);
    let alarmPos = createVector(
      this.alarmSweepLocation.x,
      this.alarmSweepLocation.y
    );
    let distanceToAlarm = p5.Vector.dist(currentPos, alarmPos);

    // First, check for blob while moving to or at alarm location
    if (blob && !blob.isDead && lightSource.canSeeBlob(blob, blockers)) {
      console.log(
        "Light AI: BLOB SPOTTED while responding to alarm! Switching to hunting mode"
      );

      // Immediately end alarm response and switch to hunting
      this.isRespondingToAlarm = false;
      this.isAlarmSweeping = false;
      this.hasReachedAlarmLocation = false;
      this.alarmSweepLocation = null;
      this.currentAlarmPosition = null;

      // Force switch to hunting mode
      lightSource.state = "hunting";
      lightSource.lastKnownBlobPosition = blob.center.copy();

      // Clear current path to force immediate recalculation
      this.currentPath = [];
      this.pathIndex = 0;

      // Clear investigation target
      this.investigationPredictedTarget = null;

      // Update previous state tracking
      this.previousState = "hunting";

      // Immediately start hunting behavior to ensure the light moves
      console.log(
        "Light AI: Immediately starting hunt behavior (during movement to alarm)"
      );
      this.huntBehavior(lightSource, blob, blockers);

      return true; // Indicate that blob was found
    }

    // Move to alarm location if not there yet
    if (!this.hasReachedAlarmLocation) {
      if (distanceToAlarm < 30) {
        // Close enough to start sweep
        this.hasReachedAlarmLocation = true;
        this.isAlarmSweeping = true;
        this.alarmSweepStartAngle = lightSource.bearing || 0;
        this.alarmSweepCurrentAngle = this.alarmSweepStartAngle;
        console.log("Light AI: Reached alarm location, starting 360° sweep");
      } else {
        // Still moving to alarm location
        this.moveTowardTarget(
          lightSource,
          this.alarmSweepLocation,
          this.alarmSpeed
        );
        return false; // No blob found, continuing to alarm
      }
    }

    // Perform 360-degree sweep
    if (this.isAlarmSweeping) {
      // Update light bearing for sweep
      lightSource.bearing = this.alarmSweepCurrentAngle;

      // CRITICAL: Check if blob is spotted during sweep - this should interrupt the alarm!
      if (blob && !blob.isDead && lightSource.canSeeBlob(blob, blockers)) {
        console.log(
          "Light AI: BLOB SPOTTED during alarm sweep! Switching to hunting mode"
        );

        // Immediately end alarm response and switch to hunting
        this.isRespondingToAlarm = false;
        this.isAlarmSweeping = false;
        this.hasReachedAlarmLocation = false;
        this.alarmSweepLocation = null;
        this.currentAlarmPosition = null;

        // Force switch to hunting mode
        lightSource.state = "hunting";
        lightSource.lastKnownBlobPosition = blob.center.copy();

        // Clear current path to force immediate recalculation
        this.currentPath = [];
        this.pathIndex = 0;

        // Clear investigation target
        this.investigationPredictedTarget = null;

        // Update previous state tracking
        this.previousState = "hunting";

        // Immediately start hunting behavior to ensure the light moves
        console.log("Light AI: Immediately starting hunt behavior");
        this.huntBehavior(lightSource, blob, blockers);

        return true; // Indicate that blob was found and sweep was interrupted
      }
      this.alarmSweepCurrentAngle += this.alarmSweepSpeed;

      // Keep angle in 0-360 range
      if (this.alarmSweepCurrentAngle >= 360) {
        this.alarmSweepCurrentAngle -= 360;
      }

      // Check if we've completed full rotation
      let angleCompleted = Math.abs(
        this.alarmSweepCurrentAngle - this.alarmSweepStartAngle
      );
      if (
        angleCompleted >= 360 ||
        (this.alarmSweepCurrentAngle < this.alarmSweepStartAngle &&
          angleCompleted >= 350)
      ) {
        // Completed sweep
        console.log("Light AI: Completed 360° sweep, ending alarm response");
        this.isAlarmSweeping = false;
        this.hasReachedAlarmLocation = false;
        this.alarmSweepLocation = null;
        // Alarm response will end naturally in the update cycle
      }

      // Move in small circle during sweep to add movement
      let orbitRadius = 15;
      let orbitAngle = this.frameCounter * 0.02;
      let orbitOffset = createVector(
        cos(orbitAngle) * orbitRadius,
        sin(orbitAngle) * orbitRadius
      );
      let targetPos = p5.Vector.add(alarmPos, orbitOffset);

      this.moveTowardTarget(lightSource, targetPos, this.searchSpeed * 0.5);

      // Debug sweep progress
      if (this.frameCounter % 30 === 0) {
        let sweepProgress = Math.round((angleCompleted / 360) * 100);
        console.log(
          `Light AI: Alarm sweep ${sweepProgress}% complete (${this.alarmSweepCurrentAngle.toFixed(
            1
          )}°)`
        );
      }
    }

    return false; // No blob found during sweep
  }

  // Check if the light should strafe instead of turning around
  shouldStrafe(lightSource, targetDirection, blockers) {
    let currentPos = createVector(lightSource.x, lightSource.y);
    let testPos = p5.Vector.add(
      currentPos,
      p5.Vector.mult(targetDirection, 30)
    );

    // Check if the direct path is blocked
    for (let blocker of blockers) {
      if (this.lineIntersectsRect(currentPos, testPos, blocker)) {
        return true;
      }
    }
    return false;
  }

  // Calculate strafe direction perpendicular to movement
  getStrafeDirection(movementDirection) {
    // Get perpendicular direction (90 degrees rotated)
    let perpendicular = createVector(-movementDirection.y, movementDirection.x);
    perpendicular.mult(this.strafeDirection);
    return perpendicular;
  }

  // Apply smooth physics-based movement with strafing
  applySmoothMovement(lightSource, targetDirection, maxSpeed, blockers = []) {
    // Update last movement direction for strafing
    if (targetDirection.mag() > 0.1) {
      this.lastMovementDirection = targetDirection.copy().normalize();
    }

    let moveDirection = targetDirection.copy();

    // Check if we should strafe instead of moving directly toward target
    if (
      blockers.length > 0 &&
      this.shouldStrafe(lightSource, targetDirection, blockers) &&
      this.strafeTimer < this.maxStrafeTime
    ) {
      let strafeDir = this.getStrafeDirection(this.lastMovementDirection);
      moveDirection.add(strafeDir.mult(0.7)); // Add strafing component
      this.strafeTimer++;

      // Occasionally change strafe direction
      if (this.strafeTimer % 30 === 0) {
        this.strafeDirection *= -1;
      }
    } else {
      this.strafeTimer = 0;
    }

    // Calculate desired velocity
    let desired = moveDirection.copy();
    desired.normalize();
    desired.mult(maxSpeed);

    // Calculate acceleration (steering force)
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxAcceleration);

    // Apply forces
    this.acceleration.add(steer);
    this.velocity.add(this.acceleration);
    this.velocity.mult(this.friction); // Apply friction
    this.velocity.limit(maxSpeed);

    // Update position
    lightSource.x += this.velocity.x;
    lightSource.y += this.velocity.y;

    // Reset acceleration for next frame
    this.acceleration.mult(0);

    // Ensure light stays within bounds
    lightSource.x = constrain(lightSource.x, 20, width - 20);
    lightSource.y = constrain(lightSource.y, 20, height - 20);
  }

  // Simple movement toward target (now using smooth movement)
  moveTowardTarget(lightSource, target, speed) {
    let current = createVector(lightSource.x, lightSource.y);
    let targetVector = createVector(target.x, target.y);
    let direction = p5.Vector.sub(targetVector, current);
    let distance = direction.mag();

    // Minimum stopping distance to prevent overshooting
    let minStopDistance = 5;

    if (distance > speed * 3) {
      // Far from target, move at full speed
      this.applySmoothMovement(lightSource, direction, speed, []);
    } else if (distance > 25) {
      // Getting close, start slowing down
      let slowSpeed = map(distance, 25, speed * 3, speed * 0.3, speed);
      this.applySmoothMovement(lightSource, direction, slowSpeed, []);
    } else if (distance > minStopDistance) {
      // Very close to target, move very slowly
      let verySlowSpeed = map(
        distance,
        minStopDistance,
        25,
        speed * 0.1,
        speed * 0.3
      );
      this.applySmoothMovement(lightSource, direction, verySlowSpeed, []);
    } else {
      // At target distance, stop moving toward it
      this.velocity.mult(0.7); // Apply stronger braking
    }
  }

  // Check if we need to recalculate the path
  shouldRecalculatePath(target) {
    // If no path exists or we've completed it, recalculate
    if (
      this.currentPath.length === 0 ||
      this.pathIndex >= this.currentPath.length
    ) {
      return true;
    }

    // Check if target has moved significantly from our destination
    let targetMoved =
      p5.Vector.dist(
        createVector(target.x, target.y),
        this.currentPath[this.currentPath.length - 1]
      ) > 80; // Threshold for target movement

    // Also recalculate if we're close to the end of our path but target is far
    let nearEndOfPath = this.pathIndex >= this.currentPath.length - 2;
    let targetStillFar =
      p5.Vector.dist(
        createVector(target.x, target.y),
        createVector(
          this.currentPath[this.currentPath.length - 1].x,
          this.currentPath[this.currentPath.length - 1].y
        )
      ) > 30;

    return targetMoved || (nearEndOfPath && targetStillFar);
  }

  // Calculate path from light to target avoiding blockers
  calculatePath(lightSource, target, blockers) {
    let start = createVector(lightSource.x, lightSource.y);
    let end = createVector(target.x, target.y);

    // Always use A* pathfinding for consistent multi-waypoint navigation
    // This ensures the AI follows proper paths around obstacles
    this.currentPath = this.findPathAStar(start, end, blockers);
    this.pathIndex = 0;

    // If no path found, add direct path as fallback
    if (this.currentPath.length === 0) {
      this.currentPath = [end];
    }
  }

  // Check if direct line path is clear of obstacles
  isPathClear(start, end, blockers) {
    for (let blocker of blockers) {
      if (this.lineIntersectsRect(start, end, blocker)) {
        return false;
      }
    }
    return true;
  }

  // Simple A* pathfinding implementation
  findPathAStar(start, end, blockers) {
    let waypoints = this.generateWaypoints(blockers);

    // Add some intermediate waypoints between start and end for smoother paths
    let midPoint = p5.Vector.lerp(start, end, 0.5);
    if (!this.isPointInsideAnyBlocker(midPoint, blockers)) {
      waypoints.push(midPoint);
    }

    waypoints.push(start);
    waypoints.push(end);

    // Find shortest path through waypoints
    let path = this.dijkstra(waypoints, start, end, blockers);
    return path.slice(1); // Remove starting point
  }

  // Check if a point is inside any blocker
  isPointInsideAnyBlocker(point, blockers) {
    for (let blocker of blockers) {
      if (
        point.x > blocker.x &&
        point.x < blocker.x + blocker.width &&
        point.y > blocker.y &&
        point.y < blocker.y + blocker.height
      ) {
        return true;
      }
    }
    return false;
  }

  // Validate blocker positions and dimensions
  validateBlockers(blockers) {
    let issues = [];
    for (let i = 0; i < blockers.length; i++) {
      let blocker = blockers[i];

      // Check for required properties
      if (
        !blocker.hasOwnProperty("x") ||
        !blocker.hasOwnProperty("y") ||
        !blocker.hasOwnProperty("width") ||
        !blocker.hasOwnProperty("height")
      ) {
        issues.push(`Blocker ${i}: Missing required properties`);
        continue;
      }

      // Check for valid numbers
      if (
        isNaN(blocker.x) ||
        isNaN(blocker.y) ||
        isNaN(blocker.width) ||
        isNaN(blocker.height)
      ) {
        issues.push(`Blocker ${i}: Invalid numeric values`);
      }

      // Check for positive dimensions
      if (blocker.width <= 0 || blocker.height <= 0) {
        issues.push(
          `Blocker ${i}: Invalid dimensions (${blocker.width}×${blocker.height})`
        );
      }

      // Check if blocker is within canvas bounds
      if (
        blocker.x < 0 ||
        blocker.y < 0 ||
        blocker.x + blocker.width > width ||
        blocker.y + blocker.height > height
      ) {
        issues.push(`Blocker ${i}: Outside canvas bounds`);
      }
    }

    if (issues.length > 0) {
      console.warn("Blocker validation issues:", issues);
    } else {
      console.log(`All ${blockers.length} blockers validated successfully`);
    }

    return issues;
  }

  // Generate waypoints around blocker corners
  generateWaypoints(blockers) {
    let waypoints = [];
    let margin = this.avoidanceRadius;

    for (let blocker of blockers) {
      // Generate corner points
      let corners = [
        { x: blocker.x - margin, y: blocker.y - margin }, // Top-left
        { x: blocker.x + blocker.width + margin, y: blocker.y - margin }, // Top-right
        {
          x: blocker.x + blocker.width + margin,
          y: blocker.y + blocker.height + margin,
        }, // Bottom-right
        { x: blocker.x - margin, y: blocker.y + blocker.height + margin }, // Bottom-left
      ];

      // Add corner waypoints
      for (let corner of corners) {
        if (
          corner.x > 0 &&
          corner.x < width &&
          corner.y > 0 &&
          corner.y < height
        ) {
          waypoints.push(createVector(corner.x, corner.y));
        }
      }

      // Add mid-edge waypoints for better pathfinding
      let midPoints = [
        // Top edge middle
        { x: blocker.x + blocker.width / 2, y: blocker.y - margin },
        // Right edge middle
        {
          x: blocker.x + blocker.width + margin,
          y: blocker.y + blocker.height / 2,
        },
        // Bottom edge middle
        {
          x: blocker.x + blocker.width / 2,
          y: blocker.y + blocker.height + margin,
        },
        // Left edge middle
        { x: blocker.x - margin, y: blocker.y + blocker.height / 2 },
      ];

      for (let point of midPoints) {
        if (point.x > 0 && point.x < width && point.y > 0 && point.y < height) {
          waypoints.push(createVector(point.x, point.y));
        }
      }
    }

    // Store waypoints for debug visualization
    this.allWaypoints = waypoints.slice();

    return waypoints;
  }

  // Dijkstra's algorithm for shortest path
  dijkstra(waypoints, start, end, blockers) {
    let distances = new Map();
    let previous = new Map();
    let unvisited = new Set();

    // Clear previous connections for debug visualization
    this.waypointConnections = [];

    // Initialize distances
    for (let point of waypoints) {
      distances.set(point, Infinity);
      unvisited.add(point);
    }
    distances.set(start, 0);

    while (unvisited.size > 0) {
      // Find unvisited node with minimum distance
      let current = null;
      let minDistance = Infinity;
      for (let node of unvisited) {
        if (distances.get(node) < minDistance) {
          minDistance = distances.get(node);
          current = node;
        }
      }

      if (current === null || current === end) break;
      unvisited.delete(current);

      // Check all neighbors - always build full path network
      for (let neighbor of waypoints) {
        if (unvisited.has(neighbor)) {
          // Always check connections, even if direct path exists
          let canConnect = this.isPathClear(current, neighbor, blockers);

          if (canConnect) {
            // Store connection for debug visualization
            this.waypointConnections.push({
              from: current,
              to: neighbor,
            });

            let distance =
              distances.get(current) + p5.Vector.dist(current, neighbor);
            if (distance < distances.get(neighbor)) {
              distances.set(neighbor, distance);
              previous.set(neighbor, current);
            }
          }
        }
      }
    }

    // Reconstruct path - ensure we get intermediate waypoints
    let path = [];
    let current = end;
    let pathFound = false;

    while (current !== undefined && current !== start) {
      path.unshift(current);
      current = previous.get(current);
      pathFound = true;
    }

    // If we found a proper path through waypoints, return it
    // Otherwise, if direct path is clear, use that as fallback
    if (pathFound && path.length > 0) {
      return path;
    } else if (this.isPathClear(start, end, blockers)) {
      return [end];
    } else {
      // No path possible, return empty array
      return [];
    }
  }

  // Move light along the calculated path
  moveAlongPath(lightSource, speed = this.searchSpeed) {
    if (
      this.currentPath.length === 0 ||
      this.pathIndex >= this.currentPath.length
    ) {
      return;
    }

    let target = this.currentPath[this.pathIndex];
    let current = createVector(lightSource.x, lightSource.y);
    let direction = p5.Vector.sub(target, current);
    let distance = direction.mag();

    if (distance < 25) {
      // Reached waypoint, move to next
      this.pathIndex++;

      // If we've reached the end of the path, clear it
      if (this.pathIndex >= this.currentPath.length) {
        this.currentPath = [];
        this.pathIndex = 0;
      }
    } else {
      // Move toward current waypoint with smooth movement
      // Slow down as we approach waypoints
      let adjustedSpeed = distance < 50 ? speed * 0.7 : speed;
      this.applySmoothMovement(lightSource, direction, adjustedSpeed, []);
    }
  }

  // Aim light toward target
  aimAtTarget(lightSource, target) {
    let dx = target.x - lightSource.x;
    let dy = target.y - lightSource.y;
    lightSource.bearing = (atan2(dy, dx) * 180) / PI;
  }

  // Handle cases where AI gets stuck
  handleStuckState(lightSource, target, blockers) {
    let currentPos = createVector(lightSource.x, lightSource.y);
    let lastPos = createVector(this.lastPosition.x, this.lastPosition.y);
    let movementDistance = p5.Vector.dist(currentPos, lastPos);

    // More sophisticated stuck detection
    let hasActiveTarget = false;
    let distanceToTarget = Infinity;

    if (lightSource.state === "hunting" && target && !target.isDead) {
      hasActiveTarget = true;
      distanceToTarget = p5.Vector.dist(
        currentPos,
        createVector(target.x, target.y)
      );
    } else if (
      lightSource.state === "investigating" &&
      lightSource.lastKnownBlobPosition
    ) {
      hasActiveTarget = true;
      let investigateTarget =
        this.predictedTarget || lightSource.lastKnownBlobPosition;
      distanceToTarget = p5.Vector.dist(
        currentPos,
        createVector(investigateTarget.x, investigateTarget.y)
      );
    } else if (lightSource.state === "searching" && this.meanderTarget) {
      hasActiveTarget = true;
      distanceToTarget = p5.Vector.dist(currentPos, this.meanderTarget);
    }

    // Only consider stuck if:
    // 1. We have an active target that's far away (>15 pixels)
    // 2. We should be moving toward it but barely moved
    // 3. We have a velocity magnitude that's very low
    let velocityMagnitude = this.velocity.mag();
    let isReallyStuck =
      hasActiveTarget &&
      distanceToTarget > 15 &&
      movementDistance < 0.8 &&
      velocityMagnitude < 0.5;

    if (isReallyStuck) {
      this.stuckCounter++;
    } else {
      this.stuckCounter = Math.max(0, this.stuckCounter - 3); // Faster reduction when not stuck
    }

    // If stuck for too long, apply random impulse
    if (this.stuckCounter > 180) {
      // Even higher threshold - 3 seconds
      console.log("Light AI: Applying unstuck impulse - truly stuck");
      let randomAngle = random(0, TWO_PI);
      let impulse = createVector(
        cos(randomAngle) * this.huntSpeed * 0.01,
        sin(randomAngle) * this.huntSpeed * 0.01
      );

      // Apply stronger impulse
      this.acceleration.add(impulse.mult(0.5));
      this.velocity.add(impulse.mult(0.3)); // Also add directly to velocity

      this.stuckCounter = 0;
      this.currentPath = []; // Force path recalculation

      // Also generate new meander target if searching
      if (lightSource.state === "searching") {
        this.meanderTarget = this.generateMeanderTarget(lightSource, blockers);
        this.meanderTimer = 0;
      }
    }

    this.lastPosition = { x: lightSource.x, y: lightSource.y };
  }

  // Check if line intersects with rectangle
  lineIntersectsRect(start, end, rect) {
    // Add margin for safety
    let margin = this.avoidanceRadius;
    let expandedRect = {
      x: rect.x - margin,
      y: rect.y - margin,
      width: rect.width + margin * 2,
      height: rect.height + margin * 2,
    };

    return this.lineRectangleIntersection(start, end, expandedRect);
  }

  // Line-rectangle intersection test
  lineRectangleIntersection(start, end, rect) {
    // Check if either endpoint is inside the rectangle
    if (this.pointInRect(start, rect) || this.pointInRect(end, rect)) {
      return true;
    }

    // Check intersection with each edge
    let edges = [
      {
        start: createVector(rect.x, rect.y),
        end: createVector(rect.x + rect.width, rect.y),
      },
      {
        start: createVector(rect.x + rect.width, rect.y),
        end: createVector(rect.x + rect.width, rect.y + rect.height),
      },
      {
        start: createVector(rect.x + rect.width, rect.y + rect.height),
        end: createVector(rect.x, rect.y + rect.height),
      },
      {
        start: createVector(rect.x, rect.y + rect.height),
        end: createVector(rect.x, rect.y),
      },
    ];

    for (let edge of edges) {
      if (this.lineIntersection(start, end, edge.start, edge.end)) {
        return true;
      }
    }

    return false;
  }

  // Check if point is inside rectangle
  pointInRect(point, rect) {
    return (
      point.x >= rect.x &&
      point.x <= rect.x + rect.width &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.height
    );
  }

  // Line intersection (same as in LightSource)
  lineIntersection(p1, p2, p3, p4) {
    let x1 = p1.x,
      y1 = p1.y;
    let x2 = p2.x,
      y2 = p2.y;
    let x3 = p3.x,
      y3 = p3.y;
    let x4 = p4.x,
      y4 = p4.y;

    let denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (abs(denom) < 0.0001) return null;

    let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
    let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denom;

    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
      return createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));
    }

    return null;
  }

  // Debug visualization
  drawDebugInfo(lightSource) {
    // Always draw velocity vector (shows movement direction)
    if (this.velocity.mag() > 0.1) {
      // Use different colors for different speed states
      if (this.isRespondingToAlarm) {
        stroke(255, 100, 100, 255); // Bright red for alarm speed
        strokeWeight(4); // Thicker line for alarm
      } else {
        stroke(255, 255, 0, 200); // Yellow for normal speed
        strokeWeight(3);
      }
      let velScale = 50;
      line(
        lightSource.x,
        lightSource.y,
        lightSource.x + this.velocity.x * velScale,
        lightSource.y + this.velocity.y * velScale
      );

      // Draw velocity arrow tip with matching color
      if (this.isRespondingToAlarm) {
        fill(255, 100, 100, 255); // Bright red for alarm speed
      } else {
        fill(255, 255, 0, 200); // Yellow for normal speed
      }
      noStroke();
      let arrowSize = this.isRespondingToAlarm ? 10 : 8; // Larger arrow for alarm
      ellipse(
        lightSource.x + this.velocity.x * velScale,
        lightSource.y + this.velocity.y * velScale,
        arrowSize
      );
    }

    // // Draw current path (only for hunting and investigating states)
    // if (
    //   this.currentPath.length > 0 &&
    //   (lightSource.state === "hunting" || lightSource.state === "investigating")
    // ) {
    //   stroke(0, 255, 0, 150);
    //   strokeWeight(3);
    //   noFill();
    //   beginShape();
    //   vertex(lightSource.x, lightSource.y);
    //   for (let point of this.currentPath) {
    //     vertex(point.x, point.y);
    //   }
    //   endShape();

    //   // Number the waypoints
    //   fill(0, 255, 0, 200);
    //   textAlign(CENTER, CENTER);
    //   textSize(12);
    //   for (let i = 0; i < this.currentPath.length; i++) {
    //     let point = this.currentPath[i];
    //     noStroke();
    //     ellipse(point.x, point.y, 20, 20);
    //     fill(0);
    //     text(i, point.x, point.y);
    //     fill(0, 255, 0, 200);
    //   }
    //   textAlign(LEFT); // Reset alignment
    // }

    // Draw current target waypoint with special highlighting (only for active pathfinding states)
    if (
      this.pathIndex < this.currentPath.length &&
      (lightSource.state === "hunting" || lightSource.state === "investigating")
    ) {
      let target = this.currentPath[this.pathIndex];
      stroke(255, 255, 0, 255);
      strokeWeight(3);
      noFill();
      ellipse(target.x, target.y, 30, 30);

      // Draw line to current target
      stroke(255, 255, 0, 150);
      strokeWeight(2);
      line(lightSource.x, lightSource.y, target.x, target.y);
    }

    // Draw meander target if in searching state
    if (lightSource.state === "searching" && this.meanderTarget) {
      stroke(100, 150, 255, 200);
      strokeWeight(3);
      noFill();
      ellipse(this.meanderTarget.x, this.meanderTarget.y, 25, 25);

      // Draw line to meander target
      stroke(100, 150, 255, 100);
      strokeWeight(2);
      line(
        lightSource.x,
        lightSource.y,
        this.meanderTarget.x,
        this.meanderTarget.y
      );

      // Label it
      fill(100, 150, 255, 255);
      textAlign(CENTER, CENTER);
      textSize(10);
      text("SEARCH", this.meanderTarget.x, this.meanderTarget.y - 20);
      textAlign(LEFT);
    }

    // Draw all possible waypoints
    // if (this.allWaypoints.length > 0) {
    //   fill(150, 150, 255, 120);
    //   noStroke();
    //   for (let i = 0; i < this.allWaypoints.length; i++) {
    //     let waypoint = this.allWaypoints[i];
    //     ellipse(waypoint.x, waypoint.y, 12, 12);

    //     // Label waypoints with numbers
    //     fill(255, 255, 255, 200);
    //     textAlign(CENTER, CENTER);
    //     textSize(8);
    //     text(i, waypoint.x, waypoint.y);
    //     fill(150, 150, 255, 120);
    //   }
    //   textAlign(LEFT); // Reset alignment
    // }

    // Draw waypoint connections (if we have them)
    // if (this.waypointConnections.length > 0) {
    //   stroke(100, 100, 200, 80);
    //   strokeWeight(1);
    //   for (let connection of this.waypointConnections) {
    //     line(
    //       connection.from.x,
    //       connection.from.y,
    //       connection.to.x,
    //       connection.to.y
    //     );
    //   }
    // }

    // Draw last known blob position if investigating
    if (
      lightSource.state === "investigating" &&
      lightSource.lastKnownBlobPosition
    ) {
      stroke(255, 200, 100, 200);
      strokeWeight(3);
      noFill();
      ellipse(
        lightSource.lastKnownBlobPosition.x,
        lightSource.lastKnownBlobPosition.y,
        30,
        30
      );

      // Draw question mark
      fill(255, 200, 100, 255);
      textAlign(CENTER, CENTER);
      textSize(16);
      text(
        "?",
        lightSource.lastKnownBlobPosition.x,
        lightSource.lastKnownBlobPosition.y
      );
      textAlign(LEFT);

      // Draw investigation predicted target if available
      if (this.investigationPredictedTarget) {
        stroke(255, 150, 0, 200);
        strokeWeight(2);
        noFill();
        ellipse(
          this.investigationPredictedTarget.x,
          this.investigationPredictedTarget.y,
          25,
          25
        );

        // Draw arrow from last known position to predicted target
        stroke(255, 150, 0, 150);
        strokeWeight(2);
        line(
          lightSource.lastKnownBlobPosition.x,
          lightSource.lastKnownBlobPosition.y,
          this.investigationPredictedTarget.x,
          this.investigationPredictedTarget.y
        );

        // Label it based on alarm status
        fill(255, 150, 0, 255);
        textAlign(CENTER, CENTER);
        textSize(10);
        let label = this.isRespondingToAlarm ? "ALARM!" : "PREDICT";
        text(
          label,
          this.investigationPredictedTarget.x,
          this.investigationPredictedTarget.y - 20
        );
        textAlign(LEFT);
      }
    }

    // Draw alarm sweep visualization
    if (this.isAlarmSweeping && this.alarmSweepLocation) {
      // Draw sweep center
      stroke(255, 0, 0, 200);
      strokeWeight(3);
      noFill();
      ellipse(this.alarmSweepLocation.x, this.alarmSweepLocation.y, 40, 40);

      // Draw sweep arc to show current position
      let sweepRadius = 50;
      let startAngle = radians(this.alarmSweepStartAngle);
      let currentAngle = radians(this.alarmSweepCurrentAngle);

      stroke(255, 100, 100, 150);
      strokeWeight(2);
      noFill();
      arc(
        this.alarmSweepLocation.x,
        this.alarmSweepLocation.y,
        sweepRadius * 2,
        sweepRadius * 2,
        startAngle,
        currentAngle
      );

      // Draw current sweep direction line
      stroke(255, 0, 0, 255);
      strokeWeight(3);
      line(
        this.alarmSweepLocation.x,
        this.alarmSweepLocation.y,
        this.alarmSweepLocation.x + cos(currentAngle) * sweepRadius,
        this.alarmSweepLocation.y + sin(currentAngle) * sweepRadius
      );

      // Label
      fill(255, 0, 0, 255);
      textAlign(CENTER, CENTER);
      textSize(12);
      text("SWEEP", this.alarmSweepLocation.x, this.alarmSweepLocation.y - 30);
      textAlign(LEFT);
    }

    // Debug text overlay
    if (!this.showDebugText) return;
    fill(0, 0, 0, 150);
    noStroke();
    rect(lightSource.x + 15, lightSource.y - 40, 120, 35);

    fill(255);
    textSize(10);
    textAlign(LEFT);
    // Show reaction state if active
    if (this.isRespondingToAlarm) {
      let alarmProgress = Math.round(
        ((this.frameCounter - this.alarmResponseStartTime) /
          this.alarmResponseDuration) *
          100
      );

      if (this.isAlarmSweeping) {
        let sweepProgress = Math.round(
          (Math.abs(this.alarmSweepCurrentAngle - this.alarmSweepStartAngle) /
            360) *
            100
        );
        text(
          `State: ${lightSource.state} [SWEEP ${sweepProgress}%]`,
          lightSource.x + 18,
          lightSource.y - 40
        );
      } else if (this.hasReachedAlarmLocation) {
        text(
          `State: ${lightSource.state} [AT ALARM]`,
          lightSource.x + 18,
          lightSource.y - 40
        );
      } else {
        text(
          `State: ${lightSource.state} [ALARM ${alarmProgress}%]`,
          lightSource.x + 18,
          lightSource.y - 40
        );
      }
    } else if (lightSource.isReacting) {
      let reactionProgress = Math.round(
        (lightSource.reactionTimer / lightSource.reactionTimeNeeded) * 100
      );
      text(
        `State: ${lightSource.state} → ${lightSource.targetState} (${reactionProgress}%)`,
        lightSource.x + 18,
        lightSource.y - 40
      );
    } else {
      text(
        `State: ${lightSource.state}`,
        lightSource.x + 18,
        lightSource.y - 40
      );
    }

    text(
      `Path: ${this.currentPath.length}/${this.pathIndex}`,
      lightSource.x + 18,
      lightSource.y - 25
    );
    text(`Stuck: ${this.stuckCounter}`, lightSource.x + 18, lightSource.y - 10);

    // Show reaction timing info
    if (lightSource.isReacting) {
      fill(255, 255, 0, 200);
      text(
        `Reaction: ${lightSource.reactionTimer}/${Math.round(
          lightSource.reactionTimeNeeded
        )}`,
        lightSource.x + 18,
        lightSource.y + 5
      );
      fill(255, 255, 255, 200); // Reset to white
    }
  }

  // Reset all AI state to initial values
  reset() {
    // Reset counters and timers
    this.frameCounter = 0;
    this.stuckCounter = 0;
    this.strafeTimer = 0;
    this.meanderTimer = 0;

    // Reset pathfinding
    this.currentPath = [];
    this.pathIndex = 0;
    this.allWaypoints = [];
    this.waypointConnections = [];

    // Reset position tracking
    this.lastPosition = { x: 0, y: 0 };
    this.lastMovementDirection = createVector(0, 1);

    // Reset movement vectors
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.targetDirection = createVector(0, 0);

    // Reset blob tracking
    this.lastBlobPosition = null;
    this.blobVelocity = createVector(0, 0);
    this.predictedTarget = null;
    this.lastKnownBlobVelocity = createVector(0, 0);
    this.investigationPredictedTarget = null;

    // Reset meandering
    this.meanderTarget = null;

    // Reset alarm system
    this.isRespondingToAlarm = false;
    this.alarmResponseStartTime = 0;
    this.currentAlarmPosition = null;
    this.isAlarmSweeping = false;
    this.alarmSweepStartAngle = 0;
    this.alarmSweepCurrentAngle = 0;
    this.alarmSweepLocation = null;
    this.hasReachedAlarmLocation = false;

    // Reset state tracking
    this.previousState = "searching";

    console.log("Light AI: Reset all state to initial values");
  }
}
