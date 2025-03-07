const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = input[0];

// Please Write your code here.
const n = A.length;
const prefix = Array(n).fill(0);
const suffix = Array(n).fill(0);

prefix[0] = A[0] === '(' ? 1 : 0;
suffix[n-1] = A[n-1] === ')' ? 1 : 0;

for ( let i = 1 ; i < n ; i ++ ) {
    if ( A[i] === '(' ) {
        prefix[i] = prefix[i-1] + 1;
    } else {
        prefix[i] = 0;
    }
}

for ( let i = n-2 ; i >= 0 ; i -- ) {
    if ( A[i] === ')' ) {
        suffix[i] = suffix[i+1] + 1;
    } else {
        suffix[i] = 0;
    }
}

const suffCheck = Array(n).fill(0);
for ( let i = n-2 ; i >= 0 ; i -- ) {
    suffCheck[i] = suffCheck[i+1];
    if ( suffix[i] >= 2 ) { suffCheck[i] += 1 }
}

let ans = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    if ( prefix[i] >= 2 ) {
        ans += suffCheck[i+1];
    }
}
console.log(ans);