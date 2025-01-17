const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const inputs = input.slice(1).map(elem => elem.split(' ').map(Number));

inputs.sort((a, b) => a[1] - b[1]);

let count = 0;
let lastEnd = -1;

for (let i = 0; i < n; i++) {
    const [start, end] = inputs[i];
    if (start > lastEnd) { 
        lastEnd = end;
    }
}

console.log(count);
