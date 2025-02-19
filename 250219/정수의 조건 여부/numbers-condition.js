const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

let ans = a >= 113 ? 1 : 0;

console.log(ans);