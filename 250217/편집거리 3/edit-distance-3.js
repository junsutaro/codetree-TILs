const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0]
const B = input[1]
const n = A.length
const m = B.length

const dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

for ( let i = 1; i <= n ; i++ ) {
    dp[i][0] = i;
}
for ( let j = 1 ; j <= m ; j ++ ) {
    dp[0][j] = j;
}

// dp[i][j] == A[0...i] 에서 B[0...j] 까지 가는데 몇번?

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( let j = 1 ; j <= m ; j ++ ) {
        if ( A[i-1] === B[j-1] ) {
            dp[i][j] = dp[i-1][j-1];
        } else {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + 1;
        }
    }
}
console.log(dp[n][m])