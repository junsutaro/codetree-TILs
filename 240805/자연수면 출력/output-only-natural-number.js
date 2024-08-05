const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);
let output = ''

if ( Number.isInteger(a) && a > 0 ) {
    for ( let i = 0; i < b ; i ++ ) {
        output += a
    }   
    console.log(output.trim())
} else if ( a <= 0 ) {
    console.log(0)
}