import pytest

from bowling_game import BowlingGame


@pytest.fixture
def game() -> BowlingGame:
    return BowlingGame()


def test_gutter_game(game: BowlingGame) -> None:
    roll_many(game, count=20, pins=0)

    assert game.score() == 0


def test_all_ones(game: BowlingGame) -> None:
    roll_many(game, count=20, pins=1)

    assert game.score() == 20


def test_spare(game: BowlingGame) -> None:
    roll_spare(game)

    roll_many(game, count=18, pins=0)

    assert game.score() == 10


def test_strike(game: BowlingGame) -> None:
    roll_strike(game)

    roll_many(game, count=19, pins=0)

    assert game.score() == 10


def roll_strike(game: BowlingGame) -> None:
    game.roll(10)


def roll_spare(game: BowlingGame) -> None:
    game.roll(5)
    game.roll(5)


def roll_many(game: BowlingGame, count: int, pins: int) -> None:
    for roll in range(count):
        game.roll(pins)
