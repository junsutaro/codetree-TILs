const fs = require('fs');
const a = fs.readFileSync(0).toString().trim();

const ans = Number(a) + 2;

console.log(ans);