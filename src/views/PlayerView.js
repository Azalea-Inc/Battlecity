import { Physics, GameObjects } from "phaser";

export class PlayerView extends Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Tank");
    scene.add.existing(this);
    scene.physics.add.existing(this).setScale(.25);
  }

  enablePhysics() {
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
  }

  update(){
    this.x++;
  }
}
