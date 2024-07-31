const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('');
function main() {
    var arr = [];
    for (let i = 0; i < input.length; i++) {
        var toASCII = input[i].charCodeAt(0) - 3;
        if (toASCII < 65) toASCII += 26;
        arr.push(String.fromCharCode(toASCII))
    }
    console.log(arr.join(''))
}
main();