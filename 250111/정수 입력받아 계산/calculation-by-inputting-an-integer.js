const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);
const ans = a * 2 + 3;

console.log(ans);