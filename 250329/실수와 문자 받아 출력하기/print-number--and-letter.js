const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const c = input[0];
const a = Number(input[1]);
const b = Number(input[2]);

console.log(c);
console.log(a.toFixed(2))
console.log(b.toFixed(2))