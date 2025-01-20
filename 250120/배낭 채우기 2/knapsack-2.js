const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const gems = input.slice(1).map(elem => elem.split(' ').map(Number));

const dp = Array(m+1).fill(-Infinity);
dp[0] = 0;

let ans = 0;

for ( let i = 1 ; i <= m ; i ++ ) {
    for ( const [w, v] of gems ) {
        if ( i - w < 0 ) continue;
        if ( dp[i-w] === -Infinity ) continue;
        dp[i] = Math.max(dp[i], dp[i-w] + v);

        ans = Math.max(ans, dp[i]);
    }
}

console.log(ans);