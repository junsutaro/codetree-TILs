const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const A = [0, ...input[1].split(' ').map(Number)];
const B = [0, ...input[2].split(' ').map(Number)];

const dp = Array.from({ length: n+1 }, () => Array(n+1).fill(-1));

function solve(a, b) {
  if (a === n+1 || b === n+1) {
    return 0;
  }
  
  if (dp[a][b] !== -1) {
    return dp[a][b];
  }
  
  let ret = 0;
  
  if (A[a] < B[b]) {
    ret = Math.max(ret, solve(a+1, b));
  }
  
  if (A[a] > B[b]) {
    ret = Math.max(ret, solve(a, b+1) + B[b]);
  }
  
  ret = Math.max(ret, solve(a+1, b+1));
  
  dp[a][b] = ret;
  return ret;
}

console.log(solve(1, 1));
