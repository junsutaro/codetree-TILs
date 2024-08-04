const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(Number)

console.log(a + b)
console.log(a - b)
console.log(parseInt(a / b))
console.log(a % b)