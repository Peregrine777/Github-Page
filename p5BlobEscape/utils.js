/**
 * @fileoverview Utility functions for the p5.js Blob Escape game
 * @author Your Name
 * @version 1.0.0
 */

/**
 * Generates a random RGB color array
 * @returns {number[]} Array of three integers [r, g, b] where each value is 0-255
 * @example
 * const color = getRandomColor(); // [123, 45, 200]
 */
export function getRandomColor() {
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
}

/**
 * Calculates the Euclidean distance between two points
 * @param {number} x1 - X coordinate of first point
 * @param {number} y1 - Y coordinate of first point
 * @param {number} x2 - X coordinate of second point
 * @param {number} y2 - Y coordinate of second point
 * @returns {number} The distance between the two points
 * @throws {TypeError} If any parameter is not a number
 * @example
 * const distance = calculateDistance(0, 0, 3, 4); // Returns 5
 */
export function calculateDistance(x1, y1, x2, y2) {
  // Input validation
  if (
    typeof x1 !== "number" ||
    typeof y1 !== "number" ||
    typeof x2 !== "number" ||
    typeof y2 !== "number"
  ) {
    throw new TypeError("All parameters must be numbers");
  }

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Maps a value from one range to another range
 * @param {number} value - The value to map
 * @param {number} start1 - Lower bound of the source range
 * @param {number} stop1 - Upper bound of the source range
 * @param {number} start2 - Lower bound of the target range
 * @param {number} stop2 - Upper bound of the target range
 * @returns {number} The mapped value in the target range
 * @throws {TypeError} If any parameter is not a number
 * @throws {RangeError} If source range is zero (start1 === stop1)
 * @example
 * const mapped = mapValue(5, 0, 10, 0, 100); // Returns 50
 */
export function mapValue(value, start1, stop1, start2, stop2) {
  // Input validation
  const params = [value, start1, stop1, start2, stop2];
  if (!params.every((param) => typeof param === "number")) {
    throw new TypeError("All parameters must be numbers");
  }

  // Prevent division by zero
  if (start1 === stop1) {
    throw new RangeError(
      "Source range cannot be zero (start1 cannot equal stop1)"
    );
  }

  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

/**
 * Checks if a line segment intersects with a rectangle
 * @param {Object} start - Starting point of the line with x, y properties
 * @param {Object} end - Ending point of the line with x, y properties
 * @param {Object} rect - Rectangle object with x, y, width, height properties
 * @returns {boolean} True if line intersects rectangle, false otherwise
 * @throws {TypeError} If parameters don't have required properties
 * @example
 * const intersects = lineIntersectsRect(
 *   {x: 0, y: 0},
 *   {x: 10, y: 10},
 *   {x: 5, y: 5, width: 10, height: 10}
 * ); // Returns true
 */
export function lineIntersectsRect(start, end, rect) {
  // Input validation
  if (!start || typeof start.x !== "number" || typeof start.y !== "number") {
    throw new TypeError(
      "start must be an object with numeric x and y properties"
    );
  }
  if (!end || typeof end.x !== "number" || typeof end.y !== "number") {
    throw new TypeError(
      "end must be an object with numeric x and y properties"
    );
  }
  if (
    !rect ||
    typeof rect.x !== "number" ||
    typeof rect.y !== "number" ||
    typeof rect.width !== "number" ||
    typeof rect.height !== "number"
  ) {
    throw new TypeError(
      "rect must be an object with numeric x, y, width, and height properties"
    );
  }

  return lineRectangleIntersection(start, end, rect);
}

/**
 * Tests intersection between a line segment and a rectangle
 * @private
 * @param {Object} start - Starting point of the line with x, y properties
 * @param {Object} end - Ending point of the line with x, y properties
 * @param {Object} rect - Rectangle object with x, y, width, height properties
 * @returns {boolean} True if line intersects rectangle, false otherwise
 */
export function lineRectangleIntersection(start, end, rect) {
  // Check if either endpoint is inside the rectangle
  if (pointInRect(start, rect) || pointInRect(end, rect)) {
    return true;
  }

  // Define rectangle edges as line segments
  const edges = [
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
  for (const edge of edges) {
    if (lineIntersection(start, end, edge.start, edge.end)) {
      return true;
    }
  }

  return false;
}

/**
 * Checks if a point is inside a rectangle
 * @param {Object} point - Point with x, y properties
 * @param {Object} rect - Rectangle with x, y, width, height properties
 * @returns {boolean} True if point is inside rectangle, false otherwise
 */
export function pointInRect(point, rect) {
  return (
    point.x >= rect.x &&
    point.x <= rect.x + rect.width &&
    point.y >= rect.y &&
    point.y <= rect.y + rect.height
  );
}

/**
 * Tests intersection between two line segments using parametric equations
 * @param {Object} line1Start - Start point of first line with x, y properties
 * @param {Object} line1End - End point of first line with x, y properties
 * @param {Object} line2Start - Start point of second line with x, y properties
 * @param {Object} line2End - End point of second line with x, y properties
 * @returns {boolean} True if lines intersect, false otherwise
 */
export function lineIntersection(line1Start, line1End, line2Start, line2End) {
  const denom =
    (line2End.y - line2Start.y) * (line1End.x - line1Start.x) -
    (line2End.x - line2Start.x) * (line1End.y - line1Start.y);

  // Lines are parallel
  if (Math.abs(denom) < Number.EPSILON) {
    return false;
  }

  const ua =
    ((line2End.x - line2Start.x) * (line1Start.y - line2Start.y) -
      (line2End.y - line2Start.y) * (line1Start.x - line2Start.x)) /
    denom;
  const ub =
    ((line1End.x - line1Start.x) * (line1Start.y - line2Start.y) -
      (line1End.y - line1Start.y) * (line1Start.x - line2Start.x)) /
    denom;

  // Check if intersection point is within both line segments
  return ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1;
}

/**
 * Calculates the intersection point between two line segments
 * @param {Object} line1Start - Start point of first line with x, y properties
 * @param {Object} line1End - End point of first line with x, y properties
 * @param {Object} line2Start - Start point of second line with x, y properties
 * @param {Object} line2End - End point of second line with x, y properties
 * @returns {Object|null} Intersection point with x, y properties, or null if no intersection
 * @example
 * const point = getLineIntersectionPoint(
 *   {x: 0, y: 0}, {x: 10, y: 10},
 *   {x: 0, y: 10}, {x: 10, y: 0}
 * ); // Returns {x: 5, y: 5}
 */
export function getLineIntersectionPoint(
  line1Start,
  line1End,
  line2Start,
  line2End
) {
  const denom =
    (line2End.y - line2Start.y) * (line1End.x - line1Start.x) -
    (line2End.x - line2Start.x) * (line1End.y - line1Start.y);

  // Lines are parallel
  if (Math.abs(denom) < Number.EPSILON) {
    return null;
  }

  const ua =
    ((line2End.x - line2Start.x) * (line1Start.y - line2Start.y) -
      (line2End.y - line2Start.y) * (line1Start.x - line2Start.x)) /
    denom;
  const ub =
    ((line1End.x - line1Start.x) * (line1Start.y - line2Start.y) -
      (line1End.y - line1Start.y) * (line1Start.x - line2Start.x)) /
    denom;

  // Check if intersection point is within both line segments
  if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
    return {
      x: line1Start.x + ua * (line1End.x - line1Start.x),
      y: line1Start.y + ua * (line1End.y - line1Start.y),
    };
  }

  return null;
}

/**
 * Clamps a value between a minimum and maximum
 * @param {number} value - The value to clamp
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @returns {number} The clamped value
 * @throws {TypeError} If any parameter is not a number
 * @throws {RangeError} If min is greater than max
 * @example
 * const clamped = clamp(150, 0, 100); // Returns 100
 */
export function clamp(value, min, max) {
  if (
    typeof value !== "number" ||
    typeof min !== "number" ||
    typeof max !== "number"
  ) {
    throw new TypeError("All parameters must be numbers");
  }

  if (min > max) {
    throw new RangeError("min cannot be greater than max");
  }

  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation between two values
 * @param {number} start - Starting value
 * @param {number} end - Ending value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 * @throws {TypeError} If any parameter is not a number
 * @example
 * const lerped = lerp(0, 100, 0.5); // Returns 50
 */
export function lerp(start, end, t) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    typeof t !== "number"
  ) {
    throw new TypeError("All parameters must be numbers");
  }

  return start + (end - start) * t;
}

/**
 * Converts degrees to radians
 * @param {number} degrees - Angle in degrees
 * @returns {number} Angle in radians
 * @throws {TypeError} If degrees is not a number
 * @example
 * const radians = degreesToRadians(180); // Returns Math.PI
 */
export function degreesToRadians(degrees) {
  if (typeof degrees !== "number") {
    throw new TypeError("degrees must be a number");
  }

  return degrees * (Math.PI / 180);
}

/**
 * Converts radians to degrees
 * @param {number} radians - Angle in radians
 * @returns {number} Angle in degrees
 * @throws {TypeError} If radians is not a number
 * @example
 * const degrees = radiansToDegrees(Math.PI); // Returns 180
 */
export function radiansToDegrees(radians) {
  if (typeof radians !== "number") {
    throw new TypeError("radians must be a number");
  }

  return radians * (180 / Math.PI);
}
