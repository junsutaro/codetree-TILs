const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const nums = input[1].trim().split(' ').map(Number);

const OFFSET = 20;
const MAX_RANGE = 40;

const dp = Array.from({length : n} , () => Array(MAX_RANGE + 1).fill(0));

dp[0][nums[0] + OFFSET] = 1;
dp[0][-nums[0] + OFFSET] = 1;

for ( let i = 1 ; i <= n ; i ++ ) {
    const newDP = Array(MAX_RANGE + 1).fill(0);

    for ( let j = 0 ; j <= MAX_RANGE ; j ++ ) {
        if (dp[i - 1][j] > 0) {  // 이전 단계에서 유효한 값만 고려
            const plusIdx = j + nums[i];
            const minusIdx = j - nums[i];
            if (plusIdx <= MAX_RANGE) { newDP[plusIdx] += dp[i - 1][j] };
            if (minusIdx >= 0) { newDP[minusIdx] += dp[i - 1][j] };
        }
    }

    dp[i] = newDP; // 새로운 DP 배열로 갱신
}

console.log(dp[n - 1][m + OFFSET] || 0);
