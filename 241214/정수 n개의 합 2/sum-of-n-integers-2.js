const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n , k] = input[0].trim().split(' ').map(Number);

const arr = input[1].split(' ').map(Number);
const prefixSum = Array(n).fill(0);

prefixSum[0] = arr[0];

for ( let i = 1 ; i < n ; i ++ ) {
    prefixSum[i] = prefixSum[i-1] + arr[i];
}

// console.log(prefixSum);
let ans = prefixSum[k];

for ( let i = k ; i < n ; i ++ ) {
    ans = Math.max(ans, prefixSum[i] - prefixSum[i-k])
}

console.log(ans);