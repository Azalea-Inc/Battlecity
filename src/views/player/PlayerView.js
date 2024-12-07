import { Physics } from "phaser";
import { PlayerMovmentController } from "./PlayerMovmentController";
import { PlayerSocketController } from "./PlayerSocketController";

export class PlayerView extends Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Tank");
    scene.add.existing(this);
    scene.physics.add.existing(this).setScale(0.15);

    this.speed = 1;
    this.angle = 0;
    this.life = 100;

    this.bullets = scene.physics.add.group({
      defaultKey: "bullet",
      maxSize: 30
    });
  }

  join() {
    this.socket.emit("join", { id: this.id });

    this.socket.on("welcome", (player) => {
      this.x = player.x;
      this.y = player.y;
      this.setId(player.id);
      this.socket.emit("init", player);
    });
    this.movmentController.setSocket(this.socket);
  }

  createMovmentController() {
    this.movmentController = new PlayerMovmentController(this);
  }

  setSocket(socket) {
    this.socket = socket;
  }

  setId(id) {
    this.id = id;
  }

  initActionHandlers() {
    new PlayerSocketController(this, this.socket).start();
  }

  overlap(enemy) {
    this.scene.physics.add.overlap(
      this.bullets,
      enemy,
      this.impact,
      null,
      this
    );
  }

  enablePhysics() {
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
  }

  impact(enemy, bullet) {
    enemy.damage();
  }

  damage() {
    this.life -= 10;
    console.log("Damage");
  }

  shootBullet() {
    const bulletSpeed = 600;
    const bullet = this.bullets.get(this.x, this.y);

    if (!bullet) return;

    bullet.setActive(true);
    bullet.setVisible(true);

    bullet.body.reset(this.x, this.y);

    const angleInRadians = Phaser.Math.DegToRad(this.angle - 90);
    bullet.setVelocity(
      Math.cos(angleInRadians) * bulletSpeed,
      Math.sin(angleInRadians) * bulletSpeed
    );

    bullet.setAngle(this.angle - 90);
    bullet.setScale(0.15);

    this.scene.time.delayedCall(1000, () => {
      this.bullets.killAndHide(bullet);
    });
  }

  resetState() {
    this.setVelocity(0, 0);
    this.setAngle(this.angle);
  }

  rotateLeft() {
    this.angle -= 5;
    this.setAngle(this.angle);
  }

  rotateRight() {
    this.angle += 5;
    this.setAngle(this.angle);
  }

  moveLeft() {
    this.setVelocityX(-this.speed);
  }

  moveRight() {
    this.setPosition(this.x + this.speed, this.y);
  }

  moveUp() {
    this.setVelocityY(-this.speed);
  }

  moveDown() {
    this.setVelocityY(this.speed);
  }

  update(events) {
    this.movmentController.update(events);
  }
}
