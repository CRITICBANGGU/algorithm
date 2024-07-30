const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1)
}

function main(str) {
    var number = Number(str);
    console.log(fact(number))
}
main(input);