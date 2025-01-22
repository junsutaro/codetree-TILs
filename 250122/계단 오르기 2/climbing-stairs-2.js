const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const coins = input[1].trim().split(' ').map(Number);

const dp = Array.from({length: n+1}, () => Array(4).fill(-Infinity));
dp[0][0] = 0;

if ( n >= 1 ) {
    dp[1][1] = coins[0];
}
if ( n >= 2 ) {
    dp[2][1] = coins[1];
}
// console.log(dp);

for ( let i = 3 ; i <= n ; i ++ ) {
    for ( let j = 2 ; j <= 3 ; j ++ ) {
        dp[i][j] = Math.max(dp[i-1][j-1] + coins[i-1], dp[i-2][j] + coins[i-1]);
    }
}

// console.log(ans);
// console.log(dp[n][3]);

let ans = -Infinity;

for ( let j = 1 ; j <= 3 ; j ++ ) {
    ans = Math.max(ans, dp[n][j]);
}

console.log(ans);