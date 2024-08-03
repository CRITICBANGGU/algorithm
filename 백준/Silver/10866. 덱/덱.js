const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
var stack = new Array();
var answer = [];
for (let i = 0; i < Number(input[0]); i++) {
    var command = input[i + 1].split(' ');
    switch (command[0]) {
        case 'push_front':
            stack.unshift(command[1]);
            break;
        case 'push_back':
            stack.push(command[1]);
            break;
        case 'pop_front':
            answer.push(stack.shift() || -1);
            break;
        case 'pop_back':
            answer.push(stack.pop() || -1);
            break;
        case 'size':
            answer.push(stack.length)
            break;
        case 'empty':
            answer.push(stack[0] ? 0 : 1)
            break;
        case 'front':
            answer.push(stack[0] ? stack[0] : -1)
            break;
        case 'back':
            answer.push(stack[stack.length - 1] ? stack[stack.length - 1] : -1)
            break;
        default:
            break;
    }
}
console.log(answer.join('\n'))