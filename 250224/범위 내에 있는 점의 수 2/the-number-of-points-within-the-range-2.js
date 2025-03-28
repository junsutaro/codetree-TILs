const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input[0].split(' ').map(Number);

const MAX_NUM = 1000000;
const dp = Array(MAX_NUM + 1).fill(0);
input[1].trim().split(' ').map(elem => {
    dp[Number(elem)] = 1;
})
const prefixSum = Array(MAX_NUM + 1).fill(0);

for ( let i = 1 ; i <= MAX_NUM ; i ++ ) {
    prefixSum[i] = prefixSum[i-1] + dp[i];
}

input.slice(2).map(elem => {
    const [s, e] = elem.trim().split(' ').map(Number);
    console.log(prefixSum[e] - prefixSum[(s-1 === -1 ? 0 : s-1)]);
})
