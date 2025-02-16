const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = [0, ...input[0].trim().split('')];
const B = [0, ...input[1].trim().split('')];
const n = A.length - 1;
const m = B.length - 1;

const dp = Array.from({length: n+1}, () => Array(m+1).fill(0));

// dp[1][1] = A[1] === B[1] ? 1 : 2;
// for ( let i = 2 ; i <= n ; i ++ ) {
//     if ( B[1] === A[i] ) {
//         dp[i][1] = i;
//     } else {
//         dp[i][1] = dp[i-1][1] + 1;
//     }
// }
// for ( let j = 2 ; j <= n ; j ++ ) {
//     if ( A[1] === B[j] ) {
//         dp[1][j] = j;
//     } else {
//         dp[1][j] = dp[1][j-1] + 1;
//     }
// }

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( let j = 1 ; j <= m ; j ++ ) {
        if ( A[i] === B[j] ) {
            dp[i][j] = dp[i-1][j-1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
        }
    }
}


let common = dp[n][m];
let ans = n + m - 2 * common;
console.log(ans);