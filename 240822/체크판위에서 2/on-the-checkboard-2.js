const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((line) => line.trim().split(' '));

if ( arr[0][0] === arr[r-1][c-1] ) {
    console.log(0);
    return;
}

let count = 0;
for ( let i = 1 ; i < r - 2 ; i ++ ) {
    for ( let j = 1 ; j < c - 2 ; j ++ ) {
        if ( arr[i][j] !== arr[0][0] ) ;
        for ( let k = i + 1 ; k < r - 1 ; k ++ ) {
            for ( let m = j + 1 ; m < c - 1 ; m ++ ) {
                if ( arr[k][m] !== arr[i][j]) {
                    count += 1;
                }
            }
        }
    }
}

console.log(count)