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

  getPlayer(id){
    return this.players.find((e) => e.id == id)
  }

  moveLeft(id) {
    const exist = this.players.find((player) => player.id == id);
    if (!exist) return;
    exist.moveLeft();
  }

  moveRight(id) {
    const exist = this.players.find((player) => player.id == id);
    if (!exist) return;
    exist.moveRight();
  }

  moveUp(id) {
    const exist = this.players.find((player) => player.id == id);
    if (!exist) return;
    exist.moveUp();
  }

  moveDown(id) {
    const exist = this.players.find((player) => player.id == id);
    if (!exist) return;
    exist.moveDown();
  }

  rotateLeft(id) {
    const exist = this.players.find((player) => player.id == id);
    if (!exist) return;
    exist.rotateLeft();
  }

  rotateRight(id) {
    const exist = this.players.find((player) => player.id == id);
    if (!exist) return;
    exist.rotateRight();
  }
}
