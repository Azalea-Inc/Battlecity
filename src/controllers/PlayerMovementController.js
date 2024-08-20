

export class PlayerMovementController {
    
  checkMovement() {
    const speed = 200;
    this.player.setDrag(2000);

    if (this.cursors.left.isDown) {
      this.player.setVelocity(-speed, 0);
    } 
    else if (this.cursors.right.isDown) {
      this.player.setVelocity(speed, 0);
    } 
    else if (this.cursors.up.isDown) {
      this.player.setVelocity(0, -speed);
    } 
    else if (this.cursors.down.isDown) {
      this.player.setVelocity(0, speed);
    }
  }
}
