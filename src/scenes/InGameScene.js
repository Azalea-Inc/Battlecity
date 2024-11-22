// import { io } from "socket.io-client";
import { Scene } from "phaser";
import { PlayerView } from "../views/PlayerView";

export class InGameScene extends Scene {
  constructor() {
    super("IN_GAME");

    // this.socket = io("ws://localhost:3000");
    this.playersCount = 1;
    this.players = [];
  }

  init() {
    this.localPlayer = new PlayerView(this, 100, 100);
    this.localPlayer.enablePhysics();

    const enemy = new PlayerView(this, 400, 100);
    enemy.enablePhysics();

    this.localPlayer.overlap(enemy);
  }

  preload() {
    this.load.image("Tank", "/tank.png");
    this.load.image("bullet", "/bullet.png");
  }

  create() {
    this.keyboard = this.input.keyboard.addKeys({
      shoot: Phaser.Input.Keyboard.KeyCodes.SPACE,
      rotateLeft: Phaser.Input.Keyboard.KeyCodes.A,
      rotateRight: Phaser.Input.Keyboard.KeyCodes.D,
      left: Phaser.Input.Keyboard.KeyCodes.LEFT,
      right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S
    });

    this.init();

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
  }

  update() {
    this.localPlayer.update(this.keyboard);
  }
}
