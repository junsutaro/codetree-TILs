const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);

if (a > b) {
    console.log(a * b)
} else {
    console.log(parseInt(b / a))
}