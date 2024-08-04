const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, arr] = input.split('\n')
const [b, c, d, e] = arr.split(' ')

console.log(a > b ? 1 : 0)
console.log(a > c ? 1 : 0)
console.log(a > d ? 1 : 0)
console.log(a > e ? 1 : 0)