const fs = require('fs');
const input = fs.readFileSync(0).toString().trim()

const [a, b] = input.split(' ').map(Number);

const ans = (a + b) / (a - b)
console.log(ans.toFixed(2))