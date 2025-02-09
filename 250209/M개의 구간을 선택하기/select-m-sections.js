// dp[i개까지선택하는동안][더한 부분이 몇 개]
// why need i => next : from i + 2
// ans will be Math.max(dp[0][m], dp[1][m] ... dp[n][m])

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const nums = [0].concat(input[1].trim().split(' ').map(Number));

const dp = Array.from({length: n+1}, () => Array(m+1).fill(-Infinity));
const sub = Array.from({length: n+1}, () => Array(m+1).fill(-Infinity));

for (let i = 0; i <= n; i++) {
  dp[i][0] = 0;
}

for ( let i = 2 ; i <= n ; i ++ ) {
    dp[i][1] = dp[i-1][1] + nums[i];
}

// console.log(dp);

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( let j = 1; j <= m ; j ++ ) {
        if ( i < j * 2 - 1 ) { continue }
        if ( i === 1 ) {
          if ( j === 1 ) {
            sub[i][j] = nums[i]
            dp[i][j] = nums[i]
          }
        } else {
          const candidate1 = sub[i - 1][j] + nums[i];
          if ( j === 1 ) {
            const candidate2 = nums[i];
            sub[i][j] = Math.max(candidate1, candidate2);
            dp[i][j] = Math.max(dp[i - 1][j], sub[i][j]);
          } else {
            const candidate2 = (i - 2 >= 0 ? dp[i - 2][j - 1] : -Infinity) + nums[i];
            sub[i][j] = Math.max(candidate1, candidate2);
            dp[i][j] = Math.max(dp[i - 1][j], sub[i][j]);
          }
        }
    }
}

// console.log(dp[n][m]);
// console.log(dp);

let ans = -Infinity;
for ( let i = 0 ; i <= n ; i ++ ) {
    ans = Math.max(ans, dp[i][m]);
}

console.log(ans);

