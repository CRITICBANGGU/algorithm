const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function main(str) {
    var idx = Number(str);
    for (let i = 1; i <= idx; i++) {
        var result = '*';
        for (let k = 0; k < idx - i; k++) {
            result += '*'
        }
        console.log(result)
    }
}

main(input);