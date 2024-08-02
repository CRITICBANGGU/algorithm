const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
var stack = new Array();
var answer = [];
for (let i = 0; i < Number(input[0]); i++) {
    var command = input[i + 1].split(' ');
    switch (command[0]) {
        case 'push':
            stack.push(Number(command[1]));
            break;
        case 'pop':
            answer.push(stack.pop() || -1);
            break;
        case 'size':
            answer.push(stack.length)
            break;
        case 'empty':
            answer.push(stack[0] ? 0 : 1)
            break;
        case 'top':
            answer.push(stack[stack.length - 1] ? stack[stack.length - 1] : -1)
            break;
        default:
            break;
    }
}
console.log(answer.join('\n'))