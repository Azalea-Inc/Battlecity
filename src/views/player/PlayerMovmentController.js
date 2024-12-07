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
      this.playerView.rotateLeft();
      this.socket.emit("rotate-left", { player: this.playerView});
    }

    if (events.rotateRight.isDown) {
      this.playerView.rotateRight();
      this.socket.emit("rotate-right", { player: this.playerView});
    }

    if (events.left.isDown) {
      this.playerView.moveLeft();
      this.socket.emit("move-left", { player: this.playerView});  
      console.log(this.playerView.body);
    }

    if (events.right.isDown) {
      this.playerView.moveRight();
      this.socket.emit("move-right", { player: this.playerView});  
      console.log(this.playerView.body);
    }

    if (events.up.isDown) {
      this.playerView.moveUp();
      this.socket.emit("move-up", { player: this.playerView });
    }

    if (events.down.isDown) {
      this.playerView.moveDown();
      this.socket.emit("move-down", { player: this.playerView});
    }

    if (Phaser.Input.Keyboard.JustDown(events.shoot)) {
      this.socket.emit("shoot", { id: this.playerView.id });
      this.playerView.shootBullet();
    }
  }
}
