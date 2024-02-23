const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// graph 자료구조와 startNode를 입력
const DFS = (graph, startNode) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(startNode); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용한다.
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};
console.log(DFS(graph, "A"));

function dfsRecursive(graph, currentNode, visited) {
  console.log(currentNode); // 방문한 노드 출력
  visited[currentNode] = true;

  const neighbors = graph[currentNode];
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    if (!visited[neighbor]) {
      dfsRecursive(graph, neighbor, visited);
    }
  }
}

function dfs(graph, startNode) {
  const visited = {};
  dfsRecursive(graph, startNode, visited);
}
