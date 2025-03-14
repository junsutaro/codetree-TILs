const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const candies = [];
for (let i = 1; i <= n; i++) {
    const [cnt, x] = input[i].split(" ").map(Number);
    candies.push({ x, cnt });
}

const MAX = 1000001; // 위치: 0 ~ 1000000
const candyArr = Array(MAX).fill(0);  // 길이 1000001, 인덱스 0 ~ 1000000
for (const { x, cnt } of candies) {
    candyArr[x] += cnt; // 같은 위치에 여러 바구니가 있으면 누적
}

// prefixSum 배열: prefixSum[i]는 candyArr[0]부터 candyArr[i-1]까지의 합
// 길이는 MAX+1
const prefixSum = Array(MAX + 1).fill(0);
for (let i = 0; i < MAX; i++) {
    prefixSum[i+1] = prefixSum[i] + candyArr[i];
}

let ans = 0;
const windowLen = 2 * k + 1;
for (let i = 0; i <= MAX; i++) {
    const left = Math.max(0, i - windowLen);
    const windowSum = prefixSum[i] - prefixSum[left];
    ans = Math.max(ans, windowSum);
}

console.log(ans);
