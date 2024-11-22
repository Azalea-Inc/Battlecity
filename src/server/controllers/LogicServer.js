import { MatchRepository } from "../../models/MatchRepository.js";
import { InCreateController } from "./InCreateController.js";
import { InGameController } from "./InGameController.js";
import { InLobyController } from "./InLobyController.js";

export class LogicServer {
  constructor() {
    this.matchRepository = new MatchRepository();

    this.inCreateController = new InCreateController(this.matchRepository);
    this.inLobyController = new InLobyController();
    this.inGameController = new InGameController();
  }

  getInGameController() {
    return this.inGameController;
  }

  getInCreateController() {
    return this.inCreateController;
  }
}
