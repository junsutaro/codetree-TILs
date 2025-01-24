const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 각 플레이어의 카드 정보를 입력받습니다.
const n = Number(input[0]);
const a = [0, ...input[1].split(' ').map(Number)];
const b = [0, ...input[2].split(' ').map(Number)];

const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(-1));

dp[0][0] = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (dp[i][j] === -1) {
            continue;
        }

        if (a[i + 1] < b[j + 1]) {
            dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);
        }

        if (a[i + 1] > b[j + 1]) {
            dp[i][j + 1] = Math.max(dp[i][j + 1], dp[i][j] + b[j + 1]);
        }

        dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j]);
    }
}

let ans = 0;
for (let i = 0; i <= n; i++) {
    ans = Math.max(ans, dp[i][n]);
    ans = Math.max(ans, dp[n][i]);
}

console.log(ans);
