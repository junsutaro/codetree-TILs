const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const [a, b] = input;

console.log(`${Math.floor(a/b)}...${a%b}`)