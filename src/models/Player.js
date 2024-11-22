export class Player {
  constructor(x, y) {
    this.health = 100;
    this.angle = 0;
    this.x = x;
    this.y = y;
    this.speed = 150;
  }

  setId(id) {
    this.id = id;
  }

  damage() {
    this.health -= 25;
  }

  heal() {
    this.health += 25;
  }

  getHealth() {
    return this.health;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }
}
