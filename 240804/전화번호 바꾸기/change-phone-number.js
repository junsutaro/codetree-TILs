const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const parts = input.split('-');


console.log(`${parts[0]}-${parts[1]}-${parts[2]}`);