const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const n = Number(input[1]);

const decimalN = parseInt(n, a);

// console.log(decimalN)

const digitB = decimalN.toString(b)

console.log(digitB)