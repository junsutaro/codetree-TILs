const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

for ( let i = 1 ; i < 2*n ; i += 2 ) {

    console.log('*'.repeat(i))
}