const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const golds = input.slice(1).map(elem => elem.split(' ').map(Number));

const dp = Array.from({length: 3}, () => Array.from({length : n}, () => Array(3).fill(0)))

// console.log(dp);

dp[0][0] = [golds[0][0], 0, 0]
dp[1][0] = [0, golds[0][1], 0]
dp[2][0] = [0, 0, golds[0][2]]

for ( let tc = 0 ; tc < 3 ; tc += 1 ) {
    for ( let i = 1 ; i < n ; i ++ ) {
        for ( let j = 0 ; j < 3 ; j ++ ) {
            for ( let k = 0 ; k < 3 ; k ++ ) {

                if ( i === n-1 && j === tc ) continue
                if ( j === k ) continue

                dp[tc][i][j] = Math.max(dp[tc][i][j], dp[tc][i-1][k] + golds[i][j]);

            }
        }
    }
}

// console.log(dp);

let ans = 0;

for ( let tc = 0 ; tc < 3 ; tc ++ ) {
    for ( let j = 0 ; j < 3 ; j ++ ) {
        ans = Math.max(ans, dp[tc][n-1][j])
    }
}

console.log(ans);