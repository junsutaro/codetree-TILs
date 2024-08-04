const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const month = Number(input);
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(daysInMonth[month - 1])