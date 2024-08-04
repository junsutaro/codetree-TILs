const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b, c] = input.split(' ').map(Number);

const res1 = a <= b && a <= c ? 1 : 0;
const res2 = a === b && a === c ? 1 : 0;

console.log(`${res1} ${res2}`)