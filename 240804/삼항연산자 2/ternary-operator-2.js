const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);
const b = a == 1 ? 't' : 'f';


console.log(b)