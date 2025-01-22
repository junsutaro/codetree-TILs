const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const coins = input[1].trim().split(' ').map(Number);

// ans = Math.max(dp[n][end1], dp[n][end2])
const end1 = Math.floor(n / 2);
const end2 = Math.floor(n / 2) + 1;

const dp = Array.from({length: n+1}, () => Array(end2+1).fill(-Infinity));
dp[0][0] = 0;
dp[1][1] = coins[0];
dp[2][1] = coins[1];

// console.log(dp);

for ( let i = 3 ; i <= n ; i ++ ) {
    for ( let j = 1 ; j <= end2 ; j ++ ) {
        dp[i][j] = Math.max(dp[i-1][j-1] + coins[i-1], dp[i-2][j-1] + coins[i-1]);
    }
}

const ans = Math.max(dp[n][end1], dp[n][end2]);

console.log(ans);
// console.log(dp);