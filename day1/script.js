// PARSING

const fs = require("fs");
const data = fs.readFileSync("input-1.txt", { encoding: "utf8" });

const chunks = data.trim().split(/\r?\n\r?\n/);
const calories = chunks.map((elf) => elf.split(/\r?\n/).map((num) => +num));

// PROCESSING

const getBiggestCalories = (calories) => {
  const elfCalories = calories.map((elf) =>
    elf.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );

  const topThreeElfCalories = elfCalories
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return topThreeElfCalories;
};

console.log(getBiggestCalories(calories));
