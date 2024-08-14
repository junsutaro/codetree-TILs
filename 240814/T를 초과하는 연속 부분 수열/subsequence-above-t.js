const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n , t] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);


let maxVal = 1;
let count = 1;

for ( let i = 0 ; i < n-1 ; i ++ ) {
    if ( numbers[i] <= t ) {
        count = 1;
        continue;
    }
    if ( numbers[i] < numbers[i + 1] ) {
        count += 1;
        if ( count > maxVal ) {
            maxVal = count;
        }
    }
}

console.log(maxVal)