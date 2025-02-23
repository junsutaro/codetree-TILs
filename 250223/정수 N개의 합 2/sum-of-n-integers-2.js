const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

const prefixSum = Array(n).fill(0);

prefixSum[0] = nums[0];

for ( let i = 1 ; i < n ; i ++ ) {
    prefixSum[i] = prefixSum[i-1] + nums[i];
}

let max = prefixSum[k-1];
for ( let i = k; i < n ; i ++ ) {
    max = Math.max(max, prefixSum[i] - prefixSum[i-k]);
}

console.log(max);