const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

// 길이가 짧은 것부터
// 길이가 같으면 사전 순으로
// 단, 중복된 단어는 하나만 남기고 제거해야 한다.
input.splice(0, 1)
const solution = arr => {
    var s_arr = [...new Set(arr)]

    return s_arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')
}

console.log(solution(input))