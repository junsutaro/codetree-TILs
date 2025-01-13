const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
// const n = 8;
const dp = Array(n + 1).fill(0);

dp[1] = 1;
dp[2] = 3;

for ( let i = 3 ; i <= n ; i += 1 ) {
    dp[i] = (dp[i-1] + 2 * dp[i-2]) % 10007;
}    

console.log(dp[n]);
