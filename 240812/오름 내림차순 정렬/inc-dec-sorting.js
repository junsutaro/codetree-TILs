const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);


let arr = numbers;

arr.sort((prev, cur) => {
    return prev - cur;
})

console.log(arr.join(' '))

console.log(arr.reverse().join(' '))