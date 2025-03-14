const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const candies = [];

for (let i = 1; i <= n; i++) {
    const [cnt, x] = input[i].split(' ').map(Number);
    candies.push({ x, cnt });
}

const MAX = 1000001;  // 0부터 1,000,000까지 (총 1,000,001개)
const candyArr = Array(MAX + 1).fill(0);    // 인덱스 0 ~ 1000001
const prefixSum = Array(MAX + 1).fill(0);     // 인덱스 0 ~ 1000001

// 같은 위치에 여러 바구니가 있을 수 있으므로 누적 처리
candies.forEach(elem => {
    candyArr[elem.x] += elem.cnt;
});

// prefixSum[i]는 1부터 i까지의 사탕 합 (prefixSum[0]는 0)
for (let i = 1; i <= MAX; i++) {
    prefixSum[i] = prefixSum[i - 1] + candyArr[i];
}

let ans = 0;
// 슬라이딩 윈도우의 길이는 (2*k + 1)
// i가 0부터 MAX까지 순회하면서, 
// windowSum = prefixSum[i] - prefixSum[ max(0, i - (2*k + 1)) ] 로 계산합니다.
for (let i = 0; i <= MAX; i++) {
    const leftBound = Math.max(0, i - (2 * k + 1));
    const windowSum = prefixSum[i] - prefixSum[leftBound];
    ans = Math.max(ans, windowSum);
}

console.log(ans);
