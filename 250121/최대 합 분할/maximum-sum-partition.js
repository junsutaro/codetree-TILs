"use strict";

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 입력 처리
const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);

const total = nums.reduce((acc, x) => acc + x, 0);

// dp[s] = 합이 s가 되는 어떤 부분집합의 비트마스크 (BigInt)
//         없으면 null
const dp = Array(total + 1).fill(null);

// 합 0을 만드는 부분집합 = {} (빈 집합) → 비트마스크 = 0n
dp[0] = 0n;

let ans = 0; // sum(A)=sum(B) 중 최댓값 추적

// 모든 원소를 순회
for (let i = 0; i < n; i++) {
  const x = nums[i];

  // 뒤에서부터 업데이트 (중복 사용 방지)
  for (let s = total - x; s >= 0; s--) {
    // dp[s]가 존재한다면 (= 어떤 부분집합으로 s를 만들 수 있다면)
    if (dp[s] !== null) {
      const oldMask = dp[s];
      const newSum = s + x;

      // 새로 만든 부분집합의 비트마스크
      // oldMask에 i번째 원소 사용 표시 추가
      const newMask = oldMask | (1n << BigInt(i));

      // 아직 dp[newSum]이 비어있다면(= null), 처음 세팅
      if (dp[newSum] === null) {
        dp[newSum] = newMask;
      } else {
        // dp[newSum]도 이미 부분집합 하나가 있었음
        const otherMask = dp[newSum];

        // 두 부분집합이 겹치지 않는지 확인 (AND == 0)
        if ((otherMask & newMask) === 0n) {
          // 겹치지 않으므로, 서로 다른 두 부분집합이 newSum을 만든다!
          // sum(A) = sum(B) = newSum 인 상태
          // 문제 요구: sum(A)=sum(B)의 최댓값
          ans = Math.max(ans, newSum);
        }
      }
    }
  }
}

// 결과 출력
console.log(ans);
