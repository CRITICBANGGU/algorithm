const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
const alphabets = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
rl.on("line", (line) => {
  let input = [];
  input = line.split("");
  for (let i = 0; i < input.length; ++i) {
    for (let key in alphabets) {
      if (key.includes(input[i])) {
        sum += alphabets[key];
      }
    }
  }
}).on("close", () => {
  console.log(sum);
});
