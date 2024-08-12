const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const str = input;

let arr = [...str]

arr.sort();

console.log(arr.join(''))