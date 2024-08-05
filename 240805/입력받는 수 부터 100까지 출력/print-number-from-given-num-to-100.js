const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)

let output = ''

for ( let i = n ; i <= 100 ; i ++ ) {
    output += i + ' '
}

console.log(output.trim())