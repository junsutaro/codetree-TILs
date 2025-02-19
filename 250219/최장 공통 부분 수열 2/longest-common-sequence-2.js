const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = ' ' + input[0];
const B = ' ' + input[1];

const n = A.length;
const m = B.length;

const dp = Array.from({length: n}, () => Array(m).fill(0));

for ( let i = 1 ; i < n ; i ++ ) {
    for ( let j = 1 ; j < m ; j ++ ) {
        if ( A[i] === B[j] ) {
            dp[i][j] = dp[i-1][j-1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
}

let lcs = '';
let i = n - 1, j = m - 1;

while (i > 0 && j > 0) {
    if (A[i] === B[j]) {
        lcs = A[i] + lcs;
        i--;
        j--;
    } else if (dp[i-1][j] > dp[i][j-1]) {
        i--;
    } else {
        j--;
    }
}

console.log(lcs); // 최장 공통 부분수열 출력