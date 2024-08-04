const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b, c] = input.split(' ').map(Number);

let mid;

if ( a > b ) {
    if ( b > c ) {
        mid = b
    } else if ( c > a ) {
        mid = a
    }
} else if ( a < b ) {
    if ( b < c ) {
        mid = b;
    } else if ( c < a ) {
        mid = a
    }
}

console.log(mid)