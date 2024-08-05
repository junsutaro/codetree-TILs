const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, n] = input.split(' ').map(Number);

let sum = a

for ( let i = 0 ; i < n ; i ++ ) {
    console.log(sum += n)
}