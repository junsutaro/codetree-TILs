const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

let total = nums.reduce((acc, num) => acc + num , 0);

let minVal = Infinity;
const dp = Array(n).fill(0);
dp[0] = 0;

let ans = Infinity;
for ( const num of nums ) {
    for ( let i = 1 ; i < n ; i ++ ) {
        let sumVal = dp[i-1] + num; // first, adapt now num
        let temp = Math.abs(sumVal * 2 - total)

        if ( temp <= minVal ) {
            // console.log('num, sumVal, temp, minVal')
            minVal = temp;
            dp[i] = sumVal;
            // console.log(num, sumVal, temp, minVal)
        }
    }
}

// console.log(dp);
console.log(minVal);