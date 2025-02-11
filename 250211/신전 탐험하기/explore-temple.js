const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const golds = input.slice(1).map(elem => elem.trim().split(' ').map(Number));
// console.log(golds);

const dp = Array.from({length: n}, () => Array(3).fill(0));
dp[0] = golds[0];

for ( let i = 1 ; i < n ; i ++ ) {
    for ( let j = 0 ; j < 3 ; j ++ ) {
        for ( let k = 0 ; k < 3 ; k ++ ) {
            if ( j === k ) continue;

            dp[i][j] = Math.max(dp[i][j], dp[i-1][k] + golds[i][j]);
        }
    }
}

// console.log(dp);
let ans = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    ans = Math.max(ans, dp[n-1][i])
}
console.log(ans);