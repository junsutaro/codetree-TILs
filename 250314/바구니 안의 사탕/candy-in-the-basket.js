const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const candies = [];

for (let i = 1; i <= n; i++) {
  const [cnt, x] = input[i].split(" ").map(Number);
  candies.push({ x, cnt });
}

candies.sort((a, b) => a.x - b.x);

let ans = 0;
let total_nums = 0;
let j = 0;

for (let i = 0; i < n; i++) {
  while (j < n && candies[j].x - candies[i].x <= 2 * k) {
    total_nums += candies[j].cnt;
    j++;
  }
  ans = Math.max(ans, total_nums);
  
  total_nums -= candies[i].cnt;
}

console.log(ans);
