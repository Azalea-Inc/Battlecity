import { InGameScene } from "../scenes/InGameScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  scene: [InGameScene],
  parent: "app",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }
};

export class InGameView {
  constructor(mainView) {
    this.mainView = mainView;
    this.setup();
  }

  setup() {}

  hide() {
    this.gameView.destroy();
  }

  show() {
    this.gameView = new Phaser.Game(config);
  }
}
