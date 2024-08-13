const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = input;

let value = 0;
for ( let i = 0 ; i < n.length ; i ++ ) {
    value = value * 2 + (n[i] === '1' ? 1 : 0);
}

console.log(value)