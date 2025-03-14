const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const arr = input.slice(1).map(Number);
arr.sort((a, b) => a - b)
// Please Write your code here

let ans = 0;
let j = n-1;

for ( let i = 0 ; i < n ; i ++ ) {
    while ( j > i && arr[i] + arr[j] > k ) {
        j -= 1;
    }
    
    if ( i < j ) {
        ans += (j - i);
    }
}
console.log(ans);