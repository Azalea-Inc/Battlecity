import { Match } from "../../models/Match.js";
import { Player } from "../../models/Player.js";

export class InGameController {
  constructor() {
    this.match = new Match();
  }

  getPlayer(id){
    return this.match.getPlayer(id);
  }

  getPlayersNumber() {
    return this.match.getPlayersNumber();
  }

  addPlayer(id) {
    const find = this.getPlayers().find((e) => e.id == id);

    if(find) throw new Error("Usuario existente");

    const player = new Player((this.getPlayersNumber() + 1) * 100, 100);
    console.log(player)
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

  moveUp(id){
    this.match.moveUp(id);
  }
  
  moveDown(id){
    this.match.moveDown(id);
  }

  rotateLeft(id) {
    this.match.rotateLeft(id);
  }

  rotateRight(id) {
    this.match.rotateRight(id);
  }

  getPlayers() {
    return this.match.getPlayers();
  }

  removePlayer(id) {
    this.match.removePlayer(id);
  }
}
