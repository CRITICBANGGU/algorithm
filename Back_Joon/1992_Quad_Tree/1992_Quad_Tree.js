const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const screen = [];

const genQuadTree = (n) => {
  const quadTree = [];
  const recursion = (n, x, y) => {
    let total = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        total += screen[y + j][x + i];
      }
    }
    if (total === 0) quadTree.push("0");
    else if (total === n * n) quadTree.push("1");
    else {
      n /= 2;
      quadTree.push("(");
      recursion(n, x, y);
      recursion(n, x + n, y);
      recursion(n, x, y + n);
      recursion(n, x + n, y + n);
      quadTree.push(")");
    }
  };
  recursion(n, 0, 0);
  console.log(quadTree.join(""));
};

rl.on("line", function (line) {
  if (input.length < 1) {
    input.push(parseInt(line));
  } else {
    screen.push(line.split("").map((v) => parseInt(v)));
  }
}).on("close", function () {
  genQuadTree(input[0]);
  process.exit();
});
