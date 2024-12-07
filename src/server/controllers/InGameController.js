import { Match } from "../../models/Match.js";
import { Player } from "../../models/Player.js";

export class InGameController {
  constructor() {
    this.match = new Match();
  }

  getPlayersNumber() {
    return this.match.getPlayersNumber();
  }

  addPlayer(id) {
    const player = new Player(this.getPlayersNumber() * 100, 100);
    player.setId(id);
    this.match.addPlayer(player);
    return player;
  }

  moveLeft(id) {
    this.match.moveLeft(id);
  }

  moveRight(id) {
    this.match.moveRight(id);
  }

  getPlayers() {
    return this.match.getPlayers();
  }

  removePlayer(id) {
    this.match.removePlayer(id);
  }

  setPlayer(player) {
    this.match.setPlayer(player);
  }
}
