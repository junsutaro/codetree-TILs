const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

console.log(a === 1 ? 't' : 'f')