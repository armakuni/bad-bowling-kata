const BowlingGame = require("./bowlingGame");

test("rolling a gutter game results in a score of 0", () => {
  let game = new BowlingGame();
  roll_many(game, 20, 0);
  expect(game.score()).toBe(0);
});

test("rolling a spare should result in a score of 10", () => {
  let game = new BowlingGame();
  roll_spare(game);
  roll_many(game, 18, 0);
  expect(game.score()).toBe(10);
});

test("rolling a single strike should result in a score of 10", () => {
  let game = new BowlingGame();
  roll_strike(game);
  roll_many(game, 18, 0);
  expect(game.score()).toBe(10);
});

test("rolling all 1's should result in a score of 20", () => {
  let game = new BowlingGame();
  roll_many(game, 20, 1);
  expect(game.score()).toBe(20);
});

const roll_strike = (game) => {
  game.roll(10);
};

const roll_spare = (game) => {
  game.roll(5);
  game.roll(5);
};

const roll_many = (game, count, pins) => {
  for (let roll = 0; roll < count; roll++) {
    game.roll(pins);
  }
};

// def test_all_ones(game: BowlingGame) -> None:
//     roll_many(game, count=20, pins=1)

//     assert game.score() == 20

// def test_normal_game(game: BowlingGame) -> None:
//     roll_many(game, count=1, pins=3)
//     roll_many(game, count=1, pins=4)
//     roll_many(game, count=1, pins=5)
//     roll_many(game, count=1, pins=2)
//     roll_many(game, count=1, pins=7)
//     roll_many(game, count=1, pins=1)
//     roll_many(game, count=14, pins=0)

//     assert game.score() == 22

// def test_strike(game: BowlingGame) -> None:
//     roll_strike(game)

//     roll_many(game, count=19, pins=0)

//     assert game.score() == 10

// def test_strike_then_score(game: BowlingGame) -> None:
//     roll_strike(game)
//     roll_many(game, count=1, pins=1)
//     roll_many(game, count=1, pins=2)
//     roll_many(game, count=16, pins=0)

//     assert game.score() == 16

// def test_score_then_strike(game: BowlingGame) -> None:
//     roll_many(game, count=1, pins=1)
//     roll_many(game, count=1, pins=2)
//     roll_strike(game)
//     roll_many(game, count=16, pins=0)

//     assert game.score() == 13

// def test_spare_then_score(game: BowlingGame) -> None:
//     roll_spare(game)
//     roll_many(game, count=1, pins=1)
//     roll_many(game, count=1, pins=2)
//     roll_many(game, count=16, pins=0)

//     assert game.score() == 14

// def test_score_then_spare(game: BowlingGame) -> None:
//     roll_many(game, count=1, pins=1)
//     roll_many(game, count=1, pins=2)
//     roll_spare(game)
//     roll_many(game, count=16, pins=0)

//     assert game.score() == 13

// def test_score_then_spare_then_score(game: BowlingGame) -> None:
//     roll_many(game, count=1, pins=1)
//     roll_many(game, count=1, pins=2)
//     roll_spare(game)
//     roll_many(game, count=1, pins=1)
//     roll_many(game, count=1, pins=2)
//     roll_many(game, count=14, pins=0)

//     assert game.score() == 17

// def test_all_spares(game: BowlingGame) -> None:
//     roll_many(game, count=1, pins=3)
//     roll_many(game, count=1, pins=7)
//     roll_many(game, count=1, pins=6)
//     roll_many(game, count=1, pins=4)
//     roll_many(game, count=1, pins=2)
//     roll_many(game, count=1, pins=8)
//     roll_many(game, count=1, pins=1)
//     roll_many(game, count=13, pins=0)

//     assert game.score() == 40
