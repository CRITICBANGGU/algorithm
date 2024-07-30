const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function main(str) {
    var idx = Number(str);
    for (let i = 0; i < idx; i++) {
        var result = '*'
        for (let j = 0; j < i; j++) {
            result += '*'
        }
        console.log(result)
    }
}

main(input);