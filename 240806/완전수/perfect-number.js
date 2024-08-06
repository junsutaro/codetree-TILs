const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [start, end] = input.split(' ').map(Number);
let cnt = 0;

for ( let i = start ; i <= end ; i ++ ) {
    let sum = 0;    
    for ( let j = 1 ; j < i ; j ++ ) {
        if ( i % j === 0 ) {
            sum += j
        }
    }
    if (i === sum) {
        cnt += 1
    }
}

console.log(cnt)