const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const  [a, b, c] = input.split(' ').map(Number);

const min = ( a < b ) ? ((a < c) ? a : c ) : ( (b < c) ? b : c )

console.log(min)