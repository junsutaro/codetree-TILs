const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let currentValue = n;

let cnt = 0

while ( currentValue < 1000 ) {
    cnt += 1
    if ( currentValue % 2 === 0 ) {
        currentValue = currentValue * 3 + 1;
    } else {
        currentValue = currentValue * 2 + 1;
    }
}

console.log(cnt)