# Mutation Testing: The Bowling Kata

Evaluating the quality of tests using mutation testing. This is a
repository with an implementation of the bowling kata.

The the bowling kata is:

Create a class with 2 methods:

- roll(self, pins)
- score(self)

The rules for scoring are as follows

- A game is 10 frames
- Each frame can have up to 2 rolls
- A spare is when you knock down all pins in a frame
- A strike is when you knock down all pins in the first roll of a
  frame
- The score for a frame is the number of pins knocked down
- If a spare is scored, the next roll is added as a bonus
- If a strike is scored, the next 2 rolls are added as a bonus
- A perfect game is 12 successive strikes and score 300 points

Unfortunately this implementation has a bug in it!

Your task is to improve the tests until you find the bug using mutation
testing.

## Getting Set Up

We're going to use Stryker to run our mutation tests.

Firstly, check that you have NodeJS installed.

    node --version

Ensure this is 22.2.0 or greater.

NOTE: If you get a permission denied exception it's because you don't have full permssions at /usr/local/lib/node_modules. Prepending 'sudo' will solve this.

Installing dependencies

```shell
npm install
```

## First Experimentation

Running Stryker

```shell
npm run mutate
```

## The Challenge

### Run this for the bowling game

Run

```shell
npm run mutate
```

and run

```
open reports/mutation/html/index.html
```

1.  Improve the tests until the all the mutations are fixed
