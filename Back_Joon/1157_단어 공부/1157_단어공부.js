const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const wordStudy = (str) => {
  let lowStr = str.toLowerCase();
  let obj = {};
  //글자수 세기
  for (const letter of lowStr) {
    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter] += 1;
    }
  }

  let result = "";
  let count = 0;

  for (const char in obj) {
    if (obj[char] > count) {
      count = obj[char];
      result = char.toUpperCase();
    } else if (obj[char] === count) {
      result = "?";
    }
  }
  console.log(result);
};

wordStudy(input[0]);
