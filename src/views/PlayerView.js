import { Physics } from "phaser";
import { PlayerMovmentController } from "./PlayerMovmentController";

export class PlayerView extends Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Tank");
    scene.add.existing(this);
    scene.physics.add.existing(this).setScale(0.15);

    this.speed = 150;
    this.angle = 0;
    this.life = 100;

    this.bullets = scene.physics.add.group({
      defaultKey: "bullet",
      maxSize: 30
    });

    this.movmentController = new PlayerMovmentController(this);
  }

  setSocket(socket) {
    this.socket = socket;
  }

  setId(id) {
    this.id = id;
  }

  initActionHandlers() {
    this.socket.on("move-right", ({ id }) => {
      console.log(id);
      if (id != this.id) return;
      this.moveRight();
    });

    this.socket.on("move-left", ({ id }) => {
      if (id != this.id) return;
      this.moveLeft();
    });

    this.socket.on("move-down", ({ id }) => {
      if (id != this.id) return;
      this.moveDown();
    });

    this.socket.on("move-up", ({ id }) => {
      if (id != this.id) return;
      this.moveUp();
    });

    this.socket.on("shoot", ({ id }) => {
      if (id != this.id) return;
      this.shootBullet();
    });

    this.socket.on("rotate-left", ({ id }) => {
      if (id != this.id) return;
      this.rotateLeft();
    });

    this.socket.on("rotate-right", ({ id }) => {
      if (id != this.id) return;
      this.rotateRight();
    });
  }

  initHandlers() {
    this.id = crypto.randomUUID();
    this.socket.emit("start", { id: this.id });
    this.movmentController.setSocket(this.socket);
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
    this.setVelocityX(this.speed);
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
