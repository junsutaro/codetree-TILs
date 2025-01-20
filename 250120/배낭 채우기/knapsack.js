const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const gems = input.slice(1).map(elem => elem.split(' ').map(Number));

// console.log(gems); // w, v = [5, 8], [3, 6], [4, 4];

const dp = Array(m+1).fill(-Infinity);
dp[0] = 0;

let ans = 0;

for ( const [w, v] of gems ) {
    for ( let i = m ; i >= 0 ; i -- ) {
        if ( i - w < 0 ) continue;
        if ( dp[i-w] === -Infinity ) continue;

        dp[i] = Math.max(dp[i], dp[i-w] + v);
        ans = Math.max(dp[i], ans);
    }
}

console.log(ans);
