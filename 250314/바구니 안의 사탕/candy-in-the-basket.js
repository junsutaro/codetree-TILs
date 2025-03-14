const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const candies = [];

let maxCandyPos = 0;

for (let i = 1; i <= n; i++) {
    const [cnt, x] = input[i].split(' ').map(Number);
    candies.push({ x, cnt });
    maxCandyPos = Math.max(maxCandyPos, x);
}

const MAX = Math.min(1000001, maxCandyPos + 1); 
const candyArr = Array(MAX + 1).fill(0);
const prefixSum = Array(MAX + 1).fill(0);

candies.forEach(elem => {
    if (elem.x <= MAX) {
        candyArr[elem.x] = elem.cnt;
    }
});

for (let i = 1; i <= MAX; i++) {
    prefixSum[i] = prefixSum[i - 1] + candyArr[i];
}

let ans = 0;

if (2 * k + 1 >= MAX) {
    ans = prefixSum[MAX - 1]; 
} else {
    for (let i = 0; i <= MAX; i++) {
        let leftBound = Math.max(0, i - 2 * k - 1); 
        ans = Math.max(ans, prefixSum[i] - prefixSum[leftBound]);
    }
}

console.log(ans);
