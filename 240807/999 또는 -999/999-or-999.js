const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const numbers = input.split(' ').map(Number);

let minVal = numbers[0];
let maxVal = numbers[0];
let minCnt = 1;
let maxCnt = 1;

for ( let i = 1 ; i < numbers.length ; i ++  ) {
    if ( numbers[i] === 999 || numbers[i] === -999 ) {
        break
    }
    if ( numbers[i] > maxVal ) {
        maxVal = numbers[i]
        maxCnt = 1;
    } else if ( numbers[i] === maxVal ) {
        maxCnt += 1;
    }
    
    if ( numbers[i] < minVal ) {
        minVal = numbers[i]
        minCnt = 1;
    } else if ( numbers[i] === minVal ) {
        minCnt += 1;
    }
}

console.log(maxVal, minVal)