const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const parts = input.split('-');


console.log(`${parts[0]}-${parts[2]}-${parts[1]}`);