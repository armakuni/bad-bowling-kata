<?php


namespace Armakuni\BadBowlingKata;


class BowlingGame
{
    /**
     * @var array
     */
    private $rolls;

    /**
     * BowlingGame constructor.
     */
    public function __construct()
    {
        $this->rolls = [];
    }

    public function roll(int $pins): void
    {
        $this->rolls[] = $pins;
    }

    public function score(): int
    {
        $score = 0;
        $nextScoredRoll = 0;

        foreach (range(1, 10) as $frame) {
            $frameScore = 0;
            if ($this->rolls[$nextScoredRoll] == 10) {
                $frameScore += $this->rolls[$nextScoredRoll];
                $frameScore += $this->rolls[$nextScoredRoll + 1];
                $frameScore += $this->rolls[$nextScoredRoll + 1];
                $nextScoredRoll += 1;
            } elseif (($this->rolls[$nextScoredRoll] + $this->rolls[$nextScoredRoll + 1]) == 10) {
                $frameScore += $this->rolls[$nextScoredRoll];
                $frameScore += $this->rolls[$nextScoredRoll + 1];
                $frameScore += $this->rolls[$nextScoredRoll + 2];
                $nextScoredRoll += 1;
                $nextScoredRoll += 1;
            } else {
                $frameScore += $this->rolls[$nextScoredRoll];
                $frameScore += $this->rolls[$nextScoredRoll + 1];
                $nextScoredRoll += 1;
                $nextScoredRoll += 1;
            }

            $score += $frameScore;
        }

        return $score;
    }
}
