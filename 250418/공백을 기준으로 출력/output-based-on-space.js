const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];
const b = input[1];

let ans = '';

for ( let i = 0 ; i < a.length ; i ++ ) {
    if ( a[i] !== ' ' ) {
        ans += a[i];
    }
}
for ( let i = 0 ; i < b.length ; i ++ ) {
    if ( b[i] !== ' ' ) {
        ans += b[i];
    }
}

console.log(ans)