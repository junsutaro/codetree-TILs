const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const init = input[1].trim().split('').map(Number);
const goal = input[2].trim().split('').map(Number);

const INF = Infinity;
// dp[i][j] : 0번째부터 i-1번째까지 처리한 상태에서, 현재 누적된 offset이 j일 때의 최소 회전 수
const dp = Array.from({ length: n + 1 }, () => Array(10).fill(INF));
dp[0][0] = 0;

for (let i = 0; i < n; i++) {
  for (let offset = 0; offset < 10; offset++) {
    if (dp[i][offset] === INF) continue;
    
    // 현재 마법진 i의 실제 숫자 (이전에 왼쪽 회전한 누적 offset 적용)
    const current = (init[i] + offset) % 10;
    // 목표 숫자와 맞추기 위해 필요한 왼쪽(반시계) 회전 횟수
    const diff = (goal[i] - current + 10) % 10;
    
    // 옵션 1: 왼쪽 회전 (반시계)
    // 해당 마법진과 아래 마법진 모두 diff만큼 회전하게 되므로, 누적 offset이 변함
    const newOffset = (offset + diff) % 10;
    dp[i + 1][newOffset] = Math.min(dp[i + 1][newOffset], dp[i][offset] + diff);
    
    // 옵션 2: 오른쪽 회전 (시계)
    // 해당 마법진만 회전하므로, 누적 offset은 그대로 유지됨.
    // 오른쪽 회전은 (10 - diff) % 10 만큼 회전하는 것으로 계산할 수 있음
    const right = (10 - diff) % 10;
    dp[i + 1][offset] = Math.min(dp[i + 1][offset], dp[i][offset] + right);
  }
}

// 모든 마법진을 처리한 후, dp[n][*] 중 최소값이 답이 됨.
const answer = Math.min(...dp[n]);
console.log(answer);
