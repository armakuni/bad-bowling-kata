class BowlingGame:
    _rolls: list[int]

    def __init__(self) -> None:
        self._rolls = []

    def roll(self, pins: int) -> None:
        self._rolls.append(pins)

    def score(self) -> int:
        score = 0
        next_scored_roll = 0

        for _ in range(10):
            frame_score = 0

            if self._rolls[next_scored_roll] == 10:
                frame_score += self._rolls[next_scored_roll]
                frame_score += self._rolls[next_scored_roll + 1]
                frame_score += self._rolls[next_scored_roll + 1]
                next_scored_roll += 1
            elif (
                self._rolls[next_scored_roll] + self._rolls[next_scored_roll + 1] == 10
            ):
                frame_score += self._rolls[next_scored_roll]
                frame_score += self._rolls[next_scored_roll + 1]
                frame_score += self._rolls[next_scored_roll + 2]
                next_scored_roll += 1
                next_scored_roll += 1
            else:
                frame_score += self._rolls[next_scored_roll]
                frame_score += self._rolls[next_scored_roll + 1]
                next_scored_roll += 1
                next_scored_roll += 1

            score += frame_score

        return score
