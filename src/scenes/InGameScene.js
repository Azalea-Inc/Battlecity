import { Scene } from "phaser";
import { io } from "socket.io-client";
import { PlayerView } from "../views/player/PlayerView";

const socket = io("ws://localhost:3000");

export class InGameScene extends Scene {
  constructor() {
    super("IN_GAME");
    this.players = [];
  }

  init() {
    this.socket = socket;
    this.localPlayer = new PlayerView(this, 100, 100);
    this.localPlayer.createMovmentController();
    this.localPlayer.enablePhysics();
    this.localPlayer.setSocket(this.socket);
    this.localPlayer.join();

    this.socket.on("inGamePlayers", (players) => {
      players.map((player) => {
        this.addPlayer(player);
      });
    });

    this.socket.on("player-disconnected", (id) => {
      const exist = this.players.find((player) => player.id == id);
      if (!exist) return;
      this.players = this.players.filter((player) => player.id != id);
      exist.destroy();
    });

    this.socket.on("player-added", (player) => {
      this.addPlayer(player);
    });
  }

  addPlayer(player) {
    if (player.id == this.localPlayer.id) return;
    const find = this.players.find((e) => e.id == player.id);
    if (find) return;

    const newPlayer = new PlayerView(this, player.x, player.y);
    newPlayer.setId(player.id);
    newPlayer.enablePhysics();
    newPlayer.setSocket(this.socket);
    newPlayer.initActionHandlers();
    this.localPlayer.overlap(newPlayer);
    newPlayer.overlap(this.localPlayer);
    this.players.push(newPlayer);
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
