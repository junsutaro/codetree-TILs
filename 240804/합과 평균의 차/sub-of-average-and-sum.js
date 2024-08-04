const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let [a, b, c]  = input.split(' ').map(Number);

let sum = a + b + c;
let avg = sum / 3;
let ans = sum - avg;

console.log(sum)
console.log(avg)
console.log(ans)