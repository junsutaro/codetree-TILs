const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = [0, ...input[0].split('')];
const B = [0, ...input[1].split('')];

const n = A.length - 1;
const m = B.length - 1;

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) dp[i][0] = i;
for (let j = 1; j <= m; j++) dp[0][j] = j;

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (A[i] === B[j]) {
            dp[i][j] = dp[i - 1][j - 1]; 
        } else {
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,   // 삭제
                dp[i][j - 1] + 1,   // 삽입
                dp[i - 1][j - 1] + 1 // 변경
            );
        }
    }
}

// 최종 편집 거리 출력
console.log(dp[n][m]);
