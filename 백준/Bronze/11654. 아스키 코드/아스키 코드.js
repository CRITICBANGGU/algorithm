const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('');
function main(arr) {
    var [x] = arr
    console.log(x.charCodeAt());

}

main(input)