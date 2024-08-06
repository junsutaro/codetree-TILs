const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [start, end] = input.split(' ').map(Number);
let ans = 0;

for ( let i = start ; i <= end ; i ++ ) {
    let cnt = 0;    
    for ( let j = 1 ; j <= i ; j ++ ) {
        if ( i % j === 0 ) {
            cnt += 1
        }
    }
    if (cnt === 3) {
        ans += 1
    }
}

console.log(ans)