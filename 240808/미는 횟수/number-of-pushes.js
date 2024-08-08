const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = input[0];
const B = input[1];

let ans = -1;
for ( let i = 1 ; i < A.length ; i ++ ) {
    let changedA = A.slice(-i) + A.slice(0, A.length - i)
    if ( changedA === B ) {
        ans = i;
        break;
    }
}

console.log(ans)