const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const main = () => {
  let changeNumber = input.map(Number);
  console.log(Math.max(...changeNumber));
  console.log(input.indexOf(Math.max(...changeNumber).toString()) + 1);
};

main();
