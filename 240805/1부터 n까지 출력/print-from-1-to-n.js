const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
let output = ''

for ( let i = 1 ; i <= n ; i ++ ) {
    output += i + ' '  
}

console.log(output.trim())