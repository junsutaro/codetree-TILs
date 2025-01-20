const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

let total = nums.reduce((acc, num) => acc + num , 0);

let minVal = Infinity;
const dp = Array(n+1).fill(0);
dp[0] = 0;

let ans = Infinity;
for ( const num of nums ) {
    for ( let i = 1 ; i <= n ; i ++ ) {
        let nextNum = dp[i-1] + num;
        let temp = Math.abs(nextNum * 2 - total)
        if ( temp < minVal ) {
            minVal = temp;
            dp[i] = nextNum;
            ans = Math.min(minVal, ans);
        }
    }
}

// console.log(dp);
console.log(ans);