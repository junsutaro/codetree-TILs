const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const nums = input.slice(1, n + 1).map(Number);

// Please Write your code here.
const prefix = Array(n).fill(0);
prefix[0] = nums[0] % 7;

const mins = Array(7).fill(Infinity);
const maxes = Array(7).fill(Infinity);
mins[prefix[0]] = 0;
maxes[prefix[0]] = 0;

for ( let i = 1; i < n ; i ++ ) {
    let tempRemain = (prefix[i-1] + nums[i]) % 7;
    prefix[i] = tempRemain

    mins[tempRemain] = Math.min(i, mins[tempRemain])
    maxes[tempRemain] = i
}

let ans = 0;
for ( let i = 0 ; i < 7 ; i ++ ) {
    if ( maxes[i] === Infinity ) continue;
    ans = Math.max(ans, maxes[i] - mins[i])
}

console.log(ans);