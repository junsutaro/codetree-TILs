const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = [];
input.slice(1).forEach(elem => {
    const [x1, x2] = elem.split(' ').map(Number);
    segments.push([x1, 1])
    segments.push([x2, -1])
})

// Please Write your code here.

segments.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let maxLength = 0;
let cnt = 0;
let start = -1;

for (const [x, delta] of segments) {
    if (cnt === 0) {
        start = x;
    }
    maxLength = Math.max(maxLength, x - start);

    cnt += delta;
}

console.log(maxLength);