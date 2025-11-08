// particles.js - Particle system for blob evaporation effects

class Particle {
  constructor(x, y, type = "mist") {
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.type = type;

    if (type === "mist") {
      // Misty trail particles
      this.vx = random(-2, 2);
      this.vy = random(-3, -0.5);
      this.life = 1.0;
      this.maxLife = random(30, 60);
      this.size = random(3, 8);
      this.color = {
        r: random(100, 200),
        g: random(150, 255),
        b: random(100, 200),
        a: random(100, 200),
      };
      this.drift = random(-0.1, 0.1);
    } else if (type === "pop") {
      // Pop explosion particles
      let angle = random(0, TWO_PI);
      let speed = random(2, 8);
      this.vx = cos(angle) * speed;
      this.vy = sin(angle) * speed;
      this.life = 1.0;
      this.maxLife = random(15, 30);
      this.size = random(2, 6);
      this.color = {
        r: random(150, 255),
        g: random(200, 255),
        b: random(150, 255),
        a: 255,
      };
      this.gravity = 0.1;
    }
  }

  update() {
    if (this.type === "mist") {
      // Misty particles drift upward and sideways
      this.x += this.vx + this.drift;
      this.y += this.vy;
      this.vx *= 0.99; // Slight drag
      this.vy *= 0.98;
      this.life -= 1.0 / this.maxLife;

      // Add some random drift
      this.vx += random(-0.1, 0.1);
      this.vy += random(-0.05, 0.05);
    } else if (this.type === "pop") {
      // Pop particles spread out and fall
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.vx *= 0.95; // Air resistance
      this.life -= 1.0 / this.maxLife;
    }
  }

  draw() {
    push();

    let alpha = this.life * this.color.a;
    if (alpha <= 0) return;

    if (this.type === "mist") {
      // Draw misty particle with soft edges
      fill(this.color.r, this.color.g, this.color.b, alpha * 0.6);
      noStroke();

      // Create a soft glow effect
      for (let i = 0; i < 3; i++) {
        let size = this.size * this.life * (1 + i * 0.3);
        let currentAlpha = alpha / (i + 1);
        fill(this.color.r, this.color.g, this.color.b, currentAlpha);
        ellipse(this.x, this.y, size);
      }
    } else if (this.type === "pop") {
      // Draw pop particle as a bright sparkle
      fill(this.color.r, this.color.g, this.color.b, alpha);
      noStroke();

      let size = this.size * this.life;
      ellipse(this.x, this.y, size);

      // Add sparkle effect
      stroke(255, 255, 255, alpha * 0.8);
      strokeWeight(1);
      line(this.x - size / 2, this.y, this.x + size / 2, this.y);
      line(this.x, this.y - size / 2, this.x, this.y + size / 2);
    }

    pop();
  }

  isDead() {
    return this.life <= 0;
  }
}

class ParticleSystem {
  constructor() {
    this.particles = [];
    this.maxParticles = 500; // Limit to prevent performance issues
  }

  // Create misty trail particles (continuous while blob is evaporating)
  createMistTrail(x, y, intensity = 1) {
    if (this.particles.length >= this.maxParticles) return;

    // Create multiple particles for better effect
    for (let i = 0; i < intensity * 2; i++) {
      let offsetX = random(-5, 5);
      let offsetY = random(-5, 5);
      this.particles.push(new Particle(x + offsetX, y + offsetY, "mist"));
    }
  }

  // Create pop explosion particles (when blob node is destroyed)
  createPopExplosion(x, y, intensity = 5) {
    if (this.particles.length >= this.maxParticles) return;

    // Create burst of particles
    for (let i = 0; i < intensity * 3; i++) {
      this.particles.push(new Particle(x, y, "pop"));
    }
  }

  // Create area mist effect (when blob is heavily damaged)
  createAreaMist(x, y, radius, intensity = 3) {
    if (this.particles.length >= this.maxParticles) return;

    for (let i = 0; i < intensity; i++) {
      let angle = random(0, TWO_PI);
      let distance = random(0, radius);
      let particleX = x + cos(angle) * distance;
      let particleY = y + sin(angle) * distance;
      this.particles.push(new Particle(particleX, particleY, "mist"));
    }
  }

  update() {
    // Update all particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();

      // Remove dead particles
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw() {
    // Draw all particles
    for (let particle of this.particles) {
      particle.draw();
    }
  }

  // Get particle count for debugging
  getCount() {
    return this.particles.length;
  }

  // Clear all particles (for game reset)
  clear() {
    this.particles = [];
  }
}

// Export the classes for use in other files
export { Particle, ParticleSystem };
