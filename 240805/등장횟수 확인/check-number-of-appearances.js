const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const numbers = input.split('\n').map(Number);
let cnt = 0;

for ( i = 0 ; i <= numbers.length ; i ++ ) {
    if (numbers[i] % 2 === 0 ) {
        cnt += 1
    }
}

console.log(cnt)