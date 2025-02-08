const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = Number(input[0]);
const b = Number(input[1]);

const sum = a + b
console.log(sum.toFixed(2));