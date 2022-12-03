// PARSING

const fs = require("fs");
const data = fs.readFileSync("input-3.txt", { encoding: "utf8" });

const rucksacks = data.trim().split(/\r?\n/);

// PROCESSING

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
const alphabet = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const getSumPriorities = (rucksacks) => {
  return rucksacks.reduce((acc, ruck) => {
    const ruckLength = ruck.length;

    let firstCompartment = [...ruck.slice(0, ruckLength / 2)];
    let secondCompartment = [...ruck.slice(ruckLength / 2, ruckLength)];

    const commonLetter = firstCompartment.find((letter) =>
      secondCompartment.includes(letter)
    );
    ruckPriorities = alphabet.indexOf(commonLetter) + 1;

    return acc + ruckPriorities;
  }, 0);
};

console.log(getSumPriorities(rucksacks));
