const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let maxVal = parseInt(input, 2);
const numbers = input.split('').map(Number);


if (numbers === '1') {
    console.log(0);
    return;
}

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
    }
}

console.log(maxVal)