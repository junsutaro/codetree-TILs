const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const MAX_R = 1000;
const MAX_Q = 4;
const n = parseInt(input[0]);
const points = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  points.push([x, y]);
}

points.sort((a, b) => a[0] - b[0]);

let ans = Infinity;

for (let b = 0; b <= MAX_R; b += 2) {
  const cnt = new Array(MAX_Q + 1).fill(0);
  // x = 0일 때 모든 점은 오른쪽에 있으므로 y값에 따라 1번 또는 4번 사분면에 분류
  for (const [x, y] of points) {
    if (y > b) cnt[1]++;
    else cnt[4]++;
  }
  // x좌표 오름차순 스위핑
  for (let i = 0; i < n; i++) {
    if (i === 0 || points[i][0] !== points[i - 1][0]) {
      ans = Math.min(ans, Math.max(cnt[1], cnt[2], cnt[3], cnt[4]));
    }
    const y = points[i][1];
    if (y > b) {
      cnt[1]--;
      cnt[2]++;
    } else {
      cnt[4]--;
      cnt[3]++;
    }
  }
}

console.log(ans);