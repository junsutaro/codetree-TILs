const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));
const dp = Array.from({length: n}, () => Array(n).fill(0));
const di = [0, 0, 1, -1];
const dj = [1, -1, 0, 0];

function isRange(i, j) {
    return 0 <= i && i < n && 0 <= j && j < n ;
}

function dfs(i, j) {
    // if dp[i][j] !== 0, means already visited
    if ( dp[i][j] !== 0 ) {
        return dp[i][j]
    };

    dp[i][j] = 1;

    for ( let k = 0 ; k < 4 ; k ++ ) {
        const ni = i + di[k];
        const nj = j + dj[k];

        if ( !isRange(ni, nj) ) continue;

        if ( arr[ni][nj] > arr[i][j] ) {
            dp[i][j] = Math.max(dp[i][j], 1 + dfs(ni, nj));
        }
    }

    // if there's no place to visit, return 1
    return dp[i][j];
}

let ans = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    for ( let j = 0 ; j < n ; j ++ ) {
        ans = Math.max(ans, dfs(i, j));
    }
}

console.log(ans);