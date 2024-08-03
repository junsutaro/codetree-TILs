const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split('\n');

let a = input[0];
let b = input[1];

[a, b] = [b, a];

console.log(`${a}\n${b}`)