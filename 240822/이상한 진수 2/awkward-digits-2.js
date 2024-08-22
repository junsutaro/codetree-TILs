const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let maxVal = 0;
const numbers = input.split('').map(Number);


function calDigit(numbers) {
    let val = 0;
    for ( let i = 0 ; i < numbers.length ; i ++ ) {
        val *= 2;
        val += numbers[i];
    }
    return val;
}

for ( let i = 0; i < numbers.length ; i ++ ) {
    if ( numbers[i] === 0 ) {
        numbers[i] = 1;
        const tempVal = calDigit(numbers);
        if ( tempVal > maxVal ) {
            maxVal = tempVal
        }
        numbers[i] = 0;
    } else {
        numbers[i] = 0;
        const tempVal = calDigit(numbers);
        if ( tempVal > maxVal ) {
            maxVal = tempVal
        }
        numbers[i] = 1;
    }
}

console.log(maxVal)