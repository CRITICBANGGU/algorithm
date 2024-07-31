const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
function main() {
    var subArr = input[1].split(' ').map(Number);
    if (subArr.length === 1) console.log(subArr[0] * subArr[0])
    else {
        var min = Math.min(...subArr);
        var max = Math.max(...subArr)
        console.log(min * max);
    }
}
main();