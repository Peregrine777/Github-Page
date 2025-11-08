// AiBehaviour.js - Base virtual class for AI behaviors

export class AiBehaviour {
  constructor() {
    this.name = "base";
    this.isActive = false;
    this.priority = 0; // Higher numbers = higher priority

    // Common behavior properties
    this.speed = 1;
    this.updateInterval = 30; // frames
    this.frameCounter = 0;

    // Movement targets (set by behaviors, used by movement system)
    this.targetMovePosition = null;
    this.targetAimPosition = null;
  }

  // Virtual methods to be overridden by subclasses

  /**
   * Check if this behavior should become active
   * @param {Object} lightSource - The light source object
   * @param {Object} blob - The blob target
   * @param {Array} blockers - Environment obstacles
   * @param {Object} alarmZoneManager - Alarm system
   * @returns {boolean} - Whether this behavior should activate
   */
  shouldActivate(lightSource, blob, blockers, alarmZoneManager) {
    throw new Error("shouldActivate() must be implemented by subclass");
  }

  /**
   * Execute the behavior logic
   * @param {Object} lightSource - The light source object
   * @param {Object} blob - The blob target
   * @param {Array} blockers - Environment obstacles
   * @param {Object} alarmZoneManager - Alarm system
   */
  execute(lightSource, blob, blockers, alarmZoneManager) {
    throw new Error("execute() must be implemented by subclass");
  }

  /**
   * Set the target position for the AI to move to
   * @param {number} x - Target X coordinate
   * @param {number} y - Target Y coordinate
   */
  setMoveTarget(x, y) {
    this.targetMovePosition = { x: x, y: y };
  }

  /**
   * Set the target position for the AI to aim at
   * @param {number} x - Aim target X coordinate
   * @param {number} y - Aim target Y coordinate
   */
  setAimTarget(x, y) {
    this.targetAimPosition = { x: x, y: y };
  }

  /**
   * Clear movement targets
   */
  clearTargets() {
    this.targetMovePosition = null;
    this.targetAimPosition = null;
  }

  /**
   * Called when this behavior becomes active
   * @param {Object} lightSource - The light source object
   */
  onEnter(lightSource) {
    this.isActive = true;
    console.log(`AI Behavior: Entering ${this.name} state`);
  }

  /**
   * Called when this behavior becomes inactive
   * @param {Object} lightSource - The light source object
   */
  onExit(lightSource) {
    this.isActive = false;
    console.log(`AI Behavior: Exiting ${this.name} state`);
  }

  /**
   * Update behavior-specific counters and timers
   */
  update() {
    this.frameCounter++;
  }

  /**
   * Reset behavior to initial state
   */
  reset() {
    this.isActive = false;
    this.frameCounter = 0;
  }

  /**
   * Get debug information about this behavior
   * @returns {Object} - Debug information
   */
  getDebugInfo() {
    return {
      name: this.name,
      isActive: this.isActive,
      priority: this.priority,
      speed: this.speed,
      frameCounter: this.frameCounter,
      targetMovePosition: this.targetMovePosition,
      targetAimPosition: this.targetAimPosition,
    };
  }
}
