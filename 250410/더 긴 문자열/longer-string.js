const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const a = input[0];
const b = input[1];

if ( a.length > b.length ) {
    console.log(a, a.length)
} else if (a.length < b.length) {
    console.log(b, b.length)
} else {
    console.log('same')
}