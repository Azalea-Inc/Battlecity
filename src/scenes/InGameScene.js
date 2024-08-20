import { Scene } from "phaser";
import { PlayerView } from "../views/PlayerView";

export class InGameScene extends Scene {

  constructor(){
    super("IN_GAME")
    
  }
  
  preload() {
    this.load.image("Tank", "/Player_Image.png");
  }

  create() {
    this.player = new PlayerView(this, 400, 300);
    this.player.enablePhysics();

    const gameBoundX = this.game.config.width;
    const gameBoundY = this.game.config.height;
    this.physics.world.setBounds(0, 0, gameBoundX, gameBoundY, true, true, true, true);

    const buttonReturn = this.add.text(50, 50, "InGame", {fill : '#0f0'});
    buttonReturn.setInteractive();
    buttonReturn.on("pointerdown", () => this.returnToTitleScreen());
  }

  update(){
    this.player.update();
  }

  returnToTitleScreen(){
    this.scene.start("START");
  }
}