const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function main() {
    var sum = 0;
    var result = input.filter((e) => e % 2 != 0)
    if (!result.length) return console.log(-1);
    result.forEach((e) => sum += e)
    console.log(sum)
    console.log(Math.min(...result))
}
main();