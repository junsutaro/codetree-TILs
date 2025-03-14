const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const candies = [];

for (let i = 1; i <= n; i++) {
    const [cnt, x] = input[i].split(' ').map(Number);
    candies.push({ x, cnt });
}

const MAX = 1000001;  // 바구니 위치는 0 ~ 1,000,000
const candyArr = Array(MAX).fill(0);
const prefixSum = Array(MAX).fill(0);

// 같은 위치에 여러 바구니가 있을 수 있으므로 += 로 누적 처리
candies.forEach(elem => {
    candyArr[elem.x] += elem.cnt;
});

// prefixSum 계산: prefixSum[i]는 0번부터 i번까지의 합 (prefixSum[0] = 0)
for (let i = 1; i < MAX; i++) {
    prefixSum[i] = prefixSum[i - 1] + candyArr[i];
}

let ans = 0;
// 윈도우 길이는 (2*k + 1)
// 모든 인덱스에 대해, 윈도우의 왼쪽 경계를 i - (2*k + 1)로 설정 (음수이면 0으로 보정)
for (let i = 0; i < MAX; i++) {
    const leftBound = Math.max(0, i - (2 * k + 1));
    const windowSum = prefixSum[i] - prefixSum[leftBound];
    ans = Math.max(ans, windowSum);
}

console.log(ans);
