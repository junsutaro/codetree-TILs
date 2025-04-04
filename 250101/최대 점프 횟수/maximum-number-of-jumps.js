const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const dp = Array(n).fill(-Infinity);
dp[0] = 0

for ( let i = 0 ; i < n ; i ++ ) {
    if ( dp[i] === -Infinity ) { continue }
    const dist = arr[i];
    for ( let j = 1 ; j <= dist ; j ++ ) {
        if ( i + j >= n ) { continue }
        dp[i+j] = Math.max(dp[i+j], dp[i] + 1);
    }
    // console.log(i);
    // console.log(dp);
}

// console.log(dp);
console.log(Math.max(...dp));