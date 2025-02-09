// dp[i개까지선택하는동안][더한 부분이 몇 개]
// why need i => next : from i + 2
// ans will be Math.max(dp[0][m], dp[1][m] ... dp[n][m])

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const nums = [0].concat(input[1].trim().split(' ').map(Number));

const dp = Array.from({length: n+1}, () => Array(m+1).fill(-1));

dp[0][0] = 0;
dp[1][1] = nums[1];

for ( let i = 2 ; i <= n ; i ++ ) {
    dp[i][1] = dp[i-1][1] + nums[i]; 
}

for ( let i = 2 ; i <= n ; i ++ ) {
    for ( let j = 1; j <= m ; j ++ ) {
        if ( i <= j * 2 - 1 ) continue;

        dp[i][j] = dp[i-2][j-1] + nums[i]
        dp[i][j] = Math.max(dp[i-1][j] + nums[i], dp[i][j])
    }
}

console.log(dp[n][m]);
