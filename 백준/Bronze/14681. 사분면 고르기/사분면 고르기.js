const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);
function main(arr) {
    var [x, y] = arr;
    if (x > 0 && y > 0) console.log(1);
    else if (x > 0 && y < 0) console.log(4);
    else if (x < 0 && y > 0) console.log(2)
    else console.log(3);

}

main(input)