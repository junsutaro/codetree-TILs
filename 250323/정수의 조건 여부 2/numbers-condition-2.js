const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let a = Number(input);

if ( a === 5 ) {
    console.log('A')
} else if ( a % 2 === 0 ) {
    console.log('B')
}
