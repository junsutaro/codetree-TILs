const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((line) => line.trim().split(' '));

if ( arr[r-1][c-1] === arr[0][0] ) {
    console.log(0);
    return;
}
let count = 0;
for ( let i = 1 ; i < r - 2 ; i ++ ) {
    for ( let j = 1 ; j < c - 2 ; j ++ ) {
        if ( arr[i][j] !== arr[0][0] ) {
            for ( let k = i + 1 ; k < r - 1 ; k ++ ) {
                for ( let l = j + 1 ; l < c - 1 ; l ++ ) {
                    if ( arr[k][l] !== arr[i][j] ) {
                        count += 1;
                        continue
                    }
                }
            }
        }
    }
}

console.log(count)