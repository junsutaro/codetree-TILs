const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const arr = input.split(' ');

let sumVal = 0;

arr.forEach((val) => sumVal += Number(val))

console.log(sumVal)