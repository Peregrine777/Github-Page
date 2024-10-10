import * as THREE from 'three';
import { spline } from './spline.js';
import { SmoothPath } from './smoothPath.js';
import TWEEN from '@tweenjs/tween.js'; // Ensure you import TWEEN.js

export const camera_track = (function() {

  class _CameraTrack {
    constructor(params) {
      this._params = params;
      this._currentTime = 0.0;
      this._totalTime = params.points[params.points.length - 1].time;

      // Lerp function for Cubic Hermite with separate easing for position and rotation
      const cubicLerp = (t, p0, p1, p2, p3, posEasing, rotEasing) => {
        // Apply position easing
        const easedPosT = posEasing(t);
        const p = new THREE.Vector3().lerpVectors(p1.pos, p2.pos, easedPosT);

        // Apply rotation easing
        const easedRotT = rotEasing(t);
        const q = p1.rot.clone().slerp(p2.rot, easedRotT);

        return { pos: p, rot: q };
      };

      // Create the spline using the cubic Hermite interpolation
      this._spline = new spline.CubicHermiteSpline(cubicLerp);
      this._smoothPath = new SmoothPath(params.points);

        //Discard
        for (let p of params.points) {
        // Pass position and rotation easing functions (or defaults) for each point
        this._spline.AddPoint(
            p.time, 
            p.data, 
            p.posEasing || TWEEN.Easing.Linear.None,  // Default to linear if undefined
            p.rotEasing || TWEEN.Easing.Quadratic.InOut   // Default to linear if undefined
        );
        }
    }

    Update(timeInSeconds) {
      this._currentTime += timeInSeconds;
      this._t = this._currentTime / this._totalTime;
      if (this._t > 1.0) {
        return;
      }

      // Get the result (position and rotation) from the spline
      const r = this._spline.Get(this._currentTime);
      const _p = this._smoothPath.Get(this._t);

      // Update camera position and rotation
      this._params.camera.position.copy(_p);
      this._params.camera.quaternion.copy(r.rot);
    }
  }

  return {
    CameraTrack: _CameraTrack,
  };
})();
