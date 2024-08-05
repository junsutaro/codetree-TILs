const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);
let prod = 1;

for ( let i = 1 ; i <= b ; i ++ ) {
    prod = i % a === 0 ? prod *= i : prod;
}

console.log(prod)