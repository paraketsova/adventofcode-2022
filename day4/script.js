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

const findFullyContains = (pair) => {
  if (
    (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
    (pair[1][0] >= pair[0][0] && pair[1][1] <= pair[0][1])
  ) {
    return true;
  }
};

const countFullyContainsPair = (pairs) => {
  let result = pairs.filter((pair) => findFullyContains(pair));
  return result.length;
};

console.log(countFullyContainsPair(pairs));
