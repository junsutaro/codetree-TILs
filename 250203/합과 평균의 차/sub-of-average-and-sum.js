const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();


const [a, b, c] = input.split(' ').map(Number);

const sum = a + b + c;
const avg = sum / 3;
const ans = sum - avg;

console.log(sum);
console.log(avg);
console.log(ans);