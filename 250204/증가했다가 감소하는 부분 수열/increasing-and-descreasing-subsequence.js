const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const dp1 = Array.from({length: n}, () => 1);
const dp2 = Array.from({length: n}, () => 1);

for ( let i = 1 ; i < n ; i ++ ) {
    for ( let j = 0 ; j < i ; j ++ ) {
        if ( nums[i] > nums[j] ) {
            dp1[i] = Math.max(dp1[i], dp1[j] + 1);
        }
    }
}
for ( let i = n-1 ; i >= 0 ; i -- ) {
    for ( let j = n ; j > i ; j -- ) {
        if ( nums[i] > nums[j] ) {
            dp2[i] = Math.max(dp2[i], dp2[j] + 1);
        }
    }
}

let ans = Math.max(dp1[n-1], dp2[0])

for ( let i = 1 ; i < n-1 ; i ++ ) {
    ans = Math.max(ans, dp1[i] + dp2[i] - 1);
}

console.log(ans);