import { PlayerView } from "./PlayerView";

export class PlayerMovmentController {
  /**
   *
   * @param {PlayerView} playerView
   */
  constructor(playerView) {
    this.playerView = playerView;
  }

  update(events) {
    this.playerView.resetState();

    if (events.rotateLeft.isDown) {
      this.playerView.rotateLeft();
    }

    if (events.rotateRight.isDown) {
      this.playerView.rotateRight();
    }

    if (events.left.isDown) {
      this.playerView.moveLeft();
    }

    if (events.right.isDown) {
      this.playerView.moveRight();
    }

    if (events.up.isDown) {
      this.playerView.moveUp();
    }

    if (events.down.isDown) {
      this.playerView.moveDown();
    }

    if (Phaser.Input.Keyboard.JustDown(events.shoot)) {
      this.playerView.shootBullet();
    }
  }
}
