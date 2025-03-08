const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const points = [];
const X = [];
const Y = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  points.push([x, y]);
  X.push(x);
  Y.push(y);
}

const uniqueX = [...new Set(X)].sort((a, b) => a - b);
const uniqueY = [...new Set(Y)].sort((a, b) => a - b);

const xMap = new Map();
const yMap = new Map();
uniqueX.forEach((val, idx) => xMap.set(val, idx + 1));
uniqueY.forEach((val, idx) => yMap.set(val, idx + 1));

const xLen = uniqueX.length;
const yLen = uniqueY.length;

const freq = Array.from({ length: xLen + 1 }, () => Array(yLen + 1).fill(0));
for (const [x, y] of points) {
  const cx = xMap.get(x);
  const cy = yMap.get(y);
  freq[cx][cy]++;
}

const ps = Array.from({ length: xLen + 1 }, () => Array(yLen + 1).fill(0));
for (let i = 1; i <= xLen; i++) {
  for (let j = 1; j <= yLen; j++) {
    ps[i][j] = ps[i - 1][j] + ps[i][j - 1] - ps[i - 1][j - 1] + freq[i][j];
  }
}

function safeGetSum(x1, y1, x2, y2) {
  if (x1 > x2 || y1 > y2) return 0;
  return ps[x2][y2] - ps[x1 - 1][y2] - ps[x2][y1 - 1] + ps[x1 - 1][y1 - 1];
}

let answer = Infinity;
for (let v = 0; v <= xLen; v++) {
  for (let h = 0; h <= yLen; h++) {
    const lb = safeGetSum(1, 1, v, h);
    const lt = safeGetSum(1, h + 1, v, yLen);
    const rb = safeGetSum(v + 1, 1, xLen, h);
    const rt = safeGetSum(v + 1, h + 1, xLen, yLen);
    const curMax = Math.max(lb, lt, rb, rt);
    answer = Math.min(answer, curMax);
  }
}

console.log(answer);
