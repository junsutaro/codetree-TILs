const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

const prefixSum = Array(n).fill(0);
const suffixSum = Array(n).fill(0);

prefixSum[0] = arr[0];
suffixSum[n-1] = arr[n-1];

for ( let i = 1 ; i < n ; i ++ ) {
    prefixSum[i] = arr[i] + prefixSum[i-1];
}
for ( let i = n-2 ; i >= 0 ; i -- ) {
    suffixSum[i] = arr[i] + suffixSum[i+1];
}
const goal = prefixSum[n-1] / 4;

let ans = 0;
for ( let i = 0 ; i <= n-4 ; i ++ ) {
    if ( prefixSum[i] === goal ) {
        for ( let j = i + 1 ; j <= n - 3 ; j ++ ) {
            if ( prefixSum[j] === goal * 2 ) {
                for ( let k = j + 1 ; k <= n - 2 ; k ++  ) { 
                    if ( prefixSum[k] === goal * 3) {
                        ans += 1;
                    }
                }
            }
        }
    }
}
console.log(ans);