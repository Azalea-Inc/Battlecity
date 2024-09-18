export class Game {
  constructor() {
    this.players = [];
  }

  setPlayers(players) {
    this.players = players;
  }

  getPlayers() {
    return this.players;
  }
}
