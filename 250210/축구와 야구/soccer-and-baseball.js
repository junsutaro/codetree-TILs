const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const people = [[0, 0]].concat(input.slice(1).map(elem => elem.split(' ').map(Number)));
const dp = Array.from({length: n + 1}, () => Array.from({length: 21}, () => Array(12).fill(-Infinity)));
dp[0][0][0] = 0;


// dp[i명째까지 보는중][j명 선택][k명이 축구]
// 선택 x
// dp[i][j][k] = dp[i-1][j][k]에서 dp[i][j][k]
// 축구 선택 = dp[i-1][j-1][k-1] 에서 dp[i][j][k];
// 야구 선택 = dp[i-1][j-1][k] 에서 dp[i][j][k];
// 답은? dp[20 ... n][j][k]중 max ?


for ( let i = 1 ; i <= n ; i ++ ) {
    for ( let j = 0 ; j <= 20 ; j ++ ) {
        for ( let k = 0 ; k <= 11 ; k ++ ) {

            if (dp[i-1][j][k] !== -Infinity) {
                dp[i][j][k] = Math.max(dp[i][j][k], dp[i-1][j][k]);
            }

            if (j > 0 && dp[i - 1][j - 1][k] !== -Infinity && ((j - 1) - k) < 9) {
                dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k] + people[i][1]);
            }

            if (j > 0 && k > 0 && dp[i - 1][j - 1][k - 1] !== -Infinity) {
                dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k - 1] + people[i][0]);
            }
        }
    }
}

console.log(dp[n][20][11]);