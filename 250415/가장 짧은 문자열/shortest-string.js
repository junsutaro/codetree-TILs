const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let max = 0;
let min = Infinity;

for ( let i = 0 ; i < 3 ; i ++ ) {
    max = Math.max(max, input[i].length);
    min = Math.min(min, input[i].length);
}

console.log(max - min);