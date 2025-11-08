import {
  calculateDistance,
  mapValue,
  lineIntersectsRect,
  pointInRect,
  lineIntersection,
  getLineIntersectionPoint,
  clamp,
  lerp,
  degreesToRadians,
  radiansToDegrees,
} from "./utils.js";

export class LightSource {
  constructor(x, y, lightColor) {
    this.x = x;
    this.y = y;
    this.lastX = x;
    this.lastY = y;
    this.movementDirection = 0; // Direction of movement in degrees
    this.cone = 35; // in degrees
    this.bearing = 0; // in degrees
    this.range = 500; // Increased visible range for more aggressive hunting
    this.lightColor = lightColor; // Avoid naming conflict with p5.js color() function
    this.rays = 120; // Number of rays to cast for shadow detection

    // Hunting behavior properties
    this.state = "searching"; // "searching", "hunting", "investigating"
    this.searchCone = 70; // Wide cone when searching
    this.huntCone = 20; // Narrow cone when hunting
    this.searchColor = null; // Blue light when searching
    this.huntColor = null; // Red light when hunting
    this.sweepDirection = 1; // Direction of search sweep
    this.sweepSpeed = 0.5; // How fast to sweep
    this.lastKnownBlobPosition = null;
    this.investigationTimer = 0;
    this.maxInvestigationTime = 120; // frames

    // Reaction time system
    this.reactionTimer = 0;
    this.reactionTimeNeeded = 0;
    this.isReacting = false;
    this.targetState = null; // State we're transitioning to
    this.minReactionTime = 1; // Minimum frames when very close
    this.maxReactionTime = 30; // Maximum frames when far away
    this.maxReactionDistance = 600; // Distance at which max reaction time applies
  }

  // Update movement direction tracking
  updateMovementDirection() {
    let dx = this.x - this.lastX;
    let dy = this.y - this.lastY;

    if (dx !== 0 || dy !== 0) {
      this.movementDirection = radiansToDegrees(atan2(dy, dx));
    }

    this.lastX = this.x;
    this.lastY = this.y;
  }

  // Update light behavior based on blob visibility
  updateBehavior(blob, blockers) {
    // Update movement direction first
    this.updateMovementDirection();

    // Skip behavior updates if responding to alarm
    if (this.isRespondingToAlarm) {
      console.log(
        "LightSource: Skipping behavior update - responding to alarm"
      );
      return;
    }

    if (!blob || blob.isDead) {
      this.state = "searching";
      this.isReacting = false;
      this.reactionTimer = 0;
      return;
    }

    // Check if blob is visible
    let blobVisible = this.canSeeBlob(blob, blockers);

    // Handle reaction timing
    this.updateReactionTiming(blob, blobVisible);

    switch (this.state) {
      case "searching":
        this.searchBehavior();
        if (blobVisible && !this.isReacting) {
          this.startReaction(blob, "investigating"); // Always go to investigating first
        }
        break;

      case "hunting":
        if (blobVisible) {
          this.huntBehavior(blob);
          this.lastKnownBlobPosition = blob.center.copy();
        } else {
          // Lost sight of blob, go investigate last known position
          this.state = "investigating";
          this.investigationTimer = 0;
          this.isReacting = false;
          this.reactionTimer = 0;
        }
        break;

      case "investigating":
        this.investigateBehavior();
        if (blobVisible && !this.isReacting) {
          // Calculate distance for hunting reaction time
          let distance = p5.Vector.dist(
            createVector(this.x, this.y),
            blob.center
          );
          if (distance < 100) {
            // Very close - instant hunting
            this.state = "hunting";
            this.lastKnownBlobPosition = blob.center.copy();
          } else {
            // Far away - delayed hunting reaction
            this.startReaction(blob, "hunting");
          }
        } else if (
          !blobVisible &&
          this.investigationTimer > this.maxInvestigationTime
        ) {
          this.state = "searching";
          this.isReacting = false;
          this.reactionTimer = 0;
        }
        break;
    }
  }

  // Searching behavior - sweep in direction of movemenwt
  searchBehavior() {
    this.cone = this.searchCone;

    // Base the search direction on movement direction
    let baseDirection = this.movementDirection;

    // Add sweeping motion around the movement direction
    let sweepOffset = sin(frameCount * 0.05) * 30; // Sweep 30 degrees each way
    this.bearing = baseDirection + sweepOffset;
  }

  // Start a reaction sequence based on distance to blob
  startReaction(blob, targetState) {
    if (this.isReacting) return; // Already reacting

    let distance = calculateDistance(
      this.x,
      this.y,
      blob.center.x,
      blob.center.y
    );

    // Calculate reaction time based on distance
    // Closer = faster reaction, farther = slower reaction
    let distanceRatio = clamp(distance / this.maxReactionDistance, 0, 1);
    this.reactionTimeNeeded = lerp(
      this.minReactionTime,
      this.maxReactionTime,
      distanceRatio
    );

    // Special cases for different transitions
    if (this.state === "searching" && targetState === "investigating") {
      // Investigating reaction is always fast (recognition)
      this.reactionTimeNeeded = lerp(5, 30, distanceRatio);
    } else if (targetState === "hunting") {
      // Hunting reaction varies more with distance (threat assessment)
      this.reactionTimeNeeded = lerp(
        this.minReactionTime,
        this.maxReactionTime,
        distanceRatio
      );
    }

    this.isReacting = true;
    this.reactionTimer = 0;
    this.targetState = targetState;

    console.log(
      `Light starting reaction: ${
        this.state
      } -> ${targetState}, distance: ${Math.round(
        distance
      )}, reaction time: ${Math.round(this.reactionTimeNeeded)} frames`
    );
  }

  // Get color for current state (helper for reaction visualization)
  getCurrentStateColor() {
    switch (this.state) {
      case "searching":
        return color(100, 150, 255, 80);
      case "hunting":
        return color(255, 100, 100, 100);
      case "investigating":
        return color(255, 200, 100, 90);
      default:
        return color(255, 240, 200, 80);
    }
  }

  // Update reaction timing system
  updateReactionTiming(blob, blobVisible) {
    if (!this.isReacting) return;

    this.reactionTimer++;

    // If blob is no longer visible, cancel reaction
    if (!blobVisible) {
      this.isReacting = false;
      this.reactionTimer = 0;
      this.targetState = null;
      return;
    }

    // If reaction time is complete, transition to target state
    if (this.reactionTimer >= this.reactionTimeNeeded) {
      this.state = this.targetState;
      if (
        this.targetState === "hunting" ||
        this.targetState === "investigating"
      ) {
        this.lastKnownBlobPosition = blob.center.copy();
      }

      console.log(`Light reaction complete: now ${this.state}`);

      // Reset reaction system
      this.isReacting = false;
      this.reactionTimer = 0;
      this.targetState = null;
    }
  }

  // Hunting behavior - narrow beam, point at blob
  huntBehavior(blob) {
    this.cone = this.huntCone;

    // Point directly at blob
    let dx = blob.center.x - this.x;
    let dy = blob.center.y - this.y;
    this.bearing = radiansToDegrees(atan2(dy, dx));
  }

  // Investigation behavior - search around last known position
  investigateBehavior() {
    this.cone = this.searchCone;
    this.investigationTimer++;

    if (this.lastKnownBlobPosition) {
      // Point towards last known position with some sweeping
      let dx = this.lastKnownBlobPosition.x - this.x;
      let dy = this.lastKnownBlobPosition.y - this.y;
      let baseAngle = radiansToDegrees(atan2(dy, dx));

      // Add sweeping motion around the target area
      let sweep = sin(this.investigationTimer * 0.1) * 30;
      this.bearing = baseAngle + sweep;
    }
  }

  // Check if blob is visible in light cone (DEPRECATED - use AiVision instead)
  canSeeBlob(blob, blockers) {
    if (!blob || blob.isDead || !blob.center) return false;

    // Check if blob center is in light cone and not blocked
    return this.isPointInLight(blob.center, blockers);
  }

  // Check if a point is within the light cone and not blocked
  isPointInLight(point, blockers) {
    // Safety check
    if (
      !point ||
      typeof point.x === "undefined" ||
      typeof point.y === "undefined"
    ) {
      console.warn("LightSource.isPointInLight: Invalid point object", point);
      return false;
    }

    // Calculate angle from light to point
    let dx = point.x - this.x;
    let dy = point.y - this.y;
    let angleToPoint = radiansToDegrees(atan2(dy, dx));

    // Normalize angles
    let angleDiff = angleToPoint - this.bearing;

    // Handle angle wrapping
    while (angleDiff > 180) angleDiff -= 360;
    while (angleDiff < -180) angleDiff += 360;

    // Check if point is within light cone
    let halfCone = this.cone / 2;
    if (abs(angleDiff) > halfCone) return false;

    // Check if point is within range
    let distance = sqrt(dx * dx + dy * dy);
    if (distance > this.range) return false;

    // Check if light ray to point is blocked by obstacles
    let rayStart = createVector(this.x, this.y);
    let rayEnd = createVector(point.x, point.y);

    for (let blocker of blockers) {
      if (lineIntersectsRect(rayStart, rayEnd, blocker)) {
        return false; // Blocked by obstacle
      }
    }

    return true; // Point is in light and not blocked
  }

  // Use utils functions for geometry calculations (keeping these for backwards compatibility)
  lineIntersectsRect(start, end, rect) {
    return lineIntersectsRect(start, end, rect);
  }

  pointInRect(point, rect) {
    return pointInRect(point, rect);
  }

  // draw light wedge with shadow casting
  draw(blockers = []) {
    // Debug: log light state occasionally
    if (frameCount % 60 === 0) {
      console.log(
        `Light state: ${this.state}, position: (${this.x}, ${this.y}), bearing: ${this.bearing}`
      );
    }

    noStroke();

    // Choose color based on state and reaction status
    let lightColor;
    let baseState = this.isReacting ? this.targetState : this.state;

    switch (baseState) {
      case "searching":
        lightColor = color(255, 255, 255, 80); // Blue light - more visible
        break;
      case "hunting":
        lightColor = color(255, 100, 100, 100); // Red light - more visible
        break;
      case "investigating":
        lightColor = color(255, 200, 100, 90); // Yellow light - more visible
        break;
      default:
        lightColor = color(255, 240, 200, 80);
    }

    // Modify color during reaction with flickering effect
    if (this.isReacting) {
      let flickerIntensity = sin(frameCount * 0.5) * 0.3 + 0.7; // Flicker between 0.4 and 1.0
      let reactionProgress = this.reactionTimer / this.reactionTimeNeeded;
      let intensity = flickerIntensity * (0.5 + reactionProgress * 0.5);

      // Mix current state color with target state color based on progress
      let currentColor = this.getCurrentStateColor();
      lightColor = lerpColor(currentColor, lightColor, reactionProgress);
      lightColor = color(
        red(lightColor) * intensity,
        green(lightColor) * intensity,
        blue(lightColor) * intensity,
        alpha(lightColor)
      );
    }

    fill(lightColor);

    // Cast rays and create light polygon
    let points = [createVector(this.x, this.y)]; // Start with light source position

    for (let i = 0; i <= this.rays; i++) {
      let angle = this.bearing + -this.cone / 2 + (i / this.rays) * this.cone;
      let rayEnd = this.castRay(angle, blockers);
      points.push(rayEnd);
    }

    // Draw the light polygon
    beginShape();
    for (let point of points) {
      vertex(point.x, point.y);
    }
    endShape(CLOSE);

    // Add a visible border to make light cone more obvious
    stroke(255, 255, 255, 100);
    strokeWeight(1);
    noFill();
    beginShape();
    for (let point of points) {
      vertex(point.x, point.y);
    }
    endShape(CLOSE);
  }

  // Cast a single ray and return where it hits (either a blocker or max range)
  castRay(angleDegrees, blockers) {
    let rayDir = createVector(
      cos(radians(angleDegrees)),
      sin(radians(angleDegrees))
    );

    let rayStart = createVector(this.x, this.y);
    let rayEnd = createVector(
      this.x + rayDir.x * this.range,
      this.y + rayDir.y * this.range
    );

    let closestHit = rayEnd;
    let closestDistance = this.range;

    // Check intersection with each blocker
    for (let blocker of blockers) {
      let hit = this.rayRectangleIntersection(rayStart, rayEnd, blocker);
      if (hit) {
        let distance = calculateDistance(rayStart.x, rayStart.y, hit.x, hit.y);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestHit = hit;
        }
      }
    }

    return closestHit;
  }

  // Check if a ray intersects with a rectangle
  rayRectangleIntersection(rayStart, rayEnd, rect) {
    let closestIntersection = null;
    let closestDistance = Infinity;

    // Get rectangle edges
    let edges = [
      // Top edge
      {
        start: createVector(rect.x, rect.y),
        end: createVector(rect.x + rect.width, rect.y),
      },
      // Right edge
      {
        start: createVector(rect.x + rect.width, rect.y),
        end: createVector(rect.x + rect.width, rect.y + rect.height),
      },
      // Bottom edge
      {
        start: createVector(rect.x + rect.width, rect.y + rect.height),
        end: createVector(rect.x, rect.y + rect.height),
      },
      // Left edge
      {
        start: createVector(rect.x, rect.y + rect.height),
        end: createVector(rect.x, rect.y),
      },
    ];

    // Check intersection with each edge
    for (let edge of edges) {
      let intersection = getLineIntersectionPoint(
        rayStart,
        rayEnd,
        edge.start,
        edge.end
      );
      if (intersection) {
        let distance = calculateDistance(
          rayStart.x,
          rayStart.y,
          intersection.x,
          intersection.y
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIntersection = intersection;
        }
      }
    }

    return closestIntersection;
  }

  // Use utils function for line intersection
  lineIntersection(p1, p2, p3, p4) {
    return lineIntersection(p1, p2, p3, p4);
  }
}
