
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = [0, ...input[0].split('')];;
const B = [0, ...input[1].split('')];;

const n = A.length - 1;
const m = B.length - 1;

const dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

for ( let i = 1 ; i <= n ; i ++ ) dp[i][1] = i;
for ( let j = 1 ; j <= m ; j ++ ) dp[1][j] = j;;

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( let j = 1; j <= m ; j ++ ) {
        if ( A[i-1] === B[j-1]) {
            dp[i][j] = dp[i-1][j-1];
        }else {
            dp[i][j] = Math.min(
                dp[i-1][j] + 1,
                dp[i][j-1] + 1,
                dp[i-1][j-1] + 1
            )
        }
    }
}

console.log(dp[n][m]);