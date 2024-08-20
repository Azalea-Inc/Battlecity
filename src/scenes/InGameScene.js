import { Scene } from "phaser";
import { PlayerView } from "../views/PlayerView";

export class InGameScene extends Scene {
  constructor() {
    super("IN_GAME");

    this.playersCount = 2;
    this.players = [];
  }

  addPlayer(x, y) {
    this.players.push(new PlayerView(this, x, y));
  }

  preload() {
    this.load.image("Tank", "/Player_Image.png");
  }

  create() {
    for (let i = 0; i < this.playersCount; i++) {
      this.addPlayer(100, (i + 1) * 100);
    }

    this.players.forEach((player) => {
      player.enablePhysics();
    });

    const gameBoundX = this.game.config.width;
    const gameBoundY = this.game.config.height;
    this.physics.world.setBounds(
      0,
      0,
      gameBoundX,
      gameBoundY,
      true,
      true,
      true,
      true
    );

    const buttonReturn = this.add.text(50, 50, "InGame", { fill: "#0f0" });
    buttonReturn.setInteractive();
    buttonReturn.on("pointerdown", () => this.returnToTitleScreen());
  }

  update() {
    this.players.forEach((player) => {
      player.update();
    });
  }

  returnToTitleScreen() {
    this.scene.start("START");
  }
}
