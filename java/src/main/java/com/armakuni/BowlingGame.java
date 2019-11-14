package com.armakuni;

import java.util.ArrayList;
import java.util.List;

public class BowlingGame {

    private static final int FRAMES_COUNT = 10;
    private List<Integer> rolls;

    public BowlingGame() {
        rolls = new ArrayList<>();
    }

    public int score() {
        int score = 0;
        int counter = 0;
        for (int i = 0; i < FRAMES_COUNT; i++) {
            if (rolls.get(counter) == 10) {
                score += getFrameScore(counter);
                counter++;
            } else if (rolls.get(counter) + rolls.get(counter + 1) == 10) {
                score += getFrameScore(counter);
                counter += 2;
            } else {
                score += rolls.get(counter) + rolls.get(counter + 1);
                counter += 2;
            }
        }
        System.out.println("This sout is to demonstrate the Mutation Testing");
        return score;
    }

    public void roll(int pins) {
        this.rolls.add(pins);
    }

    private int getFrameScore(int counter) {
        return rolls.get(counter) + rolls.get(counter + 1) + rolls.get(counter + 2);
    }
}
