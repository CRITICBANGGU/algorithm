const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 K(≤ N)가 주어진다.
// 이제 순서대로 K번째 사람을 제거한다.한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
// 이 과정은 N명의 사람이 모두 제거될 때까지 계속된다.
//원에서 사람들이 제거되는 순서를(N, K) - 요세푸스 순열이라고 한다.예를 들어(7, 3) - 요세푸스 순열은 < 3, 6, 2, 7, 5, 1, 4 > 이다.
// N과 K가 주어지면(N, K) - 요세푸스 순열을 구하는 프로그램을 작성하시오.
// 1, 2, 3, 4, 5, 6, 7

var answer = [];
function main(N, K) {
    var permutation = new Array(N).fill().map((_, i) => i + 1);
    var count = K;
    var newArr = [];
    while (newArr.length < N) {
        while (count > permutation.length) {
            count -= permutation.length
        }
        newArr.push(permutation.splice(count - 1, 1)[0])
        count += K - 1;
    }
    console.log('<' + newArr.join(', ') + '>')
}

main(input[0], input[1])