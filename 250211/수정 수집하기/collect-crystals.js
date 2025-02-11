const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const strs = [0].concat(input[1].split(''));

function getWord(num) {
    if ( num % 2 === 0 ) {
        return 'L';
    } else {
        return 'R';
    }
}

const dp = Array.from({length: n + 1}, () => Array(k + 1).fill(0));

for ( let i = 1 ; i <= n ; i ++ ) {
    if ( strs[i] === 'L' ) {
        dp[i][0] = dp[i-1][0] + 1
    } else {
        dp[i][0] = dp[i-1][0]
    }
}

let ans = dp[n][0];

for ( let i = 1 ; i <= n ; i ++ ) {
    const str = strs[i];
    for ( let j = 1 ; j <= k ; j ++ ) {
        const word = getWord(j);

        if ( word === str ) {
            dp[i][j] = Math.max(dp[i][j], dp[i-1][j] + 1, dp[i-1][j-1] + 1);
        }
        else {
            dp[i][j] = Math.max(dp[i][j], dp[i-1][j], dp[i-1][j-1])
        }

        ans = Math.max(ans, dp[i][j]);
    }
}

console.log(ans);