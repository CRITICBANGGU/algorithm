const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const main = () => {
  const number = input[1].split(" ").map(Number);
  console.log(`${Math.min(...number)} ${Math.max(...number)}`);
};

main();
