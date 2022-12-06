// PARSING

const fs = require("fs");
const data = fs.readFileSync("input-4.txt", { encoding: "utf8" });

const pairs = data
  .trim()
  .split(/\r?\n/)
  .map((pair) =>
    pair.split(/,/).map((elf) =>
      elf
        .replace(/-/, ",")
        .split(/,/)
        .map((item) => +item)
    )
  );

// PROCESSING
// Part 1
const findFullyContains1 = (pair) => {
  if (
    (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
    (pair[1][0] >= pair[0][0] && pair[1][1] <= pair[0][1])
  ) {
    return true;
  }
};

const countFullyContainsPair1 = (pairs) => {
  let result = pairs.filter((pair) => findFullyContains1(pair));
  return result.length;
};

console.log(countFullyContainsPair1(pairs));

// Part 2
const findFullyContains2 = (pair) => {
  if (
    pair[0].some((num) => pair[1][0] <= num && num <= pair[1][1]) ||
    pair[1].some((num) => pair[0][0] <= num && num <= pair[0][1])
  ) {
    console.log(pair);
    console.log(pair[0]);
    console.log(pair[1]);
    return true;
  }
};

const countFullyContainsPair2 = (pairs) => {
  let result = pairs.filter((pair) => findFullyContains2(pair));
  return result.length;
};

console.log(countFullyContainsPair2(pairs));
