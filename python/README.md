# Mutation Testing: The Bowling Kata

Evaluating the quality of tests using mutation testing. This is a repository with an implementation of the bowling kata.

The the bowling kata is:

Create a class with 2 methods:

- roll(self, pins)
- score(self)

The rules for scoring are as follows

- A game is 10 frames
- Each frame can have up to 2 rolls
- A spare is when you knock down all pins in a frame
- A strike is when you knock down all pins in the first roll of a frame
- The score for a frame is the number of pins knocked down
- If a spare is scored, the next roll is added as a bonus
- If a strike is scored, the next 2 rolls are added as a bonus
- A perfect game is 12 successive strikes and score 300 points

Unfortunately this implementation has a bug in it!

Your task is to improve the tests until you find the bug using mutation testing.

## Getting Set Up

We're going to use mut.py to run our mutation tests. There are a LOT of options for mutation testing in python, if you find a better one, tell me about it.

First check you have pipenv installed

```
command -v pipenv || pip install --user pipenv
```

Installing mut.py into the environment

```shell
pipenv install --dev mutpy
```

## First Experimentation

Running mut.py

```shell
pipenv run mut.py -c -e -m --runner pytest -t bowling_game -u test_bowling_game --report-html html
```

- `-c` makes the output coloured
- `-e` includes experimental mutations
- `-m` prints the mutations to screen
- `--runner pytest` tells it to use pytest to run the mutations
- `-t bowling_game` tells it to mutate the bowling game module
- `-u test_bowling_game` tells it to run the test_bowling_game module to check that it works
- `--report-html html` writes the results to the html directory for viewing (open `html/index.html` for a nice output)

## The Challenge

### Run this for the bowling game

Run

```shell
pipenv run mut.py -c -e -m --runner pytest -t bowling_game -u test_bowling_game --report-html html
```

and open `html/index.html`

1. Improve the tests until the all the mutations you can are fixed
2. Find the mutation that is a false positive

### Run this for any code you have written this week

1. What do you see?
2. Fix the tests
