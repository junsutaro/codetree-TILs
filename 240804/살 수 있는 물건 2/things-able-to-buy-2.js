const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const budget = Number(input);

if (budget >= 3000) {
    console.log('book')
} else if (budget >= 1000) {
    console.log('mask')
} else if (budget >= 500) {
    console.log('pen')
} else {
    console.log('no')
}