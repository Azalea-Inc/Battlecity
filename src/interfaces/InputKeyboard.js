export class InputKeyboard {
  constructor(scene) {
    this.scene = scene;
    this.events = this.scene.input.keyboard.createCursorKeys();
  }
}
