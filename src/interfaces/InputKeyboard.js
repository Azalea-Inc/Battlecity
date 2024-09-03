

export class InputKeyboard{
    constructor(scene, controller){
        this.scene = scene;
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.controller = controller;
    }


    execute(){
        if (this.cursors.left.isDown) {
            console.log("Movimiento hacia la izquierda");
            this.controller.moveLeft();
          } else if (this.cursors.right.isDown) {
            console.log("Movimiento hacia la derecha");
            this.controller.moveRight();
          } else if (this.cursors.up.isDown) {
            
          } else if (this.cursors.down.isDown) {
            
          }  
    }
}