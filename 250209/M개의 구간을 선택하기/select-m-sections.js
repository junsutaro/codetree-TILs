// dp[i개까지선택하는동안][더한 부분이 몇 개]
// why need i => next : from i + 2
// ans will be Math.max(dp[0][m], dp[1][m] ... dp[n][m])

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const nums = [0].concat(input[1].trim().split(' ').map(Number));

const prefix = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  prefix[i] = prefix[i - 1] + nums[i];
}

// const [n, m] = [5, 2];
// const nums = [0, -5, -2, -3, -1, -6];

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-Infinity));
const sub = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-Infinity));

for (let i = 0; i <= n; i++) {
  dp[i][0] = 0;
}

for ( let i = 2 ; i <= n ; i ++ ) {
    dp[i][1] = dp[i-1][1] + nums[i]; 
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    // j개의 구간을 만들기 위한 최소 원소 개수는 2*j - 1입니다.
    if (i < 2 * j - 1) continue;

    if (i === 1) {
      // i가 1이면 오직 j가 1인 경우만 가능합니다.
      if (j === 1) {
        sub[i][j] = nums[i];
        dp[i][j] = nums[i];
      }
    } else {
        // j가 1이어도 i가 1부터 시작 안해도 됨 ;
      if (j === 1) {
        const candidate1 = sub[i - 1][j] + nums[i];
        const candidate2 = nums[i];
        sub[i][j] = Math.max(candidate1, candidate2);
        dp[i][j] = Math.max(dp[i - 1][j], sub[i][j]);
      } else {
        const candidate1 = sub[i - 1][j] + nums[i];
        const candidate2 = (i - 2 >= 0 ? dp[i - 2][j - 1] : -Infinity) + nums[i];
        sub[i][j] = Math.max(candidate1, candidate2);
        dp[i][j] = Math.max(dp[i - 1][j], sub[i][j]);
      }
    }
  }
}

// console.log(dp[n][m]);
// console.log(dp);

let ans = -Infinity;
for ( let i = 0 ; i <= n ; i ++ ) {
    ans = Math.max(ans, dp[i][m]);
}

console.log(ans);

