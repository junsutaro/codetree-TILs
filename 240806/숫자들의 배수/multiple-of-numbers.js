const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let cnt = 0
let arr = ''
let currentVal = n;

while ( cnt < 2 ) { 
    if ( currentVal % 5 === 0 ) {
        cnt += 1
    }
    arr += currentVal + ' ';
    currentVal += n ;
}

console.log(arr)