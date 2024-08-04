const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let a = Number(input);

a = a % 2 ? a += 3 : a

a = a % 3 ? a : a /= 3

console.log(a)