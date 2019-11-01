<?php
declare(strict_types=1);


namespace Armakuni\BadBowlingKata\Tests;

use Armakuni\BadBowlingKata\BowlingGame;
use PHPUnit\Framework\TestCase;

final class BowlingGameTest extends TestCase
{
    public function testGutterGame(): void
    {
        $game = new BowlingGame();

        $this->rollMany($game, 20, 0);

        $this->assertEquals(0, $game->score());
    }

    private function rollMany(BowlingGame $game, int $count, int $pins): void
    {
        foreach (range(1, $count) as $item) {
            $game->roll($pins);
        }
    }

    public function testAllOnes(): void
    {
        $game = new BowlingGame();

        $this->rollMany($game, 20, 1);

        $this->assertEquals(20, $game->score());
    }


    public function testSpare(): void
    {
        $game = new BowlingGame();

        $this->rollSpare($game);
        $this->rollMany($game, 18, 0);

        $this->assertEquals(10, $game->score());
    }

    private function rollSpare(BowlingGame $game): void
    {
        $game->roll(5);
        $game->roll(5);
    }

    public function testStrike(): void
    {
        $game = new BowlingGame();

        $this->rollStrike($game);
        $this->rollMany($game, 18, 0);

        $this->assertEquals(10, $game->score());
    }

    private function rollStrike(BowlingGame $game): void
    {
        $game->roll(10);
    }
}