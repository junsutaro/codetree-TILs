const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const nums = [0, ...input[1].split(' ').map(Number)];
const dp = Array.from({length : n+1}, () => Array(4).fill(0));

for ( let i = 1 ; i <= n ; i ++ ) {
    dp[i][1] = nums[i];
}

// console.log(dp);

let ans = 0;

for ( let i = 2 ; i <= n ; i ++ ) {
    for ( let j = 2 ; j < 4 ; j ++ ) {
        dp[i][j] = Math.max(dp[i-2][j-1] + nums[i], dp[i-1][j])
        if ( j === 3 ) {
            ans = Math.max(ans, dp[i][j])
        }
    }
}
// console.log(dp);
console.log(ans);