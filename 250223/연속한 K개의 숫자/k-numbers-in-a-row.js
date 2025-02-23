const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, b] = input[0].trim().split(' ').map(Number);
// const [n, k, b] = [4, 2, 2]

const dp = Array(n+1).fill(1);
dp[0] = 0;

input.slice(1).forEach(elem => dp[Number(elem)] = 0);

const prefixSum = Array(n+1).fill(0);

for ( let i = 1 ; i <= n ; i ++ ) {
    prefixSum[i] = prefixSum[i-1] + dp[i];
}

let ans = Infinity;
for ( let i = k ; i <= n ; i ++ ) {
    const cnt = prefixSum[i] - prefixSum[i-k];
    ans = Math.min(k - cnt, ans);
}

console.log(ans);