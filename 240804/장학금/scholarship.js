const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const  [midterm, final] = input.split(' ').map(Number);

let scholarship = 0;

if (midterm >= 90 ) {
    if ( final >= 95) {
        scholarship = 10;
    } else if ( final >= 90 ) {
        scholarship = 5;
    }
}

console.log(scholarship)