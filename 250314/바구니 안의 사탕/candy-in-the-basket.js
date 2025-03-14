const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const candies = [];

for (let i = 1; i <= n; i++) {
    const [cnt, x] = input[i].split(' ').map(Number);
    candies.push({ x, cnt });
}

const MAX = 1000001
// Please Write your code here.
const candyArr = Array(MAX + 1).fill(0);
const prefixSum = Array(MAX + 1).fill(0);

candies.forEach(elem => {
    candyArr[elem.x] = elem.cnt;
})
for ( let i = 1 ; i <= MAX ; i ++ ) {
    prefixSum[i] = prefixSum[i-1] + candyArr[i]
};
let ans = 0;
for ( let i = 2*k+1 ; i <= MAX ; i ++ ) {
    ans = Math.max(ans, prefixSum[i] - prefixSum[i-2*k-1])
}

if ( 2*k+1 > MAX ) {
    ans = prefixSum[MAX]
}

console.log(ans);
