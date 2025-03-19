const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

console.log(a === 100 ? 'pass' : 'failure')