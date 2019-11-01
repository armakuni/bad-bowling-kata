# Mutation Testing: The Bowling Kata

Evaluating the quality of tests using mutation testing. This is a repository with an implementation of the bowling kata. 

The the bowling kata is:

Create a class with 2 methods:
 - roll(self, pins)
 - score(self)

The rules for scoring are as follows
* A game is 10 frames
* Each frame can have up to 2 rolls
* A spare is when you knock down all pins in a frame
* A strike is when you knock down all pins in the first roll of a frame
* The score for a frame is the number of pins knocked down
* If a spare is scored, the next roll is added as a bonus
* If a strike is scored, the next 2 rolls are added as a bonus
* A perfect game is 12 successive strikes and score 300 points

Unfortunately this implementation has a bug in it!

Your task is to improve the tests until you find the bug using mutation testing.

## Getting Set Up

We're going to use infection to run our mutation tests, which is built into the composer.json

```shell
composer install
```

## The Challenge

### Run this for the bowling game

Run 

```shell
vendor/bin/infection
```

and open `infection.log`

1. Improve the tests until the all the mutations you can are fixed
2. Find the mutation that is a false positive

### Run this for any code you have written this week

1. What do you see?
2. Fix the tests
