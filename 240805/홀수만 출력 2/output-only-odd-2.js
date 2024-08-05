const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ');
let output = ''

for ( let i=a ; i >= b ; i -= 2 ) {
    output += i + ' ';
}

console.log(output.trim());