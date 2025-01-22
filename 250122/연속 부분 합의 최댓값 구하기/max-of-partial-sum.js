const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);


const dp = Array(n).fill(Infinity);
dp[0] = nums[0];

for ( let i = 1 ; i < n ; i ++ ) {
    dp[i] = Math.max(nums[i], dp[i-1] + nums[i]);    
}

console.log(Math.max(...dp));