const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0], 10);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

let j = 0;
let cntArr = Array(5).fill(0);
let ans = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < n && cntArr[arr[j]] !== 1 ) {
        cntArr[arr[j]] += 1;
        j += 1;
    }
    ans = Math.max(ans, j - i)
    cntArr[arr[i]] -= 1
}

console.log(ans);