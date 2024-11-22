export class Match {
  constructor() {
    this.players = [];
  }

  addPlayer(player) {
    const find = this.players.find((e) => e.id == player.id);
    if (find) return;
    this.players.push(player);
  }

  removePlayer(id) {
    this.players = this.players.filter((player) => player.id != id);
  }

  setPlayers(players) {
    this.players = players;
  }

  getPlayersNumber() {
    return this.players.length;
  }

  getPlayers() {
    return this.players;
  }

  moveLeft(id) {
    const exist = this.players.find((player) => player.id == id);
    if (!exist) return;
    exist.moveLeft();
    console.log(exist, this.players);
  }

  moveRight(id) {
    const exist = this.players.find((player) => player.id == id);
    if (!exist) return;
    exist.moveRight();
    console.log(exist, this.players);
  }
}
