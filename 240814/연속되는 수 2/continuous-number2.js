const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let maxVal = 1;
let count = 1;
for ( let i = 1 ; i <= n-1 ; i ++) {
    if ( input[i] === input[i+1] ) {
        count += 1;
        if ( count > maxVal ) {
            maxVal = count;
        }
    } else {
        count = 1;
    }
}
console.log(maxVal);