const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const rooms = input.slice(1).map(elem => elem.split(' ').map(Number));
const dp = Array.from({length: n}, () => Array(m).fill(0));
dp[0] = rooms[0]

// console.log(dp);
let ans = 0;

for ( let i = 1 ; i < n ; i ++ ) {
    for ( let j = 0 ; j < m ; j ++ ) { // now
        for ( let k = 0 ; k < m ; k ++ ) { // next
            if ( j === k ) continue;
            dp[i][k] = Math.max(dp[i-1][j] + rooms[i][k], dp[i][k])

            if ( i === n-1 ) {
                ans = Math.max(ans, dp[i][k])
            }
        }
    }
}

console.log(ans);