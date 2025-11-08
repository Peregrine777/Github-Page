// alarmZone.js - Alarm zones that trigger light hunting behavior

export class AlarmZone {
  constructor(x, y, width = 60, height = 60) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    // Visual properties
    this.baseColor = [255, 255, 0]; // Dull yellow
    this.baseAlpha = 80;
    this.currentAlpha = this.baseAlpha;

    // Alarm state
    this.isTriggered = false;
    this.triggerTime = 0;
    this.triggerDuration = 30; // How long alarm stays active (frames)
    this.pulseSpeed = 0.1;

    // Trigger properties
    this.triggerPosition = null; // Where blob was when alarm triggered
    this.hasBeenTriggered = false; // Track if this zone was ever triggered
  }

  // Check if blob is inside this alarm zone
  checkBlobCollision(blob) {
    if (!blob || blob.isDead) return false;

    // Check if blob center is inside alarm zone
    let blobCenter = blob.center;
    if (
      blobCenter.x > this.x &&
      blobCenter.x < this.x + this.width &&
      blobCenter.y > this.y &&
      blobCenter.y < this.y + this.height
    ) {
      return true;
    }

    // Also check if any blob nodes are inside (more sensitive detection)
    for (let node of blob.nodes) {
      if (
        node.pos.x > this.x &&
        node.pos.x < this.x + this.width &&
        node.pos.y > this.y &&
        node.pos.y < this.y + this.height
      ) {
        return true;
      }
    }

    return false;
  }

  // Trigger the alarm
  triggerAlarm(blob) {
    if (this.isTriggered) return false; // Already triggered

    this.isTriggered = true;
    this.hasBeenTriggered = true;
    this.triggerTime = 0;

    // Store the position where the blob triggered the alarm
    this.triggerPosition = {
      x: blob.center.x,
      y: blob.center.y,
    };

    console.log(
      `Alarm Zone triggered at (${this.triggerPosition.x.toFixed(
        1
      )}, ${this.triggerPosition.y.toFixed(1)})`
    );
    return true; // Successfully triggered
  }

  // Update alarm state
  update() {
    if (this.isTriggered) {
      this.triggerTime++;

      // Create pulsing effect while alarm is active
      let pulseFactor = 1 + sin(this.triggerTime * this.pulseSpeed) * 0.5;
      this.currentAlpha = this.baseAlpha * pulseFactor;

      // Deactivate alarm after duration
      if (this.triggerTime >= this.triggerDuration) {
        this.isTriggered = false;
        this.currentAlpha = this.baseAlpha;
        this.triggerPosition = null;
        console.log("Alarm Zone deactivated");
      }
    }
  }

  // Draw the alarm zone
  draw() {
    push();

    // Main alarm zone rectangle
    if (this.isTriggered) {
      // Bright pulsing when triggered
      fill(255, 200, 0, this.currentAlpha * 2);
      stroke(255, 255, 0, 255);
      strokeWeight(3);
    } else if (this.hasBeenTriggered) {
      // Dimmer after being triggered once
      fill(
        this.baseColor[0],
        this.baseColor[1],
        this.baseColor[2],
        this.baseAlpha * 0.5
      );
      stroke(200, 200, 0, 120);
      strokeWeight(1);
    } else {
      // Normal dull yellow
      fill(
        this.baseColor[0],
        this.baseColor[1],
        this.baseColor[2],
        this.baseAlpha
      );
      stroke(180, 180, 0, 150);
      strokeWeight(2);
    }

    rect(this.x, this.y, this.width, this.height);

    // Draw alarm icon in center
    if (this.isTriggered) {
      // Exclamation mark when active
      fill(255, 0, 0, 255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text("!", this.x + this.width / 2, this.y + this.height / 2);
    } else {
      // Warning triangle when inactive
      fill(100, 100, 0, 150);
      textAlign(CENTER, CENTER);
      textSize(12);
      text("⚠", this.x + this.width / 2, this.y + this.height / 2);
    }

    // Draw trigger position indicator
    if (this.isTriggered && this.triggerPosition) {
      fill(255, 0, 0, 200);
      noStroke();
      ellipse(this.triggerPosition.x, this.triggerPosition.y, 8, 8);
    }

    pop();
  }

  // Get bounds for collision detection
  getBounds() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    };
  }

  // Check if point is inside alarm zone
  containsPoint(x, y) {
    return (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    );
  }

  // Get trigger position (for light AI targeting)
  getTriggerPosition() {
    return this.triggerPosition;
  }

  // Reset alarm zone to initial state
  reset() {
    this.isTriggered = false;
    this.hasBeenTriggered = false;
    this.triggerTime = 0;
    this.triggerPosition = null;
    this.currentAlpha = this.baseAlpha;
  }
}

// Alarm Zone Manager - handles multiple alarm zones
export class AlarmZoneManager {
  constructor() {
    this.zones = [];
    this.activeAlarms = []; // Currently triggered alarms
  }

  // Add a new alarm zone
  addZone(x, y, width = 60, height = 60) {
    let zone = new AlarmZone(x, y, width, height);
    this.zones.push(zone);
    return zone;
  }

  // Update all alarm zones and check for blob collisions
  update(blob) {
    this.activeAlarms = []; // Clear active alarms list

    for (let zone of this.zones) {
      zone.update();

      // Check for new triggers
      if (!zone.isTriggered && zone.checkBlobCollision(blob)) {
        if (zone.triggerAlarm(blob)) {
          this.activeAlarms.push(zone);
        }
      }

      // Track currently active alarms
      if (zone.isTriggered) {
        this.activeAlarms.push(zone);
      }
    }
  }

  // Draw all alarm zones
  draw() {
    for (let zone of this.zones) {
      zone.draw();
    }
  }

  // Get all currently active alarm positions
  getActiveAlarmPositions() {
    let positions = [];
    for (let zone of this.activeAlarms) {
      if (zone.triggerPosition) {
        positions.push({
          x: zone.triggerPosition.x,
          y: zone.triggerPosition.y,
          zone: zone,
        });
      }
    }
    return positions;
  }

  // Get the most recent alarm position
  getMostRecentAlarm() {
    let mostRecent = null;
    let latestTime = -1;

    for (let zone of this.zones) {
      if (zone.isTriggered && zone.triggerTime > latestTime) {
        latestTime = zone.triggerTime;
        mostRecent = zone;
      }
    }

    return mostRecent ? mostRecent.getTriggerPosition() : null;
  }

  // Check if any alarms are currently active
  hasActiveAlarms() {
    return this.activeAlarms.length > 0;
  }

  // Reset all alarm zones
  resetAll() {
    for (let zone of this.zones) {
      zone.reset();
    }
    this.activeAlarms = [];
  }

  // Remove all zones
  clearAll() {
    this.zones = [];
    this.activeAlarms = [];
  }

  // Get zone count
  getZoneCount() {
    return this.zones.length;
  }
}
