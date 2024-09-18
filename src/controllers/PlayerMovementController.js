export class PlayerMovementController {
  constructor(playerView) {
    this.playerView = playerView;
  }

  moveRight() {
    this.playerView.x++;
    console.log("Se movio a la derecha");
  }

  moveLeft() {
    this.playerView.x--;
    console.log("Se movio a la izquierda");
  }
}
