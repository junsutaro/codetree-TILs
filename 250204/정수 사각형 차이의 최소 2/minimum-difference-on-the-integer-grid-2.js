const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// 상태 s1이 s2를 지배하는지 판별하는 함수
// s1이 s2를 지배한다는 것은 s1.max <= s2.max && s1.min >= s2.min 인 경우
function dominates(s1, s2) {
  return s1.max <= s2.max && s1.min >= s2.min;
}

// dp[i][j]는 (i,j)까지 도달하는 경로에서 가능한 (max, min) 상태들의 배열
const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => []));

// 시작점 초기화
dp[0][0].push({ max: grid[0][0], min: grid[0][0] });

// 새로운 상태 newState를 states에 추가하는 함수
// 만약 newState가 이미 있는 상태에 의해 지배되면 추가하지 않고,
// newState가 기존 상태들을 지배하면 기존 상태들을 제거합니다.
function addState(states, newState) {
  // 이미 states의 어떤 상태에 의해 지배된다면 추가하지 않음
  for (const s of states) {
    if (dominates(s, newState)) return;
  }
  // newState가 states의 일부 상태를 지배한다면 제거
  for (let i = states.length - 1; i >= 0; i--) {
    if (dominates(newState, states[i])) {
      states.splice(i, 1);
    }
  }
  states.push(newState);
}

// DP 진행: 오른쪽, 아래쪽 이동만 가능하므로 (i,j)는 (i-1,j)와 (i,j-1)에서 올 수 있음
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 시작점은 이미 처리했으므로 건너뜁니다.
    if (i === 0 && j === 0) continue;

    const states = [];
    // 위쪽에서 온 경우
    if (i > 0) {
      for (const st of dp[i - 1][j]) {
        const newState = {
          max: Math.max(st.max, grid[i][j]),
          min: Math.min(st.min, grid[i][j])
        };
        addState(states, newState);
      }
    }
    // 왼쪽에서 온 경우
    if (j > 0) {
      for (const st of dp[i][j - 1]) {
        const newState = {
          max: Math.max(st.max, grid[i][j]),
          min: Math.min(st.min, grid[i][j])
        };
        addState(states, newState);
      }
    }
    dp[i][j] = states;
  }
}

// 마지막 셀에서 가능한 상태들 중 차이 (max - min)가 최소인 값을 구함
let ans = Infinity;
for (const st of dp[n - 1][n - 1]) {
  ans = Math.min(ans, st.max - st.min);
}

console.log(ans);
