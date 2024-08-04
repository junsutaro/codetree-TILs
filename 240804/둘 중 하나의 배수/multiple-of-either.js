const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

console.log( a % 5 == 0 || a % 3 == 0 ? 1 : 0 );