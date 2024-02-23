const fs = require("fs");

function dfs(grid, row, col) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "."
  ) {
    return;
  }

  grid[row][col] = "."; // 방문한 영역은 '.'으로 표시

  // 상하좌우 방향에 대해 DFS 수행
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col - 1);
  dfs(grid, row, col + 1);
}

function countGroups(grid) {
  let groupCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "#") {
        groupCount++;
        dfs(grid, i, j);
      }
    }
  }

  return groupCount;
}

function solution(input) {
  const [R, C] = input[0].split(" ").map(Number);
  const grid = input.slice(1).map((row) => row.split(""));

  const answer = countGroups(grid);
  console.log(answer);
}

// 입력 예제
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
solution(input);
