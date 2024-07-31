const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let testCase = input[0];
function binary(num) {
    var arr = [];
    while (num >= 1) {
        arr.push(num % 2);
        num = Math.floor(num / 2);
    }
    return arr;
}
function main() {
    for (let i = 1; i <= testCase; i++) {
        var binary_num = binary(input[i]);
        var idx = [];
        while (binary_num.length != 0) {
            if (binary_num.pop()) idx.push(binary_num.length);
        }
        console.log(idx.reverse().join(' '))
    }
}
main();