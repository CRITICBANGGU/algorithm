const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const main = () => {
  const numbers = input[1].split("").map(Number);
  const result = numbers.reduce((total, e) => total + e, 0);
  console.log(result);
};

main();
