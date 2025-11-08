// abSearch.js - Search/Patrol behavior for AI

import { AiBehaviour } from "./AiBehaviour.js";

export class SearchBehaviour extends AiBehaviour {
  constructor() {
    super();
    this.name = "searching";
    this.priority = 1; // Low priority - default behavior
    this.speed = 1;

    // Search/patrol properties
    this.meanderTarget = null;
    this.meanderTimer = 0;
    this.meanderInterval = 180; // Change direction every 3 seconds
    this.searchRadius = 100;

    // Search behavior doesn't need its own movement properties anymore
  }

  /**
   * Search behavior activates when no higher priority behaviors are active
   */
  shouldActivate(lightSource, blob, blockers, alarmZoneManager) {
    // Always available as fallback behavior
    return true;
  }

  /**
   * Execute search/patrol behavior - random meandering movement
   */
  execute(lightSource, blob, blockers, alarmZoneManager) {
    if (!lightSource) return;

    this.meanderTimer++;

    // Generate new meander target periodically or if we don't have one
    if (!this.meanderTarget || this.meanderTimer >= this.meanderInterval) {
      this.generateNewMeanderTarget(lightSource, blockers);
      this.meanderTimer = 0;
    }

    // Set movement target for the movement system to handle
    if (this.meanderTarget) {
      this.setMoveTarget(this.meanderTarget.x, this.meanderTarget.y);

      // Aim in the direction we're moving
      this.setAimTarget(this.meanderTarget.x, this.meanderTarget.y);
    }
  }

  /**
   * Generate a new random target for meandering
   */
  generateNewMeanderTarget(lightSource, blockers) {
    let attempts = 0;
    let maxAttempts = 20;

    while (attempts < maxAttempts) {
      // Generate random direction and distance
      let angle = random(0, TWO_PI);
      let distance = random(50, this.searchRadius);

      let targetX = lightSource.x + cos(angle) * distance;
      let targetY = lightSource.y + sin(angle) * distance;

      // Keep within canvas bounds
      targetX = constrain(targetX, 50, width - 50);
      targetY = constrain(targetY, 50, height - 50);

      // Check if target is not inside a blocker
      let validTarget = true;
      for (let blocker of blockers) {
        if (
          targetX > blocker.x - 20 &&
          targetX < blocker.x + blocker.width + 20 &&
          targetY > blocker.y - 20 &&
          targetY < blocker.y + blocker.height + 20
        ) {
          validTarget = false;
          break;
        }
      }

      if (validTarget) {
        this.meanderTarget = { x: targetX, y: targetY };
        console.log(
          `Search: New meander target at (${targetX.toFixed(
            1
          )}, ${targetY.toFixed(1)})`
        );
        break;
      }

      attempts++;
    }

    // If no valid target found, just move in a random direction
    if (attempts >= maxAttempts) {
      let angle = random(0, TWO_PI);
      let distance = 50;
      this.meanderTarget = {
        x: constrain(lightSource.x + cos(angle) * distance, 50, width - 50),
        y: constrain(lightSource.y + sin(angle) * distance, 50, height - 50),
      };
    }
  }

  // Bounds constraint is now handled by AiMovement class

  /**
   * Called when entering search state
   */
  onEnter(lightSource) {
    super.onEnter(lightSource);
    this.meanderTimer = 0;
    this.meanderTarget = null;
  }

  /**
   * Reset search behavior
   */
  reset() {
    super.reset();
    this.meanderTarget = null;
    this.meanderTimer = 0;
  }

  /**
   * Get debug information
   */
  getDebugInfo() {
    let baseInfo = super.getDebugInfo();
    return {
      ...baseInfo,
      meanderTarget: this.meanderTarget,
      meanderTimer: this.meanderTimer,
    };
  }
}
