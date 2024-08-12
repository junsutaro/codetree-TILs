const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, k] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

numbers.sort((prev, cur) => {
    return prev - cur;
})

console.log(numbers[k-1])