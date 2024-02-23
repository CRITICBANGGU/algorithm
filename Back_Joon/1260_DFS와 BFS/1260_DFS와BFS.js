const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function dfsRecursive(graph, currentNode, visited, result) {
  result.push(currentNode);
  visited[currentNode] = true;

  const neighbors = graph[currentNode];
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      dfsRecursive(graph, neighbor, visited, result);
    }
  }
}

function bfs(graph, startNode) {
  const queue = [startNode];
  const seen = {};
  const result = [];

  seen[startNode] = true;
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
  return result;
}

function DFSnBFS(graph, startNode) {
  const visited = {};
  const resultDFS = [];
  dfsRecursive(graph, startNode, visited, resultDFS);
  const resultBFS = bfs(graph, startNode);
  console.log(resultDFS.join(" "));
  console.log(resultBFS.join(" "));
}

let [n, m, startNode] = input[0].split(" ").map(Number);
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});

DFSnBFS(graph, startNode);
