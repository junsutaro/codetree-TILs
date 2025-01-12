const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
// const n = 5

const dp = Array(n+1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 5;

for ( let i = 4 ; i <= n ; i ++ ) {
    dp[i] = dp[i-1] * 2 + 10 * (i-3) + 4;
}

console.log(dp[n])