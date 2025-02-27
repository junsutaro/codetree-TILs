const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const word = input[1];
// Please write your code here.

const C = Array(n).fill(0);
const O = Array(n).fill(0);
const W = Array(n).fill(0);

for ( let i = 0 ; i < n ; i ++ ) {
    C[i] = ( i === 0 ? 0 : C[i-1] )
    if ( word[i] === 'C' ) {
        C[i] += 1;
    }
}
for ( let i = n-1; i >= 0 ; i -- ) {
    W[i] = ( i === n-1 ? 0 : W[i+1] )
    if ( word[i] === 'W' ) {
        W[i] += 1
    }
}

let ans = 0;
for ( let i = 1 ; i < n-1 ; i ++ ) {
    if ( word[i] === 'O' ) {
        ans += ( C[i-1] * W[i+1] ); 
    }
}

console.log(ans);