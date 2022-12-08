// PARSING ========================
const fs = require("fs");
const data = fs.readFileSync("input-5.txt", { encoding: "utf8" });

// DIVIDE stacks and procedure
const [rawStacks, rawProcedure] = data.split(/\r?\n\r?\n/);

// PARSING for stacks
const stacksPart = rawStacks.split(/\n/);
stacksPart.pop();

// create an ordered  array from stacks
const stacks = [];

// let's add ordering
stacksPart.map((stack) => {
  for (let i = 1, index = 1; i < stack.length; i += 4, index++) {
    if (stack[i] !== " ") {
      stacks[index] = stacks[index] ?? [];
      stacks[index].push(stack[i]);
    }
  }
});

const stacksResult = stacks.map((stack) => stack.reverse());

//PARSING for procedure
const procedures = rawProcedure
  .trim()
  .split(/\r?\n/)
  .map((item) => [...item.match(/\d+/g)].map((num) => +num));

//PROCESSING ==========================
const getRearrangement = (procedures, stacksResult) => {
  procedures.forEach(([num, rowFrom, rowTo]) => {
    for (i = 1; i <= num; i++) {
      delToMove = stacksResult[rowFrom].pop();
      stacksResult[rowTo].push(delToMove);
    }
  });

  stacksResult.map((stack) => stack.splice(0, stack.length - 1));
  return stacksResult.flat().join("");
};

console.log(getRearrangement(procedures, stacksResult));
