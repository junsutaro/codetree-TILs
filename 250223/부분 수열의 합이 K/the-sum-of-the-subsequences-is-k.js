const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = [0, ...input[1].split(' ').map(Number)];

const prefixSum = Array(n + 1).fill(0);
prefixSum[1] = arr[1];

for ( let i = 2 ; i <= n ; i ++ ) {
    prefixSum[i] = prefixSum[i-1] + arr[i];
}


let ans = 0;

for ( let k = 1 ; k < n ; k ++ ) { // num of consequence 
    for ( let i = k - 1 ; i <= n ; i ++ ) {
        const sum = prefixSum[i] - prefixSum[i-k];

        if ( sum === m ) {
            ans += 1;
        }
    }
}

console.log(ans);