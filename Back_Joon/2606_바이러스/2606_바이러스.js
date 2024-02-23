const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let graph = new Array(Number(input[0]) + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

for (let i = 0; i < input.length - 2; i++) {
  let [from, to] = input[i + 2].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

function bfs() {
  const queue = [1];
  const seen = {};
  const result = [];
  seen[1] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode);
    const neighbors = graph[currentNode];
    for (const neighbor of neighbors) {
      if (!seen[neighbor]) {
        queue.push(neighbor);
        seen[neighbor] = true;
      }
    }
  }
  return result.length - 1;
}
console.log(bfs);
