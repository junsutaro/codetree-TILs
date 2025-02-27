const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

const prefix = Array(n).fill(0);
const suffix = Array(n).fill(0);
prefix[0] = nums[0];
suffix[n-1] = nums[n-1];


for ( let i = 1 ; i < n ; i ++ ) {
    prefix[i] = Math.max(prefix[i-1], nums[i])
    suffix[n-1-i] = Math.max(suffix[n-i], nums[n-1-i] )
}

let ans = 0;
for ( let i = 2 ; i <= n - 3 ; i ++ ) {
    const tempMax = prefix[i-2] + suffix[i+2] + nums[i];
    ans = Math.max(tempMax, ans)
}

console.log(ans);