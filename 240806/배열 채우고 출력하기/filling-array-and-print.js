const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const arr = input.split(' ');
console.log(arr.reverse().join(''))