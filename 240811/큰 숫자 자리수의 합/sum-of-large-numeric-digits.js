const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const product = input[0] * input[1] * input[2];


function sumOfDigits(n) {
    if ( n === 0 ) {
        return 0;
    }

    return ( n % 10 ) + sumOfDigits(Math.floor(n / 10));

}

const result = sumOfDigits(product);

console.log(result)