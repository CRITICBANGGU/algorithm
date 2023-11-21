// BFS 예시를 위한 그래프 정의
const graph = {
  1: [2, 3],
  2: [1, 4, 5],
  3: [1, 6],
  4: [2],
  5: [2, 7],
  6: [3, 8],
  7: [5],
  8: [6],
};

// BFS 함수 정의
function bfs(startNode) {
  const queue = [startNode]; // 큐에 시작 노드 추가
  const visited = {}; // 방문 여부를 나타내는 객체
  const result = []; // BFS 결과를 저장할 배열

  visited[startNode] = true; // 시작 노드를 방문했다고 표시

  while (queue.length > 0) {
    const currentNode = queue.shift(); // 큐에서 노드를 하나 꺼냄
    result.push(currentNode); // 결과에 추가

    // 현재 노드와 연결된 노드들을 확인
    const neighbors = graph[currentNode];
    for (const neighbor of neighbors) {
      // 방문하지 않은 노드라면 큐에 추가하고 방문 여부 표시
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }

  return result;
}

// BFS 실행
const bfsResult = bfs(1);
console.log(bfsResult); // [1, 2, 3, 4, 5, 6, 7, 8]
