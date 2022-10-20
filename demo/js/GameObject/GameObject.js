import { Vec2 } from "../utils/Vec2.js";

export class GameObject {
  constructor(
    game,
    position = new Vec2(),
    collisionRadius = 40,
    pathingRadius = 40,
    visionRadius = 0,
    team = null
  ) {
    this.game = game;
    this.position = position;
    this.direction = new Vec2();
    this.collisionRadius = collisionRadius;
    this.pathingRadius = pathingRadius;
    this.visionRadius = visionRadius;
    this.team = team;

    this.#toRemove = false;
  }

  onAdded() {}

  update() {}

  lateUpdate() {}

  isToRemove() {
    return this.#toRemove;
  }

  setToRemove() {
    this.#toRemove = true;
  }

  onRemoved() {}

  setPosition(x, y) {
    this.position.set(x, y);
  }
}
