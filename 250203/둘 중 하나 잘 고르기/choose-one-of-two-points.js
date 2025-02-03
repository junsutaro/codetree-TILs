const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const cards = input.slice(1).map(elem => elem.split(' ').map(Number));

// console.log(cards);

const dp = Array.from({length : 2 * n}, () => Array(n + 1).fill(0));
dp[0][0] = cards[0][0];
dp[0][1] = cards[0][1];

for ( let i = 1 ; i < 2 * n ; i ++ ) {
    dp[i][0] = dp[i-1][0] + cards[i][0]
}

for ( let i = 1 ; i < 2 * n ; i ++ ) {
    for ( let j = 1 ; j < n + 1 ; j ++ ) {
        dp[i][j] = Math.max(dp[i-1][j] + cards[i][0], dp[i-1][j-1] + cards[i][1], dp[i][j])
    }
}

// dp.map(elem => console.log(elem));


console.log(dp[n*2-1][n]);