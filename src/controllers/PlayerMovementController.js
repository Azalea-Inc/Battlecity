export class PlayerMovementController {
  constructor(playerView) {
    this.playerView = playerView;
  }

  moveRight() {
    this.playerView.x++;
    console.log("Se movio a la derecha");
  }

  checkMovement() {
    const speed = 200;
    this.player.setDrag(2000);

    if (this.cursors.left.isDown) {
      this.player.setVelocity(-speed, 0);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocity(speed, 0);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocity(0, -speed);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocity(0, speed);
    }
  }
}
