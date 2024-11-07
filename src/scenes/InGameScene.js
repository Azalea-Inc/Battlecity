import { io } from "socket.io-client";
import { Scene } from "phaser";
import { PlayerView } from "../views/PlayerView";
import { InputKeyboard } from "../interfaces/InputKeyboard";

export class InGameScene extends Scene {
  constructor() {
    super("IN_GAME");

    this.socket = io("ws://localhost:3000");
    this.playersCount = 1;
    this.players = [];
  }

  init() {
    this.localPlayer = new PlayerView(this, 100, 100);
    this.localPlayer.enablePhysics();

    this.socket.emit("init", "Jugador local conectado");
    this.socket.on("welcome", (data) => {
      console.log("bienvenido jugador con ID: ", data.id);
    });
  }

  preload() {
    this.load.image("Tank", "/Player_Image.png");
  }

  create() {
    this.keyboard = new InputKeyboard(this);
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

  update() {}
}
