const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);
// Please Write your code here.
function findMax(start, end) {
    let j = start;
    let max = 0;
    for ( let i = start ; i < end ; i ++ ) {
        while ( j < end && arr[j] - arr[i] <= k ) {
            j += 1;
        }
        max = Math.max(max, j - i);
    }

    return max;
}

let ans = 0;

for ( let mid = 1 ; mid < n - 1 ; mid ++ ) {
    ans = Math.max(ans, findMax(0, mid) + findMax(mid, n-1))
}   

console.log(ans);