import { io } from "socket.io-client";
import { Scene } from "phaser";
import { PlayerView } from "../views/PlayerView";

export class InGameScene extends Scene {
  constructor() {
    super("IN_GAME");

    this.playersCount = 1;
    this.players = [];
  }

  init() {
    this.socket = io("ws://localhost:3000");

    this.localPlayer = new PlayerView(this, 100, 100);
    this.localPlayer.enablePhysics();
    this.localPlayer.setSocket(this.socket);
    this.localPlayer.initHandlers();

    this.socket.on("player-added", ({ id }) => {
      console.log("Player Added " + id);
      if (id == this.localPlayer.id) return;
      const find = this.players.find((e) => e.id == id);
      if (find) return;

      const player = new PlayerView(this, 100, 100);
      player.setId(id);
      player.enablePhysics();
      player.setSocket(this.socket);
      player.initActionHandlers();
      this.players.push(player);
      this.localPlayer.overlap(player);
      player.overlap(this.localPlayer);
    });
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

    this.players.forEach((player) => {
      player.resetState();
    });
  }
}
