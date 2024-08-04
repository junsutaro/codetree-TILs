const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const  [midterm, final] = input.split(' ').map(Number);

let scholarship = 0;

if (midterm >= 90 ) {
    if ( final >= 95) {
        scholarship = 100000;
    } else if ( final >= 90 ) {
        scholarship = 50000;
    }
}

console.log(scholarship)