const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
const ans = (n * 30.48).toFixed(1);

console.log(ans);
