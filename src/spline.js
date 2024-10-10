export const spline = (function() {

    class _CubicHermiteSpline {
      constructor(lerp) {
        this._points = [];
        this._lerp = lerp;
      }
  
      // Now accepts both position and rotation easing functions per point
      AddPoint(t, d, posEasingFunction, rotEasingFunction) {
        this._points.push({ time: t, data: d, posEasing: posEasingFunction, rotEasing: rotEasingFunction });
      }
  
      Get(t) {
        let p1 = 0;
  
        // Find the segment that `t` falls into
        for (let i = 0; i < this._points.length; i++) {
          if (this._points[i].time >= t) {
            break;
          }
          p1 = i;
        }
  
        const p0 = Math.max(0, p1 - 1);
        const p2 = Math.min(this._points.length - 1, p1 + 1);
        const p3 = Math.min(this._points.length - 1, p1 + 2);
  
        if (p1 === p2) {
          return this._points[p1].data;
        }
  
        const p1Time = this._points[p1].time;
        const p2Time = this._points[p2].time;
        const localT = (t - p1Time) / (p2Time - p1Time);
  
        // Get the easing functions for position and rotation
        const posEasing = this._points[p1].posEasing;
        const rotEasing = this._points[p1].rotEasing;
  
        // Perform cubic Hermite interpolation using the lerp function and tangents
        return this._lerp(localT, this._points[p0].data, this._points[p1].data, this._points[p2].data, this._points[p3].data, posEasing, rotEasing);
      }
    }
  
    return {
      CubicHermiteSpline: _CubicHermiteSpline,
    };
  })();
  