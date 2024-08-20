import { Physics } from "phaser";
import { PlayerMovementController } from "../controllers/PlayerMovementController";

export class PlayerView extends Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Tank");
    this.controller = new PlayerMovementController(this);

    scene.add.existing(this);
    scene.physics.add.existing(this).setScale(0.25);
  }

  enablePhysics() {
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
  }

  update() {
    this.controller.moveRight();
  }
}
