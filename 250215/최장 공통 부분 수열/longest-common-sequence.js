const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = [0, ...input[0].split('')];
const B = [0, ...input[1].split('')];

const dp = Array.from({length: A.length}, () => Array(B.length).fill(0));

for (let i = 1; i < A.length; i++) {
  for (let j = 1; j < B.length; j++) {
    if (A[i] === B[j]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[A.length - 1][B.length - 1]);