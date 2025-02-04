const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));

// dp[i][j] = [해당 칸까지 도달했을 때의 max, min]
const dp1 = Array.from({length: n}, () => 
  Array.from({length: n}, () => [-Infinity, Infinity])
);

dp1[0][0] = [arr[0][0], arr[0][0]];  // 시작점 초기화

function dpUpdate(i, j, dp) {
  if (i === 0 && j === 0) return;

  let maxValue = -Infinity;
  let minValue = Infinity;
  
  // 1) 위쪽(i-1, j) 경로가 유효하면 그 기준으로 [maxValue, minValue] 초기화
  if (i > 0) {
    maxValue = Math.max(arr[i][j], dp[i-1][j][0]);
    minValue = Math.min(arr[i][j], dp[i-1][j][1]);
  }

  // 2) 왼쪽(i, j-1) 경로가 유효하면 그쪽과 비교
  if (j > 0) {
    const [prevMax, prevMin] = dp[i][j-1];
    const maxLeft = Math.max(arr[i][j], prevMax);
    const minLeft = Math.min(arr[i][j], prevMin);

    // 현재값 vs 왼쪽에서 가져온 값 각각의 차이
    const diffTop = maxValue - minValue;       // "위"를 사용해서 구한 차이
    const diffLeft = maxLeft - minLeft;        // "왼쪽"을 사용해서 구한 차이

    if (diffTop < 0) {
      // 만약 위쪽값이 아직 -Infinity였다면 diffTop이 이상하게 계산될 수 있으므로
      // 그냥 왼쪽값으로 교체
      maxValue = maxLeft;
      minValue = minLeft;
    } else {
      // 3) 두 경로 중 더 나은(차이가 작은) 쪽을 택하거나, 동률이면 tie-break
      if (diffLeft < diffTop) {
        // 왼쪽이 더 좋음
        maxValue = maxLeft;
        minValue = minLeft;
      } else if (diffLeft === diffTop) {
        // 동률이면 tie-break
        // (a) max가 더 작은 쪽 선택
        const curMax = maxValue;
        if (maxLeft < curMax) {
          maxValue = maxLeft;
          minValue = minLeft;
        } else if (maxLeft === curMax) {
          // (b) 그래도 같으면 min이 더 큰 쪽 선택
          const curMin = minValue;
          if (minLeft > curMin) {
            maxValue = maxLeft;
            minValue = minLeft;
          }
        }
      }
    }
  }

  dp[i][j] = [maxValue, minValue];
}

// dp 채우기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    dpUpdate(i, j, dp1);
  }
}

// 최종 (n-1, n-1)의 [max, min]
const [finalMax, finalMin] = dp1[n-1][n-1];
console.log(finalMax - finalMin);
