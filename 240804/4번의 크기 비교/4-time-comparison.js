const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const arr = input.split('\n')
const a = Number(arr[0])
const [b, c, d, e] = arr[1].split(' ').map(Number)

console.log(a > b ? 1 : 0)
console.log(a > c ? 1 : 0)
console.log(a > d ? 1 : 0)
console.log(a > e ? 1 : 0)