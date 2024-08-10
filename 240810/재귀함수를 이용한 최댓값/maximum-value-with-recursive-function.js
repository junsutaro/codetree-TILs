const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);


function findMax(numbers, tempIdx = 0, maxValue = numbers[0]) {
    if ( tempIdx === n ) {
        return maxValue;
    }

    if ( numbers[tempIdx] > maxValue) {
        maxValue = numbers[tempIdx];
    }

    return findMax(numbers, tempIdx + 1, maxValue)
    
}

const result = findMax(numbers)

console.log(result)