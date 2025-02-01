const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);
const sum = a + b;
const avg = sum/2
console.log(sum, avg.toFixed(1))