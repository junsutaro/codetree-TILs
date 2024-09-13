const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const pattern = input[1].split(' ').map(Number);

let count = 0;

for ( let i = 1 ; i <= n ; i ++ ) {
    for ( let j = 1 ; j <= n ; j ++ ) {
        for ( let k = 1 ; k <= n ; k ++ ) {
            // 로직
            if ( Math.abs(i - pattern[0]) <= 2 ) {
                count ++;
                continue;
            }
            if ( Math.abs(j - pattern[1]) <= 2 ) {
                count ++;
                continue;
            }
            if ( Math.abs(k - pattern[2]) <= 2 ) {
                count ++;
                continue;
            }
        }
    }
}

console.log(count);