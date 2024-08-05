const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);

let i = a;
let output = ''

while ( i <= b ) {
    output += i + ' ';
    i += 2
}

console.log(output.trim())