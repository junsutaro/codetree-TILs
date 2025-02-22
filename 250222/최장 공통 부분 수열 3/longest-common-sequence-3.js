const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
n += 1;
m += 1;

const A = [0, ...input[1].split(' ').map(Number)];
const B = [0, ...input[2].split(' ').map(Number)];

const dp = Array.from({length: n}, () => Array(m).fill(0));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    dp[i][j] = [];
  }
}

function isLexSmaller(arr1, arr2) {
  let len = arr1.length;
  for (let i = 0; i < len; i++) {
    if (arr1[i] !== arr2[i]) return arr1[i] < arr2[i];
  }
}

for (let i = 1; i < n; i++) {
  for (let j = 1; j < m; j++) {
    if (A[i] === B[j]) {
      dp[i][j] = [...dp[i-1][j-1], A[i]];
    } else {
      const top = dp[i-1][j];
      const left = dp[i][j-1];
      if (top.length > left.length) {
        dp[i][j] = top;
      } else if (top.length < left.length) {
        dp[i][j] = left;
      } else {
        dp[i][j] = isLexSmaller(top, left) ? top : left;
      }
    }
  }
}

console.log(dp[n-1][m-1].join(' '));

