const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const arr = input.split(' ').map(Number);

let sumVal = 0

for ( let i = 0 ; i < arr.length ; i ++ ) {
    if ( arr[i] === 0 ) {
        for ( let j = i - 3 ; j < i ; j ++ ) {
            sumVal += arr[j]
        }
        break;
    }
}

console.log(sumVal)