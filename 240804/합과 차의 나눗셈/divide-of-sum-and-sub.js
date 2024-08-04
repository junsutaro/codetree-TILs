const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
let [a, b] = input.split(' ').map(Number);

ans = ((a+b)/(a-b)).toFixed(2);

console.log(ans);