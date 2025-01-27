const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let [a, b] = input;

a = a + b;
b = b + a ;

console.log(a, b);