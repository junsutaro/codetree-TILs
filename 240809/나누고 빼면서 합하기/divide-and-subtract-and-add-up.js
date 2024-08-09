const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number)

let tempIndex = m;

let sumVal = numbers[m-1];
while ( tempIndex > 1 ) {
    if ( tempIndex % 2 === 1 ) {
        tempIndex -= 1;
        sumVal += numbers[tempIndex-1];
    } else {
        tempIndex /= 2;
        sumVal += numbers[tempIndex-1]
    }
}

console.log(sumVal)