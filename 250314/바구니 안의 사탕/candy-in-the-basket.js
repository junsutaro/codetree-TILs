const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const candies = [];

for (let i = 1; i <= n; i++) {
    const [cnt, x] = input[i].split(' ').map(Number);
    candies.push({ x, cnt });
}

const MAX = 1000001;
const candyArr = Array(MAX + 1).fill(0);
const prefixSum = Array(MAX + 1).fill(0);

// 사탕 개수 배열에 반영
candies.forEach(elem => {
    candyArr[elem.x] += elem.cnt; // 같은 위치에 여러 바구니가 존재할 수 있음
});

// 누적합 계산
for (let i = 1; i <= MAX; i++) {
    prefixSum[i] = prefixSum[i - 1] + candyArr[i];
}

// 최대 사탕 개수 찾기 (슬라이딩 윈도우)
let ans = 0;

for (let i = 0; i <= MAX; i++) {
    let leftBound = Math.max(0, i - 2 * k - 1); // 0 이하 방지
    ans = Math.max(ans, prefixSum[i] - prefixSum[leftBound]);
}

console.log(ans);
