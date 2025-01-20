const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const coins = input[1].trim().split(' ').map(Number);

const dp = Array(m+1).fill(-Infinity);
dp[0] = 0;

for ( let i = 1 ; i <= m ; i ++ ) {
    for ( const coin of coins ) {{
        if ( i - coin < 0 ) continue;
        if ( dp[i-coin] === -Infinity ) continue
        dp[i] = Math.max(dp[i-coin] + 1, dp[i]);
    }}
}

console.log(dp[m]);