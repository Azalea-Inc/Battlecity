import { PlayerView } from "./PlayerView";

export class PlayerMovmentController {
  /**
   *
   * @param {PlayerView} playerView
   */
  constructor(playerView) {
    this.playerView = playerView;
  }

  setSocket(socket) {
    this.socket = socket;
  }

  update(events) {
    this.playerView.resetState();

    if (events.rotateLeft.isDown) {
      this.socket.emit("rotate-left", { id: this.playerView.id });
      this.playerView.rotateLeft();
    }

    if (events.rotateRight.isDown) {
      this.socket.emit("rotate-right", { id: this.playerView.id });
      this.playerView.rotateRight();
    }

    if (events.left.isDown) {
      this.socket.emit("move-left", { id: this.playerView.id });
      this.playerView.moveLeft();
    }

    if (events.right.isDown) {
      this.socket.emit("move-right", { id: this.playerView.id });
      this.playerView.moveRight();
    }

    if (events.up.isDown) {
      this.socket.emit("move-up", { id: this.playerView.id });
      this.playerView.moveUp();
    }

    if (events.down.isDown) {
      this.socket.emit("move-down", { id: this.playerView.id });
      this.playerView.moveDown();
    }

    if (Phaser.Input.Keyboard.JustDown(events.shoot)) {
      this.socket.emit("shoot", { id: this.playerView.id });
      this.playerView.shootBullet();
    }
  }
}
