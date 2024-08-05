const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)

let i = 1;

while ( i <= n ) {
    console.log('*')
    i ++
}