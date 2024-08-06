const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

let max1 = -Infinity;
let max2 = -Infinity;

for (let i = 0; i < N; i++) {
    if (numbers[i] > max1) {
        max2 = max1;
        max1 = numbers[i];
    } else if (numbers[i] > max2) {
        max2 = numbers[i];
    }
}

console.log(max1, max2);