const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const cards = input.slice(1).map(elem => elem.split(' ').map(Number));

// console.log(cards);

const dp = Array.from({length : 2 * n}, () => Array(n + 1).fill(-1));

function dpIng(i, j) {

    // 다 고르면 ~
    if ( i === n * 2 ) return j === n ? 0 : -Infinity;

    // 이미 값 나왔으면 ~
    if ( dp[i][j] !== -1 ) return dp[i][j];

    let takeFirst = j < n ? dpIng(i + 1, j + 1) + cards[i][0] : -Infinity;
    let takeSecond = dpIng(i + 1, j) + cards[i][1];
    return dp[i][j] = Math.max(takeFirst, takeSecond);

}

dpIng(0, 0)





console.log(dp[0][0]);