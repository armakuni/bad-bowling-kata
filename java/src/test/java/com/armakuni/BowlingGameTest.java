package com.armakuni;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static java.util.stream.IntStream.rangeClosed;
import static org.junit.jupiter.api.Assertions.assertEquals;

class BowlingGameTest {

    private BowlingGame bowlingGame;

    @BeforeEach
    void setUp() {
        bowlingGame = new BowlingGame();
    }

    @Test
    void score_whenNoneOfThePinsFallForAnyRolls_shouldReturnScoreAsZero() {
        getTheGameRolling(20, 0);

        int score = bowlingGame.score();

        assertEquals(0, score);
    }

    @Test
    void score_whenForEveryRollOnlyTwoPinFall_shouldReturnScoreAs40() {
        getTheGameRolling(20, 2);

        int score = bowlingGame.score();

        assertEquals(40, score);
    }

    @Test
    void score_whenFirstFrameIsSpare_and9FramesHas0Pins_shouldReturnScoreAs10() {
        rollSpare();
        getTheGameRolling(18, 0);

        int score = bowlingGame.score();

        assertEquals(10, score);
    }

    @Test
    void score_whenAllFramesAreStrikes_shouldReturnScore300() {
        getTheGameRolling(12, 10);

        int score = bowlingGame.score();

        assertEquals(300, score);
    }

    private void getTheGameRolling(int rollingCount, int pin) {
        rangeClosed(1, rollingCount).forEach(i -> {
            rollPins(pin);
        });
    }

    private void rollSpare() {
        rollPins(5);
        rollPins(5);
    }

    private void rollPins(int i) {
        bowlingGame.roll(i);
    }
}
