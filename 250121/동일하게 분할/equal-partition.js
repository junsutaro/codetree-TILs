const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

const total = nums.reduce((acc, num) => acc + num, 0);

const dp = Array(total + 1).fill(false);
dp[0] = true;

for ( const num of nums ) {
    for ( let i = total ; i >= num ; i -- ) {
        dp[i] = dp[i] || dp[i-num];
    }
}

// console.log(dp);

console.log(dp[total/2] === true ? 'Yes' : 'No' );