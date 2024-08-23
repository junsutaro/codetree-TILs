const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input.slice(1).map((line) => line.split('').map(Number));
const revNumbers = input.slice(1).map((line) => line.split('').map(Number).reverse());

// console.log(numbers);
// console.log(revNumbers)

let ans = Number.MIN_SAFE_INTEGER

for ( let i = 0 ; i < n - 2 ; i ++ ) {
    for ( let j = i + 1 ; j < n - 1 ; j ++ ) {
        for ( let k = j + 1 ; k < n ; k ++ ) {
            let sumVal = 0;
            let isValid = true;
            for ( let m = 0 ; m < 5 ; m ++ ) {
                const sumOfDigits = ( revNumbers[i][m] || 0 ) + ( revNumbers[j][m] || 0 ) + ( revNumbers[k][m] || 0 )
                if (sumOfDigits >= 10 ) {
                    isValid = false
                    break;
                }
            }
            // console.log('야호!')
            if (isValid) {
                sumVal = Number(numbers[i].join('')) + Number(numbers[j].join('')) + Number(numbers[k].join(''));
                ans = Math.max(ans, sumVal);
                // console.log(sumVal)
            }
        }
    }
}
console.log(ans)