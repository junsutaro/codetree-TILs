const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let maxBenefit = 0;
let buyIndex = 0;
let sellIndex = 0;

for ( let i = 0 ; i < N - 1 ; i ++ ) {
    for ( let j = i + 1 ; j < N ; j ++ ) {
        if ( (numbers[j] - numbers[i]) > maxBenefit ) {
            maxBenefit = (numbers[j] - numbers[i])
            buyIndex = i;
            sellIndex = j;
        }
    }
}

console.log(maxBenefit)