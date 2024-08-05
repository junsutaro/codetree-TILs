const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const numbers = input.split('\n').map(Number);

let ans = 1

for ( let i = 0 ; i < numbers.length ; i++ ) {
    const number = numbers[i];
    if ( number % 3 !== 0 ) { 
        ans = 0;
        break;
    }
}

console.log(ans)