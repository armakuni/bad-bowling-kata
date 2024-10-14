class BowlingGame {
  _rolls = [];

  constructor() {
    this._rolls = [];
  }

  roll(pins) {
    this._rolls.push(pins);
  }

  score() {
    let score = 0;
    let nextScoredRoll = 0;

    for (let i = 0; i < 10; i++) {
      let frameScore = 0;
      if (this._rolls[nextScoredRoll] == 10) {
        frameScore += this._rolls[nextScoredRoll];
        frameScore += this._rolls[nextScoredRoll + 1];
        frameScore += this._rolls[nextScoredRoll + 1];
        nextScoredRoll++;
      } else if (
        this._rolls[nextScoredRoll] + this._rolls[nextScoredRoll + 1] ===
        10
      ) {
        frameScore += this._rolls[nextScoredRoll];
        frameScore += this._rolls[nextScoredRoll + 1];
        frameScore += this._rolls[nextScoredRoll + 2];
        nextScoredRoll += 2;
      } else {
        frameScore += this._rolls[nextScoredRoll];
        frameScore += this._rolls[nextScoredRoll + 1];
        nextScoredRoll += 2;
      }
      score += frameScore;
    }

    return score;
  }
}

module.exports = BowlingGame;
