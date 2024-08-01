const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
var queue = new Array();
var answer = [];
for (let i = 0; i < Number(input[0]); i++) {
    var command = input[i + 1].split(' ');
    switch (command[0]) {
        case 'push':
            queue.push(Number(command[1]));
            break;
        case 'front':
            answer.push(queue[0] || -1);
            break;
        case 'back':
            answer.push(queue[queue.length - 1] || -1);
            break;
        case 'pop':
            answer.push(queue.shift() || -1);
            break;
        case 'size':
            answer.push(queue.length)
            break;
        case 'empty':
            answer.push(queue[0] ? 0 : 1)
            break;
        default:
            break;
    }
}
console.log(answer.join('\n'))