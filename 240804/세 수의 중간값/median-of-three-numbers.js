const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const  [a, b, c] = input.split(' ').map(Number);

console.log(c > b && b > a ? 1 : 0 )