const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let numbers = input[1].split(' ').map(Number);

numbers.sort((prev, cur) => {
    return prev - cur;
})

// console.log(numbers)

let maxVal = 0;

for (let i = 0 ; i < n ; i ++ ) {
    if ( (numbers[i] + numbers[2*n-1-i]) > maxVal ) {
        maxVal = numbers[i] + numbers[2*n-1-i];
        }
}

console.log(maxVal)