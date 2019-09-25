class BowlingGame:
    def __init__(self):
        self.rolls = []

    def roll(self, pins):
        self.rolls.append(pins)

    def score(self):
        score = 0
        next_scored_roll = 0

        for _ in range(10):
            frame_score = 0

            if self.rolls[next_scored_roll] == 10:
                frame_score += self.rolls[next_scored_roll]
                frame_score += self.rolls[next_scored_roll + 1]
                frame_score += self.rolls[next_scored_roll + 1]
                next_scored_roll += 1
            elif self.rolls[next_scored_roll] + self.rolls[next_scored_roll + 1] == 10:
                frame_score += self.rolls[next_scored_roll]
                frame_score += self.rolls[next_scored_roll + 1]
                frame_score += self.rolls[next_scored_roll + 2]
                next_scored_roll += 1
                next_scored_roll += 1
            else:
                frame_score += self.rolls[next_scored_roll]
                frame_score += self.rolls[next_scored_roll + 1]
                next_scored_roll += 1
                next_scored_roll += 1

            score += frame_score

        return score
