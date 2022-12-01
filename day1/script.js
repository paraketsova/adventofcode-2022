// PARSING

const fs = require("fs");
const data = fs.readFileSync("input-1.txt", { encoding: "utf8" });

const chunks = data.trim().split(/\r?\n\r?\n/);
const calories = chunks.map((elf) => elf.split(/\r?\n/).map((num) => +num));

// PROCESSING

const getBiggestCalories = (calories) => {
  const elfCalories = calories.map((elf) => elf.reduce((a, b) => a + b));
  return Math.max(...elfCalories);
};

console.log(getBiggestCalories(calories));
