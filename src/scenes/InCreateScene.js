import { Scene } from "phaser";

export class InCreateScene extends Scene {
  
  constructor(){
    super("IN_CREATE")
  }
  
  preload() {
    
  }

  create() {
    const buttonReturn = this.add.text(300, 300, "InCreate", {fill : '#0f0'});

    buttonReturn.setInteractive();

    buttonReturn.on("pointerdown", () => this.returnToTitleScreen());
  }

  returnToTitleScreen(){
    this.scene.start("IN_LOBBY");
  }
}