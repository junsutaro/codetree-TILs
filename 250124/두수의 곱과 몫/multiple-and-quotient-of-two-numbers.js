const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const [a, b] = input;

console.log(`${a} * ${b} = ${a * b}`)
console.log(`${a} / ${b} = ${Math.floor(a / b)}`)