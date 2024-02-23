const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let redGroupIdx = 0;
let blueGroupIdx = 1;
let greenGroupIdx = 2;
const grid = [];
const groups = [];

const dfs = (grid, row, col, checkStr) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] !== checkStr
  ) {
    return;
  }
  grid[row][col] = "X";
  dfs(grid, row - 1, col, checkStr);
  dfs(grid, row + 1, col, checkStr);
  dfs(grid, row, col + 1, checkStr);
  dfs(grid, row, col - 1, checkStr);
};

const countGroups = (grid) => {
  let redGroup = 0;
  let blueGroup = 0;
  let greenGroup = 0;
  let redAndGreenGroup = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "R") {
        redGroup++;
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "G") {
        greenGroup++;
        dfs(grid, i, j, "G");
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "B") {
        blueGroup++;
        dfs(grid, i, j, "B");
      }
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "R" || grid[i][j] === "G") {
        redAndGreenGroup++;
        dfs(grid, i, j, "B");
      }
    }
  }
  groups.push(redGroup);
  groups.push(greenGroup);
  groups.push(blueGroup);
};

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line);
  } else {
    grid.push(line.split(""));
  }
}).on("close", () => {
  countGroups(grid);
});
