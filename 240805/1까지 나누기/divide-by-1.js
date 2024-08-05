const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
let currentValue = n;

let cnt = 0;
let divisor = 1;

while(true) {
    currentValue = parseInt( currentValue / divisor ) 
    divisor += 1
    cnt += 1

    if ( currentValue <= 1 ) {
        break;
    }
}

console.log(cnt)