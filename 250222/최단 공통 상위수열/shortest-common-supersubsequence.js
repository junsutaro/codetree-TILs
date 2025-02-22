const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = ' ' + input[0];
const B = ' ' + input[1];

const n = A.length;
const m = B.length;

const dp = Array.from({length: n}, () => Array(m).fill(0));

dp[1][1] = A[1] === B[1] ? 1 : 2;


for ( let i = 2 ; i < n ; i ++ ) {
    if ( A[i] === B[1] ) {
        dp[i][1] = i
    } else {
        dp[i][1] = dp[i-1][1] + 1;
    }
}

for ( let j = 2 ; j < m ; j ++ ) {
    if ( A[1] === B[j] ) {
        dp[1][j] = j;
    } else {
        dp[1][j] = dp[1][j-1] + 1;
    }
}


for ( let i = 2 ; i < n ; i ++ ) {
    for ( let j = 2 ; j < m ; j ++ ) {
        if ( A[i] === B[j] ) {
            dp[i][j] = dp[i-1][j-1] + 1;
        } else {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + 1;
        }
    }
}

console.log(dp[n-1][m-1]);
