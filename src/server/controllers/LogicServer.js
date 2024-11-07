import { MatchRepository } from "../../models/MatchRepository.js";
import { InCreateController } from "./InCreateController.js";
import { InLobyController } from "./InLobyController.js";

export class LogicServer {
  constructor() {
    this.matchRepository = new MatchRepository();

    this.inCreateController = new InCreateController(this.matchRepository);
    this.inLobyController = new InLobyController();
  }

  getInCreateController() {
    return this.inCreateController;
  }
}
