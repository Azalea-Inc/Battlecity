import { Scene } from "phaser";

export class StartScene extends Scene {
  
  constructor(){
    super("START")

  }
  
  preload() {
    this.load.image("Start_Button", "/Start_Button.webp");
  }

  create() {
    const buttonImage = this.add.image(400, 200, "Start_Button");
    buttonImage.setDisplaySize(100, 50);
    buttonImage.setInteractive();
    buttonImage.on("pointerdown", () => this.createMatch());

    const joinButton = this.add.text(400, 100, "Join Match")
    joinButton.setInteractive();
    joinButton.on("pointerdown", () => this.joinMatch());
  }

  createMatch(){
    this.scene.start("IN_CREATE");
  }

  joinMatch(){
    this.scene.start("IN_GAME");
  }
}