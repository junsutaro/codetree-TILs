const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let result = [];
let end = N;

while ( end > 0 ) {
    let maxIndex = 0;
    for ( let i = 1 ; i < end ; i ++ ) {
        if ( numbers[i] > numbers[maxIndex] ) {
            maxIndex = i;
        }
    }
    end = maxIndex;
    result += maxIndex + 1 + ' '
}


console.log(result)