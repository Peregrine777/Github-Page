// abInvestigate.js - Investigate behavior for AI when responding to alarms or lost targets

import { AiBehaviour } from "./AiBehaviour.js";

export class InvestigateBehaviour extends AiBehaviour {
  constructor() {
    super();
    this.name = "investigating";
    this.priority = 5; // Medium-high priority
    this.speed = 2;

    // Investigation properties
    this.investigationTarget = null;
    this.investigationDuration = 300; // 5 seconds at 60fps
    this.investigationStartTime = 0;
    this.sweepRadius = 80;
    this.sweepAngle = 0;
    this.sweepSpeed = 0.05; // Radians per frame

    // Investigate behavior doesn't need its own movement properties anymore

    // Investigation triggers
    this.isRespondingToAlarm = false;
    this.lastKnownBlobPosition = null;
    this.alarmPosition = null;
  }

  /**
   * Investigate behavior activates for alarms or lost blob traces
   */
  shouldActivate(lightSource, blob, blockers, alarmZoneManager) {
    // Check for active alarms
    if (alarmZoneManager && alarmZoneManager.hasActiveAlarm()) {
      let activeAlarm = alarmZoneManager.getActiveAlarmPosition();
      if (activeAlarm) {
        // Set up alarm investigation
        this.setupAlarmInvestigation(activeAlarm);
        return true;
      }
    }

    // Check if we recently lost sight of the blob (transition from hunting)
    if (this.lastKnownBlobPosition && blob && !blob.isDead) {
      let timeSinceLost = this.frameCounter - this.investigationStartTime;
      if (timeSinceLost < this.investigationDuration) {
        return true;
      }
    }

    // Continue if already investigating and duration hasn't expired
    if (this.isActive) {
      let investigationTime = this.frameCounter - this.investigationStartTime;
      return investigationTime < this.investigationDuration;
    }

    return false;
  }

  /**
   * Execute investigate behavior
   */
  execute(lightSource, blob, blockers, alarmZoneManager) {
    if (!lightSource) return;

    let investigationTime = this.frameCounter - this.investigationStartTime;

    // Phase 1: Move to investigation point
    if (this.investigationTarget) {
      let distance = dist(
        lightSource.x,
        lightSource.y,
        this.investigationTarget.x,
        this.investigationTarget.y
      );

      if (distance > 25) {
        // Set movement target
        this.setMoveTarget(
          this.investigationTarget.x,
          this.investigationTarget.y
        );
        this.setAimTarget(
          this.investigationTarget.x,
          this.investigationTarget.y
        );
      } else {
        // Arrived at target, start sweep behavior
        this.investigationTarget = null;
      }
    } else {
      // Phase 2: Sweep/search behavior at investigation point
      this.performSweepSearch(lightSource);
    }

    // Check if investigation time has expired
    if (investigationTime >= this.investigationDuration) {
      this.endInvestigation();
    }
  }

  /**
   * Set up investigation for an alarm
   */
  setupAlarmInvestigation(alarmPosition) {
    this.isRespondingToAlarm = true;
    this.alarmPosition = { x: alarmPosition.x, y: alarmPosition.y };
    this.investigationTarget = { x: alarmPosition.x, y: alarmPosition.y };
    this.investigationStartTime = this.frameCounter;
    this.sweepAngle = 0;

    console.log(
      `Investigation: Responding to alarm at (${alarmPosition.x}, ${alarmPosition.y})`
    );
  }

  /**
   * Set up investigation for lost blob
   */
  setupBlobInvestigation(blobPosition) {
    this.isRespondingToAlarm = false;
    this.lastKnownBlobPosition = { x: blobPosition.x, y: blobPosition.y };
    this.investigationTarget = { x: blobPosition.x, y: blobPosition.y };
    this.investigationStartTime = this.frameCounter;
    this.sweepAngle = 0;

    console.log(
      `Investigation: Lost blob, investigating last position (${blobPosition.x}, ${blobPosition.y})`
    );
  }

  /**
   * Perform sweeping search pattern
   */
  performSweepSearch(lightSource) {
    // Circular sweep pattern
    this.sweepAngle += this.sweepSpeed;

    // Create small circular movement pattern
    let sweepRadius = 20;
    let sweepX = lightSource.x + cos(this.sweepAngle) * sweepRadius;
    let sweepY = lightSource.y + sin(this.sweepAngle) * sweepRadius;

    // Set movement target for circular sweep
    this.setMoveTarget(sweepX, sweepY);

    // Aim in different direction for thorough search
    let aimAngle = this.sweepAngle + PI / 2; // Perpendicular to movement
    let aimX = lightSource.x + cos(aimAngle) * 50;
    let aimY = lightSource.y + sin(aimAngle) * 50;
    this.setAimTarget(aimX, aimY);
  }

  // Movement is now handled by AiMovement class

  /**
   * End investigation and clean up
   */
  endInvestigation() {
    console.log("Investigation: Search complete, no target found");
    this.isRespondingToAlarm = false;
    this.alarmPosition = null;
    this.lastKnownBlobPosition = null;
    this.investigationTarget = null;
  }

  // Bounds constraint is now handled by AiMovement class

  /**
   * Called when entering investigate state
   */
  onEnter(lightSource) {
    super.onEnter(lightSource);

    // If we don't have a target set up yet, investigate current position
    if (!this.investigationTarget) {
      this.investigationTarget = { x: lightSource.x, y: lightSource.y };
    }

    this.investigationStartTime = this.frameCounter;
  }

  /**
   * Called when exiting investigate state
   */
  onExit(lightSource) {
    super.onExit(lightSource);
    this.endInvestigation();
  }

  /**
   * Reset investigate behavior
   */
  reset() {
    super.reset();
    this.investigationTarget = null;
    this.investigationStartTime = 0;
    this.sweepAngle = 0;
    this.isRespondingToAlarm = false;
    this.lastKnownBlobPosition = null;
    this.alarmPosition = null;
  }

  /**
   * Set the last known blob position (called from hunt behavior)
   */
  setLastKnownBlobPosition(position) {
    this.lastKnownBlobPosition = { x: position.x, y: position.y };
  }

  /**
   * Get debug information
   */
  getDebugInfo() {
    let baseInfo = super.getDebugInfo();
    let investigationTime = this.frameCounter - this.investigationStartTime;

    return {
      ...baseInfo,
      investigationTarget: this.investigationTarget,
      investigationTime: investigationTime,
      investigationTimeRemaining:
        this.investigationDuration - investigationTime,
      isRespondingToAlarm: this.isRespondingToAlarm,
      sweepAngle: this.sweepAngle.toFixed(2),
    };
  }
}
