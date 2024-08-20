import { Scene } from "phaser";

export class InLobbyScene extends Scene {
  
  constructor(){
    super("IN_LOBBY")
  }
  
  preload() {
    
  }

  create() {
    const buttonReturn = this.add.text(300, 300, "InLobby", {fill : '#0f0'});
    buttonReturn.setInteractive();

    buttonReturn.on("pointerdown", () => this.returnToTitleScreen());
  }

  returnToTitleScreen(){
    this.scene.start("IN_GAME");
  }
}