const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b, c] = input.split(' ').map(Number);

let mid;

if ((a >= b && a <= c) || (a >= c && a <= b)) {
    mid = a;
} else if ((b >= a && b <= c) || (b >= c && b <= a)) {
    mid = b;
} else {
    mid = c;
}

console.log(mid)