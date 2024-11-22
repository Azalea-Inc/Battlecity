export class PlayerSocketController {
  constructor(playerView, socket) {
    this.playerView = playerView;
    this.socket = socket;
  }

  verify(id) {
    if (id != this.playerView.id) return;
  }

  start() {
    this.socket.on("move-right", ({ id }) => {
      if (id != this.playerView.id) return;
      this.playerView.moveRight();
    });

    this.socket.on("move-left", ({ id }) => {
      if (id != this.playerView.id) return;
      this.playerView.moveLeft();
    });

    this.socket.on("move-down", ({ id }) => {
      if (id != this.playerView.id) return;
      this.playerView.moveDown();
    });

    this.socket.on("move-up", ({ id }) => {
      if (id != this.playerView.id) return;
      this.playerView.moveUp();
    });

    this.socket.on("shoot", ({ id }) => {
      if (id != this.playerView.id) return;
      this.playerView.shootBullet();
    });

    this.socket.on("rotate-left", ({ id }) => {
      if (id != this.playerView.id) return;
      this.playerView.rotateLeft();
    });

    this.socket.on("rotate-right", ({ id }) => {
      if (id != this.playerView.id) return;
      this.playerView.rotateRight();
    });
  }
}
