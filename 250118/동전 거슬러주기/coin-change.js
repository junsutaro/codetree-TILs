const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

const dp = Array(m+1).fill(Infinity);
dp[0] = 0;


for ( let i = 0 ; i <= m ; i ++ ) {
    for ( let j = 0 ; j < n ; j ++ ) {
        if ( i < coins[j] ) continue
        dp[i] = Math.min(dp[i - coins[j]] + 1 , dp[i])
    }
}

if ( dp[m] === Infinity ) {
    console.log(-1);
} else {
    console.log(dp[m]);
}