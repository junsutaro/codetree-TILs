const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

let total = nums.reduce((acc, num) => acc + num , 0);

const dp = Array(total + 1).fill(false);
dp[0] = true;

for ( const num of nums ) {
    for ( let i = total ; i >= num ; i -- ) {
        if ( dp[i-num] === false ) continue;
        dp[i] = dp[i] || dp[i-num]; // 하나라도 true => true 
    }
}


let minVal = Infinity;
for ( let i = 1 ; i < total ; i ++ ) {
    if ( dp[i] ) {
        const diff = Math.abs(total - 2 * i);
        minVal = Math.min(diff, minVal);
    }
}

console.log(minVal);