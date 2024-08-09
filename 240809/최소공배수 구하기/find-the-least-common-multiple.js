const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);

let [n, m] = [a, b]

while ( m > 0 ) {
    [ n, m ] = [ m, n % m ]
}

console.log(a * b / n)