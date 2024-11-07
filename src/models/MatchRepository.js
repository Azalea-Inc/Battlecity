export class MatchRepository {
  constructor() {
    this.matches = [];
  }

  add(match) {
    this.matches.push(match);
  }

  getMatches() {
    return this.matches;
  }

  getMatch(id) {
    return this.matches.find((match) => match.id == id);
  }
}
