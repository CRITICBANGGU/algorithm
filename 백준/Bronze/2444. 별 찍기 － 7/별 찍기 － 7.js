const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function main(str) {
    var idx = Number(str);
    for (let i = 0; i < idx - 1; i++) {
        var result = '';
        for (let j = 1; j < idx - i; j++) {
            result += ' ';
        }
        for (let k = 0; k < i; k++) {
            result += '*'
        }
        for (let p = 0; p <= i; p++) {
            result += '*'
        }
        console.log(result)
    }
    for (let i = 1; i <= idx; i++) {
        var result = '';
        for (let j = 1; j < i; j++) {
            result += ' ';
        }
        for (let k = 0; k <= idx - i; k++) {
            result += '*'
        }
        for (let p = 0; p < idx - i; p++) {
            result += '*'
        }
        console.log(result)
    }
}

main(input);