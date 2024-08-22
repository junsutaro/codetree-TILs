const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;
const INT_MIN = Number.MIN_SAFE_INTEGER;

let minVal = INT_MAX;

for ( let i = 0; i < n ; i ++ ) {
    let tempVal = 0
    for ( let j = 0 ; j < n ; j ++ ) {
        tempVal += (Math.abs( j - i )) * numbers[j];
    }
    
    if ( tempVal < minVal ) {
        minVal = tempVal;
    }
}

console.log(minVal);