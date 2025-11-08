// abHunt.js - Hunt behavior for AI when blob is visible

import { AiBehaviour } from "./AiBehaviour.js";

export class HuntBehaviour extends AiBehaviour {
  constructor() {
    super();
    this.name = "hunting";
    this.priority = 10; // High priority - actively pursuing target
    this.speed = 3;

    // Hunt properties
    this.detectionRadius = 150; // How far the light can "see" the blob
    this.lostTargetTime = 0;
    this.maxLostTime = 60; // Frames before giving up hunt

    // Hunt behavior doesn't need its own movement properties anymore

    // Pathfinding
    this.currentPath = [];
    this.pathIndex = 0;
    this.pathUpdateInterval = 15; // Update path every 15 frames
    this.lastPathUpdate = 0;
  }

  /**
   * Hunt behavior activates when blob is visible and not dead
   */
  shouldActivate(lightSource, blob, blockers, alarmZoneManager) {
    if (!blob || blob.isDead || !lightSource) {
      return false;
    }

    // Check if blob is within detection range and visible
    let distance = dist(
      lightSource.x,
      lightSource.y,
      blob.center.x,
      blob.center.y
    );

    if (distance <= this.detectionRadius) {
      // Check line of sight (simplified - could be improved with raycasting)
      let hasLineOfSight = this.checkLineOfSight(
        lightSource,
        blob.center,
        blockers
      );

      if (hasLineOfSight) {
        this.lostTargetTime = 0; // Reset lost timer when we can see target
        return true;
      }
    }

    // If we recently lost the target, continue hunting briefly
    if (this.isActive && this.lostTargetTime < this.maxLostTime) {
      this.lostTargetTime++;
      return true;
    }

    return false;
  }

  /**
   * Execute hunt behavior - move directly toward blob
   */
  execute(lightSource, blob, blockers, alarmZoneManager) {
    if (!lightSource || !blob || blob.isDead) return;

    // Set movement and aim targets
    this.setMoveTarget(blob.center.x, blob.center.y);
    this.setAimTarget(blob.center.x, blob.center.y);

    // Optional: Use pathfinding for complex environments (can be implemented later)
    // For now, direct movement with obstacle avoidance is handled by AiMovement
  }

  /**
   * Simple line of sight check (can be improved with proper raycasting)
   */
  checkLineOfSight(lightSource, targetPos, blockers) {
    // Simplified check - just ensure target isn't inside a blocker
    for (let blocker of blockers) {
      if (
        targetPos.x > blocker.x &&
        targetPos.x < blocker.x + blocker.width &&
        targetPos.y > blocker.y &&
        targetPos.y < blocker.y + blocker.height
      ) {
        return false;
      }
    }
    return true;
  }

  // Complex pathfinding and movement logic is now handled by AiMovement class

  /**
   * Called when entering hunt state
   */
  onEnter(lightSource) {
    super.onEnter(lightSource);
    this.lostTargetTime = 0;
    this.currentPath = [];
    this.pathIndex = 0;
  }

  /**
   * Reset hunt behavior
   */
  reset() {
    super.reset();
    this.lostTargetTime = 0;
    this.currentPath = [];
    this.pathIndex = 0;
    this.lastPathUpdate = 0;
  }

  /**
   * Get debug information
   */
  getDebugInfo() {
    let baseInfo = super.getDebugInfo();
    return {
      ...baseInfo,
      lostTargetTime: this.lostTargetTime,
      pathLength: this.currentPath.length,
      pathIndex: this.pathIndex,
    };
  }
}
