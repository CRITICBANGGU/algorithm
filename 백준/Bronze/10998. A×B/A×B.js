const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

function main(arr) {
    console.log(arr[0] * arr[1])
}

main(input)