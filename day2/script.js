// PARSING
const fs = require("fs");
const data = fs.readFileSync("input-2.txt", { encoding: "utf8" });

const chunks = data.trim().split(/\r?\n/);
let rounds = chunks.map((round) => [...round].filter((item) => item !== " "));

// PROCESSING
const getScore = (rounds) => {
  let sample = {
    X: 1, //rock
    Y: 2, //paper
    Z: 3, //scissors
  };

  // A > Z, B > X, C > Y, X > C, Y > A, Z > B
  // A = X, B = Y, C = Z
  // won = 6, lose = 0, draw = 3

  const getPoints = (round) => {
    let addNumber = 0;
    if (round[0] === "A") {
      if (round[1] === "Y") {
        addNumber = 6;
      } else if (round[1] === "X") {
        addNumber = 3;
      } else {
        addNumber = 0;
      }
    }
    if (round[0] === "B") {
      if (round[1] === "Z") {
        addNumber = 6;
      } else if (round[1] === "Y") {
        addNumber = 3;
      } else {
        addNumber = 0;
      }
    }
    if (round[0] === "C") {
      if (round[1] === "X") {
        addNumber = 6;
      } else if (round[1] === "Z") {
        addNumber = 3;
      } else {
        addNumber = 0;
      }
    }

    round = round.push(addNumber);
    return round;
  };

  const countPoints = rounds.map((round) => {
    getPoints(round);
    return sample[round[1]] + round[2];
  });

  return countPoints.reduce((acc, n) => acc + n, 0);
};

console.log(getScore(rounds));
