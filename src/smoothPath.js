import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

export class SmoothPath {
  constructor(points) {
    this.points = points; // Extract the positions from pointTargets
    this.times = points.map(point => point.time); // Extract the times from pointTargets
    this.smoothedPath = this.createSmoothedPath(this.points); // Call the method within the class
    this.arcLengths = this.computeArcLengths(this.smoothedPath);
  }

  getDivisions(numberOfDivisions) {
    return dividePathEvenly(this.smoothedPath, this.arcLengths, numberOfDivisions);
  }

  getLineGeometry(color = new THREE.Color(0x0000ff)) {
    return this.createLineGeometry(this.smoothedPath, color);
  }

  createSmoothedPath(points) {
    const tangents = [];
    const controlPoints = [];

    // Compute the tangents between the points
    for (let i = 0; i < points.length; i++) {
      let tangent;
      if (i === 0) {
        tangent = new THREE.Vector3().subVectors(points[i + 1].data.pos, points[i].data.pos);
      } else if (i === points.length - 1) {
        tangent = new THREE.Vector3().subVectors(points[i].data.pos, points[i - 1].data.pos);
      } else {
        tangent = new THREE.Vector3().subVectors(points[i + 1].data.pos, points[i - 1].data.pos).multiplyScalar(0.5);
      }
      tangents.push(tangent);
    }

    // Now use CubicHermiteSpline to interpolate between points
    for (let i = 0; i < points.length - 1; i++) {
      const startPoint = points[i].data.pos;
      const endPoint = points[i + 1].data.pos;
      const tangentStart = tangents[i];
      const tangentEnd = tangents[i + 1];

      // Generate several points along the segment
      const segmentPoints = [];
      const divisions = 20; // Number of divisions between points
      for (let j = 0; j <= divisions; j++) {
        const t = j / divisions;
        const point = new THREE.Vector3().copy(startPoint)
          .multiplyScalar((2 * t**3 - 3 * t**2 + 1))
          .add(new THREE.Vector3().copy(endPoint)
            .multiplyScalar((-2 * t**3 + 3 * t**2)))
          .add(new THREE.Vector3().copy(tangentStart)
            .multiplyScalar((t**3 - 2 * t**2 + t)))
          .add(new THREE.Vector3().copy(tangentEnd)
            .multiplyScalar((t**3 - t**2)));
        
        segmentPoints.push(point);
      }
      controlPoints.push(...segmentPoints);
    }

    return controlPoints;
  }

  computeArcLengths(pathPoints) {
    const arcLengths = [0];

    for (let i = 1; i < pathPoints.length; i++) {
      const segmentLength = pathPoints[i].distanceTo(pathPoints[i - 1]);
      arcLengths.push(arcLengths[i - 1] + segmentLength);
    }

    return arcLengths;
  }

  dividePathEvenly(pathPoints, arcLengths, numberOfDivisions) {
    const totalLength = arcLengths[arcLengths.length - 1];
    const divisions = [];

    for (let i = 0; i <= numberOfDivisions; i++) {
      const targetLength = (i / numberOfDivisions) * totalLength;

      // Find the corresponding segment and interpolate within it
      let j = 0;
      while (arcLengths[j] < targetLength && j < arcLengths.length - 1) {
        j++;
      }

      const segmentStart = pathPoints[j - 1];
      const segmentEnd = pathPoints[j];
      const segmentLength = arcLengths[j] - arcLengths[j - 1];

      const t = (targetLength - arcLengths[j - 1]) / segmentLength;
      const interpolatedPoint = new THREE.Vector3().lerpVectors(segmentStart, segmentEnd, t);
      divisions.push(interpolatedPoint);
    }

    return divisions;
  }

  Get(time, easingFunction = TWEEN.Easing.Linear.None) {
    const t = easingFunction(time);
    const totalLength = this.arcLengths[this.arcLengths.length - 1];
    const targetLength = t * totalLength;

    // Find the corresponding segment and interpolate within it
    let j = 1;
    while (this.arcLengths[j] < targetLength && j < this.arcLengths.length - 1) {
      j++;
    }

    const segmentStart = this.smoothedPath[j - 1];
    const segmentEnd = this.smoothedPath[j];
    const segmentLength = this.arcLengths[j] - this.arcLengths[j - 1];

    const tSegment = (targetLength - this.arcLengths[j - 1]) / segmentLength;
    return new THREE.Vector3().lerpVectors(segmentStart, segmentEnd, tSegment);
  }

  // Function to create line geometry for debugging
  createLineGeometry(points, color) {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: color });
    const line = new THREE.Line(geometry, material);
    return line;
  }
}
