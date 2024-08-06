const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
function main(arr) {
    // 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
    var [a, b, c] = arr;
    console.log((a + b) % c);
    console.log(((a % c) + (b % c)) % c);
    console.log(a * b % c);
    console.log(a % c * b % c % c);
}

main(input)