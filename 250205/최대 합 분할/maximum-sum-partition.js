const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = [0].concat(input[1].trim().split(' ').map(Number));
const OFFSET = 100000;
const MIN = -Infinity;
const m = nums.reduce((acc, cur) => acc + cur, 0);
// console.log(m)

const dp = Array.from(Array(n+1), () => Array(m * 2 + 1 + OFFSET).fill(MIN));

function init() {
    for ( let i = 0 ; i <= n ; i ++ ) {
        for ( let j = -m ; j <= m ; j ++ ) {
            dp[i][j + OFFSET] = MIN;
        }
    }
    dp[0][0+OFFSET] = 0;
}

function update(i, j, prevI, prevJ, val) {
    if ( prevJ < -m || prevJ > m || dp[prevI][prevJ + OFFSET] == MIN ) return;

    dp[i][j+OFFSET] = Math.max(dp[i][j+OFFSET], dp[prevI][prevJ + OFFSET] + val)
}

init();

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( let j = -m ; j <= m ; j ++ ) {
        update(i, j, i-1, j-nums[i], nums[i]);
        update(i, j, i-1, j+nums[i], 0);
        update(i, j, i-1, j, 0);
    }
}

console.log(dp[n][0 + OFFSET])