const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);
// Please Write your code here.

const prefix = Array(n).fill(0);
let left = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    while ( left < n && arr[i] - arr[left] > k ) {
        left += 1;
    }
    const current = i - left + 1;
    prefix[i] = i === 0 ? current : Math.max(prefix[i-1], current);
}


const suffix = Array(n).fill(0);
let right = n-1;
for ( let i = n-1 ; i >= 0 ; i -- ) {
    while ( arr[right] - arr[i] > k ) {
        right -= 1;
    }
    const current = right - i + 1;
    suffix[i] = i === n-1 ? current : Math.max(suffix[i+1], current);
}

let ans = 0;
for ( let i = 0 ; i < n-1 ; i ++ ) {
    ans = Math.max(ans , prefix[i] + suffix[i+1])
}

console.log(ans);