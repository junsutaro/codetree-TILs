const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

a = Number(input);

b = a % 3 ? 'NO' : 'YES'
c = a % 5 ? 'NO' : 'YES'

console.log(`${b}\n${c}`)