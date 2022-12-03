// PARSING
const fs = require("fs");
const data = fs.readFileSync("input-2.txt", { encoding: "utf8" });

const rounds = data.trim().split(/\r?\n/);

// PROCESSING
const getScore = (rounds) => {
  const points = {
    "A X": 3,
    "A Y": 1 + 3,
    "A Z": 2 + 6,
    "B X": 1,
    "B Y": 2 + 3,
    "B Z": 3 + 6,
    "C X": 2,
    "C Y": 3 + 3,
    "C Z": 1 + 6,
  };
  // A= 1 for Rock, B=2 for Paper, and C=3 for Scissors
  // X = lose(0), Y = draw(3), Z = win(6).

  const countPoints = rounds
    .map((round) => points[round])
    .reduce((acc, n) => acc + n, 0);
  return countPoints;
};

console.log(getScore(rounds));
