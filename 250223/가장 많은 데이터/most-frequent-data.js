const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const map = new Map();

input.slice(1).map((val, idx) => {
    map.set(val, (map.get(val) || 0 ) + 1 )
})

let max = 0;

map.forEach((cnt, key) => {
    max = Math.max(cnt, max);
})

console.log(max);