// AiState.js - State management system for AI behaviors

import { AiMovement } from "./AiMovement.js";

export class AiState {
  constructor() {
    this.behaviors = new Map(); // Map of behavior name -> behavior instance
    this.currentBehavior = null;
    this.previousBehavior = null;

    // Movement system
    this.movement = new AiMovement();

    // State transition properties
    this.transitionCooldown = 0; // Prevent rapid state switching
    this.minTransitionTime = 10; // Minimum frames between transitions

    // Debug and monitoring
    this.stateHistory = [];
    this.maxHistoryLength = 10;
  }

  /**
   * Register a behavior with the state manager
   * @param {AiBehaviour} behavior - Behavior instance to register
   */
  registerBehavior(behavior) {
    if (!behavior.name) {
      throw new Error("Behavior must have a name property");
    }

    this.behaviors.set(behavior.name, behavior);
    console.log(
      `AI State: Registered behavior '${behavior.name}' with priority ${behavior.priority}`
    );
  }

  /**
   * Update the AI state system
   * @param {Object} lightSource - The light source object
   * @param {Object} blob - The blob target
   * @param {Array} blockers - Environment obstacles
   * @param {Object} alarmZoneManager - Alarm system
   */
  update(lightSource, blob, blockers, alarmZoneManager) {
    // Update transition cooldown
    if (this.transitionCooldown > 0) {
      this.transitionCooldown--;
    }

    // Update all behaviors
    for (let behavior of this.behaviors.values()) {
      behavior.update();
    }

    // Find the highest priority behavior that should be active
    let selectedBehavior = this.selectBehavior(
      lightSource,
      blob,
      blockers,
      alarmZoneManager
    );

    // Handle state transitions
    if (
      selectedBehavior !== this.currentBehavior &&
      this.transitionCooldown <= 0
    ) {
      this.transitionTo(selectedBehavior, lightSource);
      this.transitionCooldown = this.minTransitionTime;
    }

    // Execute current behavior
    if (this.currentBehavior) {
      this.currentBehavior.execute(
        lightSource,
        blob,
        blockers,
        alarmZoneManager
      );

      // Apply behavior targets to movement system
      this.applyBehaviorTargets();
    }

    // Update movement system
    let currentSpeed = this.currentBehavior ? this.currentBehavior.speed : 1;
    this.movement.update(lightSource, blockers, currentSpeed);
  }

  /**
   * Apply behavior movement and aim targets to the movement system
   */
  applyBehaviorTargets() {
    if (!this.currentBehavior) return;

    // Set movement target
    if (this.currentBehavior.targetMovePosition) {
      this.movement.setTargetPosition(
        this.currentBehavior.targetMovePosition.x,
        this.currentBehavior.targetMovePosition.y
      );
    }

    // Set aim target
    if (this.currentBehavior.targetAimPosition) {
      this.movement.setTargetAim(
        this.currentBehavior.targetAimPosition.x,
        this.currentBehavior.targetAimPosition.y
      );
    }
  }

  /**
   * Select the highest priority behavior that should be active
   * @param {Object} lightSource - The light source object
   * @param {Object} blob - The blob target
   * @param {Array} blockers - Environment obstacles
   * @param {Object} alarmZoneManager - Alarm system
   * @returns {AiBehaviour|null} - Selected behavior or null
   */
  selectBehavior(lightSource, blob, blockers, alarmZoneManager) {
    let activeBehaviors = [];

    // Check which behaviors should be active
    for (let behavior of this.behaviors.values()) {
      if (
        behavior.shouldActivate(lightSource, blob, blockers, alarmZoneManager)
      ) {
        activeBehaviors.push(behavior);
      }
    }

    // Sort by priority (highest first) and return the top one
    if (activeBehaviors.length > 0) {
      activeBehaviors.sort((a, b) => b.priority - a.priority);
      return activeBehaviors[0];
    }

    return null;
  }

  /**
   * Transition from current behavior to a new behavior
   * @param {AiBehaviour|null} newBehavior - Behavior to transition to
   * @param {Object} lightSource - The light source object
   */
  transitionTo(newBehavior, lightSource) {
    // Exit current behavior
    if (this.currentBehavior) {
      this.currentBehavior.onExit(lightSource);
      this.previousBehavior = this.currentBehavior;
    }

    // Enter new behavior
    this.currentBehavior = newBehavior;
    if (this.currentBehavior) {
      this.currentBehavior.onEnter(lightSource);
    }

    // Update state history
    this.addToHistory(newBehavior ? newBehavior.name : "none");

    // Update light source state for compatibility
    if (lightSource) {
      lightSource.state = newBehavior ? newBehavior.name : "searching";
    }
  }

  /**
   * Add state change to history
   * @param {string} stateName - Name of the new state
   */
  addToHistory(stateName) {
    this.stateHistory.push({
      state: stateName,
      timestamp: Date.now(),
      frameCount: frameCount || 0,
    });

    // Limit history size
    if (this.stateHistory.length > this.maxHistoryLength) {
      this.stateHistory.shift();
    }
  }

  /**
   * Get the current behavior name
   * @returns {string} - Current behavior name or "none"
   */
  getCurrentStateName() {
    return this.currentBehavior ? this.currentBehavior.name : "none";
  }

  /**
   * Check if a specific behavior is currently active
   * @param {string} behaviorName - Name of behavior to check
   * @returns {boolean} - Whether the behavior is active
   */
  isInState(behaviorName) {
    return this.currentBehavior && this.currentBehavior.name === behaviorName;
  }

  /**
   * Force transition to a specific behavior (for testing/debugging)
   * @param {string} behaviorName - Name of behavior to activate
   * @param {Object} lightSource - The light source object
   */
  forceBehavior(behaviorName, lightSource) {
    let behavior = this.behaviors.get(behaviorName);
    if (behavior) {
      this.transitionTo(behavior, lightSource);
      this.transitionCooldown = 0; // Allow immediate transitions after force
    } else {
      console.warn(`AI State: Behavior '${behaviorName}' not found`);
    }
  }

  /**
   * Reset all behaviors and state
   */
  reset() {
    // Exit current behavior
    if (this.currentBehavior) {
      this.currentBehavior.onExit(null);
    }

    // Reset all behaviors
    for (let behavior of this.behaviors.values()) {
      behavior.reset();
    }

    // Reset movement system
    this.movement.reset();

    this.currentBehavior = null;
    this.previousBehavior = null;
    this.transitionCooldown = 0;
    this.stateHistory = [];
  }

  /**
   * Get debug information about the state system
   * @returns {Object} - Debug information
   */
  getDebugInfo() {
    let behaviorInfo = {};
    for (let [name, behavior] of this.behaviors) {
      behaviorInfo[name] = behavior.getDebugInfo();
    }

    return {
      currentState: this.getCurrentStateName(),
      previousState: this.previousBehavior
        ? this.previousBehavior.name
        : "none",
      transitionCooldown: this.transitionCooldown,
      registeredBehaviors: Array.from(this.behaviors.keys()),
      stateHistory: this.stateHistory.slice(-3), // Last 3 states
      behaviorDetails: behaviorInfo,
      movement: this.movement.getDebugInfo(),
    };
  }
}
