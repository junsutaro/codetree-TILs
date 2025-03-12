const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(" ").map(Number);
const sequence = input[1].split(" ").map(Number);

// Please Write your code here.

let j = 0;
let sum = 0;
let ans = Infinity;

for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < n && sum < s ) {
        sum += sequence[j];
        j += 1;
    }
    if ( sum >= s ) {
        ans = Math.min(ans, j - i);
    }
    sum -= sequence[i];
}

console.log(ans);