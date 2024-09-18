export class Player {
    constructor() {
        this.health = 100;
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
}