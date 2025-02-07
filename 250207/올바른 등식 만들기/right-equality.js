const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const nums = input[1].trim().split(' ').map(Number);

const OFFSET = 20;
const MAX_RANGE = 40;

const dp = Array.from({length : n} , () => Array(MAX_RANGE + 1).fill(0));
dp[0][OFFSET - nums[0]] = 1;
dp[0][OFFSET + nums[0]] = 1;

// i 는 선택 횟수, j는 dp 카운팅 배열임

for ( let i = 1 ; i < n ; i ++ ) {
    const newDp = Array(MAX_RANGE + 1).fill(0);

    for ( let j = 0 ; j <= MAX_RANGE ; j ++ ) {
        if ( dp[i-1][j] === 0 ) continue;
        
        if ( j + nums[i] <= MAX_RANGE ) {
            newDp[j+nums[i]] += dp[i-1][j];
        }
        if ( j - nums[i] >= 0 ) {
            newDp[j-nums[i]] += dp[i-1][j];
        }
    }

    dp[i] = newDp;
}

console.log(dp[n-1][m+OFFSET]);