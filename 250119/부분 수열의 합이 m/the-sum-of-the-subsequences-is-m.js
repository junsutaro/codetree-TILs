const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const nums = input[1].trim().split(' ').map(Number);

const dp = Array(m+1).fill(Infinity);

dp[0] = 0;


for ( const num of nums ) { // nums 순회
    for ( let j = m ; j >= 0 ; j -- ) {

        if ( j - num < 0 ) { continue }

        if ( dp[j - num] === Infinity ) {continue}

        dp[j] = Math.min(dp[j], dp[j - num] + 1);

    }
}

console.log(dp[m] === Infinity ? -1 : dp[m]);