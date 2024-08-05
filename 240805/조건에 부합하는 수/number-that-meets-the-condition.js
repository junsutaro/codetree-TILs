const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);
let output = ''

for ( let i = 1 ; i <= a ; i++ ) {
    if ( i % 2 === 0 && i % 4 !== 0) {
        continue
    } 
    
    if ( Math.floor(i / 8) % 2 === 0 ) {
        continue
    } 
    
    if ( i % 7 < 4 ) {
        continue;
    } else {
        output += i + ' '
    }
}

console.log(output.trim())