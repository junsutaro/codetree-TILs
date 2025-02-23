const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const arr = input.slice(1).map(elem => elem.split(' ').map(Number));

const prefixSum = Array.from({length : n + 1}, () => Array(n + 1).fill(0));

prefixSum[1][1] = arr[0][0];

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( let j = 1 ; j <= n ; j ++ ) {
        prefixSum[i][j] = prefixSum[i-1][j] + prefixSum[i][j-1] - prefixSum[i-1][j-1] + arr[i-1][j-1] 
    }
}

let ans = -Infinity;

for ( let i = k ; i <= n ; i ++ ) {
    for ( let j = k ; j <= n ; j ++ ) {
        const boxSum = prefixSum[i][j] - prefixSum[i-k][j] - prefixSum[i][j-k] + prefixSum[i-k][j-k];
        ans = Math.max(ans, boxSum)
    }
}

console.log(ans)