const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b, c] = input.split(' ').map(Number);

max = a > b ? ( a > c ? a : c ) : ( b > c ? b : c );

console.log(max)