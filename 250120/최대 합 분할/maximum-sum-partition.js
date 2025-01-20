const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

const total = nums.reduce((acc, num) => acc + num, 0);
const maxHalf = Math.floor(total / 2);

// 첫 번째 DP 배열 생성
let dp1 = Array(maxHalf + 1).fill(false);
dp1[0] = true;
let group1Nums = Array(maxHalf + 1).fill(null); // 각 합에서 사용된 숫자 추적

for (const num of nums) {
    for (let i = maxHalf; i >= num; i--) {
        if (!dp1[i - num]) continue;
        dp1[i] = true;
        group1Nums[i] = group1Nums[i - num] ? [...group1Nums[i - num], num] : [num];
    }
}

// console.log(group1Nums)

// 가능한 부분합 중 하나 선택
let maxSum = 0;
for (let x = 0; x <= maxHalf; x++) {
    if (!dp1[x]) continue;

    // 첫 번째 그룹에 포함된 숫자 확인
    const usedNums = group1Nums[x] || [];

    // 두 번째 DP 배열 생성
    let dp2 = Array(maxHalf + 1).fill(false);
    dp2[0] = true;

    for (const num of nums) {
        if (usedNums.has(num)) continue; // 첫 번째 그룹에서 사용된 숫자는 제외
        for (let i = maxHalf; i >= num; i--) {
            dp2[i] = dp2[i] || dp2[i - num];
        }
    }

    // dp2에서 A = B가 가능한 최대값 찾기
    for (let y = 0; y <= maxHalf; y++) {
        if (dp2[y] && y === x) {
            maxSum = Math.max(maxSum, x);
        }
    }
}

console.log(maxSum);
