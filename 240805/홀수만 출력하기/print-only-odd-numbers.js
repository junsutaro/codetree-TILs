const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const numbers = input.split('\n').map(Number);

const N = numbers[0];

for ( i = 0 ; i <= N ; i ++ ) {
    if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0 ) {
        console.log(numbers[i]);
    }
}