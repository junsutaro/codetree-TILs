const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let minVal = numbers[0];
let maxVal = numbers[0];
let minCnt = 1;
let maxCnt = 1;

for ( let i = 1 ; i < N ; i ++  ) {
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

console.log(minVal, minCnt)