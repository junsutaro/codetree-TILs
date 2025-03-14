const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

let j = 0;
let sum = 0;

let ans = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < n && sum < m ) {
        sum += arr[j];
        j += 1;
    }
    if ( sum === m ) {
        ans += 1;
    }
    sum -= arr[i];
}

console.log(ans);

