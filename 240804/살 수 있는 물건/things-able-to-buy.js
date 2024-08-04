const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const cost = Number(input);

if (cost >= 3000) {
    console.log('book')
} else if (cost >= 1000) {
    console.log('mask')
} else {
    console.log('no')
}