const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input);

console.log(`Your score is ${num} point.`)