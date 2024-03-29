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

## Continue in your language

- [Python](python/README.md)
- [PHP](php/README.md)
- [Java](java/README.md)
- [JavaScript](javascript/README.md)
