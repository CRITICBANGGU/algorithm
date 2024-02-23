const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const getRoomNumber = (hwn) => {
  let floor = Math.floor(hwn[2] % hwn[0]) * 100;
  let num = Math.floor(hwn[2] / hwn[0]) + 1;
  console.log((floor + num).toString());
};

const main = () => {
  for (let i = 1; i < input.length; i++) {
    const HWN = input[i].split(" ").map(Number);
    getRoomNumber(HWN);
  }
};
main();
