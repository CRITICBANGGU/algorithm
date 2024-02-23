const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const main = () => {
  for (let i = 1; i < input.length; i++) {
    let testCase = input[i].split(" ");
    testCase[0] = Number(testCase[0]);
    let result = "";
    for (const char of testCase[1]) {
      for (let j = 0; j < testCase[0]; j++) {
        result += char;
      }
    }
    console.log(result);
  }
};
main();
