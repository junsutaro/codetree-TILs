const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0].trim())
// console.log(n);

const arr = input.slice(1).map(elem => elem.trim().split(' ').map(Number));
// console.log(arr);

const dp = Array.from( {length : n}, () => Array(n).fill(0));
// console.log(dp);

dp[0][n-1] = arr[0][n-1];

for ( let i = n-2 ; i >= 0 ; i -- ) {
    dp[0][i] = arr[0][i] + dp[0][i+1];
}
for ( let i = 1 ; i < n ; i ++ ) {
    dp[i][n-1] = dp[i-1][n-1] + arr[i][n-1];
}

// console.log(dp);

for ( let i = 1 ; i < n ; i ++ ) {
    for ( let j = n-2 ; j >= 0 ; j -- ) {
        let fromUp = dp[i-1][j] + arr[i][j];
        let fromDown = dp[i][j+1] + arr[i][j];
        dp[i][j] = Math.min(fromUp, fromDown);
    }
}

console.log(dp[n-1][0]);