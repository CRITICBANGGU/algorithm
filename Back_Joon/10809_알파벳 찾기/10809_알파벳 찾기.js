const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const main = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const checkChar = str[i];
    if (!(checkChar in obj)) {
      obj[checkChar] = i;
    }
  }
  const result = [];
  for (let char = "a".charCodeAt(); char <= "z".charCodeAt(); char++) {
    let i = String.fromCharCode(char);
    obj[i] > -1 ? result.push(obj[i]) : result.push(-1);
  }
  console.log(result.join(" "));
};

main(input);
