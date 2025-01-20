const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0].trim());
const costs = input[1].trim().split(' ').map(Number);

const dp = Array(n+1).fill(-Infinity);
dp[0] = 0;

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( const [idx, cost] of costs.entries()) {
        const num = idx + 1;
        if ( i - num < 0 ) continue;
        if ( dp[i-num] === -Infinity ) continue;
        dp[i] = Math.max(dp[i], dp[i-num] + cost);
    }
}

console.log(dp[n]);