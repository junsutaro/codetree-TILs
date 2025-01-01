const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 1) 입력 파싱
const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// 2) dp 배열(메모이제이션용) 초기화
// dp[r][c] = (r,c)에서 시작했을 때 밟을 수 있는 최대 칸 수
const dp = Array.from({ length: n }, () => Array(m).fill(0));

// 3) DFS 함수 정의
function dfs(r, c) {
  // 이미 계산된 값이 있으면 재활용
  if (dp[r][c] !== 0) {
    return dp[r][c];
  }

  // 자기 자신 칸부터 시작이므로 기본값 1
  dp[r][c] = 1;

  // 점프 가능한 모든 칸 탐색
  for (let nr = r + 1; nr < n; nr++) {
    for (let nc = c + 1; nc < m; nc++) {
      // 점프 조건: 더 큰 수이고, 아래쪽·오른쪽으로 이동
      if (grid[nr][nc] > grid[r][c]) {
        // nr,nc에서 시작했을 때 최대 칸 수 + 1(현재 칸)
        dp[r][c] = Math.max(dp[r][c], 1 + dfs(nr, nc));
      }
    }
  }
  return dp[r][c];
}

// 4) (0,0)에서 시작한 최대 경로 길이 구하기
const answer = dfs(0, 0);

// 5) 결과 출력
console.log(answer);
