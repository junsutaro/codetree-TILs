const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

if ( n >= 80 ) {
    console.log('pass');
} else {
    let asd = 80 - n;
    console.log(`${asd} more score`);
}