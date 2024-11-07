import { Match } from "../../models/Match.js";

export class InCreateController {
  constructor(matchRepository) {
    this.matchRepository = matchRepository;
  }

  createMatch() {
    const match = new Match();
    this.matchRepository.add(match);
  }
}
