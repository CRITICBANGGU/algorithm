const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');


function main(arr) {
    for (let i = 1; i < arr.length; i++) {
        var test = arr[i].split(' ');
        var arr2 = new Array();
        for (let j = 0; j < test.length; j++) {
            arr2.push(test[j].split('').reverse().join(''))
        }
        console.log(arr2.join(' '))
    }
}

main(input)