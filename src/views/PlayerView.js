import { Physics } from "phaser";

export class PlayerView extends Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "Tank");
    scene.add.existing(this);
    scene.physics.add.existing(this).setScale(0.15);

    this.speed = 150;
    this.angle = 0;

    this.bullets = scene.physics.add.group({
      defaultKey: "bullet",
      maxSize: 10
    });
  }

  enablePhysics() {
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
  }

  shootBullet() {
    const bulletSpeed = 400;

    const bullet = this.bullets.get(this.x, this.y);

    if (bullet) {
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
  }

  update(events) {
    this.setVelocity(0, 0);
    this.setAngle(this.angle);

    if (events.rotateLeft.isDown) {
      this.angle -= 5;
      this.setAngle(this.angle);
    }

    if (events.rotateRight.isDown) {
      this.angle += 5;

      this.setAngle(this.angle);
    }

    if (events.left.isDown) {
      this.setVelocityX(-this.speed);
    }

    if (events.right.isDown) {
      this.setVelocityX(this.speed);
    }

    if (events.up.isDown) {
      this.setVelocityY(-this.speed);
    }

    if (events.down.isDown) {
      this.setVelocityY(this.speed);
    }

    if (Phaser.Input.Keyboard.JustDown(events.shoot)) {
      this.shootBullet();
    }
  }
}
