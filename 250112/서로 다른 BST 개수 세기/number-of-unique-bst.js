const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
const dp = Array(n+1).fill(0);

dp[0] = 1;
dp[1] = 1;

for ( let i = 2 ; i <= n ; i ++ ) {
    for ( let j = 0 ; j < i ; j ++ ) {
        dp[i] += dp[j] * dp[i - 1 - j];
    }
}

console.log(dp[n]);