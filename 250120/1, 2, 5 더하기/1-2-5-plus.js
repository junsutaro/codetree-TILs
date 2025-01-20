const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
const nums = [1, 2, 5];

const dp = Array(n+1).fill(0);
dp[0] = 1;

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( const num of nums ) {
        if ( i - num < 0 ) continue ;
        // if ( dp[i - num] === 0 ) continue;
        dp[i] = dp[i] + dp[i-num];
    }
}

console.log(dp[n]);