# Mutation Testing: The Bowling Kata

Evaluating the quality of tests using mutation testing. This is a repository with an implementation of the bowling kata.

The the bowling kata is:

Create a class with 2 methods:
 - `roll(int pins) : void`
 - `score(): int `

The rules for scoring are as follows
* A game is 10 frames
* Each frame can have up to 2 rolls
* A spare is when you knock down all pins in a frame
* A strike is when you knock down all pins in the first roll of a frame
* The score for a frame is the number of pins knocked down
* If a spare is scored, the next roll is added as a bonus
* If a strike is scored, the next 2 rolls are added as a bonus
* A perfect game is 12 successive strikes and score 300 points

Still unsure of the rules & how to calculate the score, refer :
https://www.youtube.com/watch?v=aBe71sD8o8c

Unfortunately this implementation has a bug in it!

Your task is to improve the tests until you find the bug using mutation testing.

## Getting Set Up

We're going to use pitest to run out mutation tests built using gradle in our project<br/>
Import java directory as project in your IDE, You might see errors in the classes (lib not in classpath etc) fix them
with IDE Autosuggestion.<br/>
Run All the tests from IDE.If you see an error "No Test found" then delete the test.imi file generated.


## The Challenge

### Run this for the bowling game
We will use CLI & execute gradle wrapper commands to run the tests

```
./gradlew clean build
```

Generate Jacoco Coverage Report to check the code coverage
```
./gradlew jacocoTestReport
```
The jacoco report should have been generated under relative path.

```
/java/build/reports/jacoco/index.html
```

Open the Index.html to see the code coverage.

All looks Good!

Now lets run Mutation Test, execute below command

```
./gradlew pitest
```

Out Mutation Test Report should get generated at relative Path
```
java/build/reports/pitest/{TIMESTAMP}/index.html
```

Open the report to see if there is any mutation failure which were not recognized by our code coverage.

1. Improve the tests until the all the mutations are fixed
2. Find the mutation that is a false positive

### Run this for any code you have written this week

1. What do you see?
2. Fix the tests

Hint : There are few Unit Tests available if in case you need some help to fix the Mutation Test at:
java/build/resources/test/test-help.txt