const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const nums = input[1].trim().split(' ').map(Number);

const dp = Array(m + 1).fill(false);
dp[0] = true;

for ( const num of nums ) {
    for ( i = m ; i >= 0 ; i -- ) {
        if ( i - num < 0 ) continue;
        if ( dp[i-num] === false ) continue;

        dp[i] = true;
    }
}
console.log(dp[m] === true ? 'Yes' : 'No' );