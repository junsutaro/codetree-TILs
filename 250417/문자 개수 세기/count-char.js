const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];
const b = input[1];

const aLen = a.length;

let ans = 0;
for ( let i = 0 ; i < aLen ; i ++ ) {
    if ( a[i] === b ) {
        ans += 1;
    }
}

console.log(ans);