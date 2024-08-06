const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
function main(arr) {
    var [x, y, z] = arr;
    var multi = x * y * z;
    var newArr = multi.toString().split('').map(Number);
    var result = new Array(10).fill(0);
    for (let i = 0; i < result.length; i++) {
        newArr.forEach((e) => { if (i === e) result[i] += 1 });
        console.log(result[i]);
    }


}

main(input)