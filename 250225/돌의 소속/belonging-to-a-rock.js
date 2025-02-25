const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);
const queries = input.slice(1 + n, 1 + n + q).map(line => line.trim().split(' ').map(Number));

const MAX_C = 3;
const prefixSum = Array.from(Array(MAX_C + 1), () => Array(n + 1).fill(0));

function getSum(c, s, e) {
    return prefixSum[c][e] - prefixSum[c][s - 1];
}

for (let i = 1; i <= MAX_C; i++) {
    prefixSum[i][0] = 0;
    for (let j = 1; j <= n; j++) {
        // arr[j - 1]가 i라면, 개수가 하나 더 증가합니다.
        if (arr[j - 1] === i) {
            prefixSum[i][j] = prefixSum[i][j - 1] + 1;
        } else {
            prefixSum[i][j] = prefixSum[i][j - 1];
        }
    }
}

queries.forEach(([a, b]) => {
    console.log(getSum(1, a, b), getSum(2, a, b), getSum(3, a, b));
});
