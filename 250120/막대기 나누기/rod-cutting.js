const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0].trim());
const costs = input[1].trim().split(' ').map(Number);

const dp = Array(n+1).fill(-Infinity);
dp[0] = 0;

for ( let i = 1 ; i <= n ; i ++ ) {
    costs.forEach((cost, idx) => {
        const num = idx + 1;
        if ( i - num < 0 ) return;
        if ( dp[i-num] === -Infinity ) return;
        dp[i] = Math.max(dp[i], dp[i-num] + cost);
    })
}

console.log(dp[m]);