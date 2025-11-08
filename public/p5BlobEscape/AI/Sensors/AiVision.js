/**
 * @fileoverview AI Vision system for detecting and tracking targets
 * @author Samuel McKenzie-Sell
 * @version 1.0.0
 */

import {
  calculateDistance,
  lineIntersectsRect,
  pointInRect,
  lineIntersection,
  clamp,
  radiansToDegrees,
  degreesToRadians,
} from "../../p5BlobEscape/utils.js";

/**
 * AI Vision system handles all line-of-sight, visibility, and detection logic
 */
export class AiVision {
  constructor() {
    // Vision parameters
    this.defaultRange = 500;
    this.defaultCone = 60; // degrees
    this.raycastPrecision = 0.1; // Smaller = more precise but slower

    // Debug settings
    this.debugMode = false;
    this.debugDraws = [];
  }

  /**
   * Check if a blob is visible to a light source
   * @param {Object} lightSource - Light source object with x, y, bearing, cone, range properties
   * @param {Object} blob - Blob object with center property
   * @param {Array} blockers - Array of obstacle rectangles
   * @returns {boolean} True if blob is visible, false otherwise
   */
  canSeeBlob(lightSource, blob, blockers = []) {
    if (!blob || blob.isDead || !blob.center) {
      return false;
    }

    if (
      !lightSource ||
      typeof lightSource.x !== "number" ||
      typeof lightSource.y !== "number"
    ) {
      console.warn("AiVision.canSeeBlob: Invalid light source object");
      return false;
    }

    // Check if blob center is in light cone and not blocked
    return this.isPointInVision(
      lightSource.x,
      lightSource.y,
      lightSource.bearing || 0,
      lightSource.cone || this.defaultCone,
      lightSource.range || this.defaultRange,
      blob.center,
      blockers
    );
  }

  /**
   * Check if a point is within the vision cone and not blocked by obstacles
   * @param {number} sourceX - X position of the vision source
   * @param {number} sourceY - Y position of the vision source
   * @param {number} bearing - Direction the vision is pointing (degrees)
   * @param {number} cone - Vision cone angle (degrees)
   * @param {number} range - Maximum vision distance
   * @param {Object} point - Point to check with x, y properties
   * @param {Array} blockers - Array of obstacle rectangles
   * @returns {boolean} True if point is visible, false otherwise
   */
  isPointInVision(
    sourceX,
    sourceY,
    bearing,
    cone,
    range,
    point,
    blockers = []
  ) {
    // Safety check for point
    if (!point || typeof point.x !== "number" || typeof point.y !== "number") {
      if (this.debugMode) {
        console.warn("AiVision.isPointInVision: Invalid point object", point);
      }
      return false;
    }

    // Calculate angle from source to point
    let dx = point.x - sourceX;
    let dy = point.y - sourceY;
    let angleToPoint = radiansToDegrees(atan2(dy, dx));

    // Normalize angle difference
    let angleDiff = this.normalizeAngleDifference(angleToPoint - bearing);

    // Check if point is within vision cone
    let halfCone = cone / 2;
    if (Math.abs(angleDiff) > halfCone) {
      if (this.debugMode) {
        this.debugDraws.push({
          type: "rejected",
          reason: "outside cone",
          point: point,
          angleDiff: angleDiff,
        });
      }
      return false;
    }

    // Check if point is within range
    let distance = calculateDistance(sourceX, sourceY, point.x, point.y);
    if (distance > range) {
      if (this.debugMode) {
        this.debugDraws.push({
          type: "rejected",
          reason: "out of range",
          point: point,
          distance: distance,
        });
      }
      return false;
    }

    // Check line of sight (not blocked by obstacles)
    if (!this.hasLineOfSight(sourceX, sourceY, point.x, point.y, blockers)) {
      if (this.debugMode) {
        this.debugDraws.push({
          type: "rejected",
          reason: "blocked",
          point: point,
        });
      }
      return false;
    }

    if (this.debugMode) {
      this.debugDraws.push({
        type: "visible",
        point: point,
        distance: distance,
        angleDiff: angleDiff,
      });
    }

    return true;
  }

  /**
   * Check if there's a clear line of sight between two points
   * @param {number} x1 - Starting X coordinate
   * @param {number} y1 - Starting Y coordinate
   * @param {number} x2 - Ending X coordinate
   * @param {number} y2 - Ending Y coordinate
   * @param {Array} blockers - Array of obstacle rectangles
   * @returns {boolean} True if line of sight is clear, false if blocked
   */
  hasLineOfSight(x1, y1, x2, y2, blockers = []) {
    let rayStart = createVector(x1, y1);
    let rayEnd = createVector(x2, y2);

    // Check if ray is blocked by any obstacle
    for (let blocker of blockers) {
      if (lineIntersectsRect(rayStart, rayEnd, blocker)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Get all points within vision cone
   * @param {number} sourceX - X position of the vision source
   * @param {number} sourceY - Y position of the vision source
   * @param {number} bearing - Direction the vision is pointing (degrees)
   * @param {number} cone - Vision cone angle (degrees)
   * @param {number} range - Maximum vision distance
   * @param {Array} points - Array of points to check
   * @param {Array} blockers - Array of obstacle rectangles
   * @returns {Array} Array of visible points
   */
  getVisiblePoints(
    sourceX,
    sourceY,
    bearing,
    cone,
    range,
    points,
    blockers = []
  ) {
    let visiblePoints = [];

    for (let point of points) {
      if (
        this.isPointInVision(
          sourceX,
          sourceY,
          bearing,
          cone,
          range,
          point,
          blockers
        )
      ) {
        visiblePoints.push(point);
      }
    }

    return visiblePoints;
  }

  /**
   * Find the closest visible point
   * @param {number} sourceX - X position of the vision source
   * @param {number} sourceY - Y position of the vision source
   * @param {number} bearing - Direction the vision is pointing (degrees)
   * @param {number} cone - Vision cone angle (degrees)
   * @param {number} range - Maximum vision distance
   * @param {Array} points - Array of points to check
   * @param {Array} blockers - Array of obstacle rectangles
   * @returns {Object|null} Closest visible point or null if none found
   */
  getClosestVisiblePoint(
    sourceX,
    sourceY,
    bearing,
    cone,
    range,
    points,
    blockers = []
  ) {
    let closestPoint = null;
    let closestDistance = Infinity;

    for (let point of points) {
      if (
        this.isPointInVision(
          sourceX,
          sourceY,
          bearing,
          cone,
          range,
          point,
          blockers
        )
      ) {
        let distance = calculateDistance(sourceX, sourceY, point.x, point.y);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestPoint = point;
        }
      }
    }

    return closestPoint;
  }

  /**
   * Perform a raycast to find where a ray hits
   * @param {number} sourceX - Starting X coordinate
   * @param {number} sourceY - Starting Y coordinate
   * @param {number} angle - Ray direction in degrees
   * @param {number} maxRange - Maximum ray distance
   * @param {Array} blockers - Array of obstacle rectangles
   * @returns {Object} Hit information {hit: boolean, point: {x, y}, distance: number, blocker: Object}
   */
  raycast(sourceX, sourceY, angle, maxRange, blockers = []) {
    let rayDir = createVector(
      cos(degreesToRadians(angle)),
      sin(degreesToRadians(angle))
    );

    let rayStart = createVector(sourceX, sourceY);
    let rayEnd = createVector(
      sourceX + rayDir.x * maxRange,
      sourceY + rayDir.y * maxRange
    );

    let closestHit = null;
    let closestDistance = maxRange;
    let hitBlocker = null;

    // Check intersection with each blocker
    for (let blocker of blockers) {
      let hit = this.rayRectangleIntersection(rayStart, rayEnd, blocker);
      if (hit) {
        let distance = calculateDistance(sourceX, sourceY, hit.x, hit.y);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestHit = hit;
          hitBlocker = blocker;
        }
      }
    }

    return {
      hit: closestHit !== null,
      point: closestHit || rayEnd,
      distance: closestDistance,
      blocker: hitBlocker,
    };
  }

  /**
   * Calculate ray-rectangle intersection
   * @private
   * @param {Object} rayStart - Ray start point with x, y properties
   * @param {Object} rayEnd - Ray end point with x, y properties
   * @param {Object} rect - Rectangle with x, y, width, height properties
   * @returns {Object|null} Intersection point or null if no intersection
   */
  rayRectangleIntersection(rayStart, rayEnd, rect) {
    let closestIntersection = null;
    let closestDistance = Infinity;

    // Get rectangle edges
    let edges = [
      // Top edge
      {
        start: { x: rect.x, y: rect.y },
        end: { x: rect.x + rect.width, y: rect.y },
      },
      // Right edge
      {
        start: { x: rect.x + rect.width, y: rect.y },
        end: { x: rect.x + rect.width, y: rect.y + rect.height },
      },
      // Bottom edge
      {
        start: { x: rect.x + rect.width, y: rect.y + rect.height },
        end: { x: rect.x, y: rect.y + rect.height },
      },
      // Left edge
      {
        start: { x: rect.x, y: rect.y + rect.height },
        end: { x: rect.x, y: rect.y },
      },
    ];

    // Check intersection with each edge
    for (let edge of edges) {
      let intersection = lineIntersection(
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

  /**
   * Normalize angle difference to [-180, 180] range
   * @private
   * @param {number} angleDiff - Angle difference in degrees
   * @returns {number} Normalized angle difference
   */
  normalizeAngleDifference(angleDiff) {
    while (angleDiff > 180) angleDiff -= 360;
    while (angleDiff < -180) angleDiff += 360;
    return angleDiff;
  }

  /**
   * Enable/disable debug mode
   * @param {boolean} enabled - Whether to enable debug mode
   */
  setDebugMode(enabled) {
    this.debugMode = enabled;
    if (!enabled) {
      this.debugDraws = [];
    }
  }

  /**
   * Draw debug visualizations
   * @param {number} sourceX - Vision source X coordinate
   * @param {number} sourceY - Vision source Y coordinate
   * @param {number} bearing - Vision bearing in degrees
   * @param {number} cone - Vision cone angle in degrees
   * @param {number} range - Vision range
   */
  drawDebugInfo(sourceX, sourceY, bearing, cone, range) {
    if (!this.debugMode) return;

    push();

    // Draw vision cone outline
    stroke(255, 255, 0, 100);
    strokeWeight(1);
    noFill();

    let halfCone = cone / 2;
    let startAngle = degreesToRadians(bearing - halfCone);
    let endAngle = degreesToRadians(bearing + halfCone);

    // Draw cone edges
    let edge1End = createVector(
      sourceX + cos(startAngle) * range,
      sourceY + sin(startAngle) * range
    );
    let edge2End = createVector(
      sourceX + cos(endAngle) * range,
      sourceY + sin(endAngle) * range
    );

    line(sourceX, sourceY, edge1End.x, edge1End.y);
    line(sourceX, sourceY, edge2End.x, edge2End.y);

    // Draw range circle arc
    arc(sourceX, sourceY, range * 2, range * 2, startAngle, endAngle);

    // Draw debug points
    for (let debug of this.debugDraws) {
      if (debug.type === "visible") {
        fill(0, 255, 0, 150);
        noStroke();
        ellipse(debug.point.x, debug.point.y, 8);
      } else if (debug.type === "rejected") {
        fill(255, 0, 0, 100);
        noStroke();
        ellipse(debug.point.x, debug.point.y, 6);
      }
    }

    pop();

    // Clear debug draws after rendering
    this.debugDraws = [];
  }

  /**
   * Get debug information about the vision system
   * @returns {Object} Debug information
   */
  getDebugInfo() {
    return {
      debugMode: this.debugMode,
      defaultRange: this.defaultRange,
      defaultCone: this.defaultCone,
      raycastPrecision: this.raycastPrecision,
      pendingDebugDraws: this.debugDraws.length,
    };
  }
}
