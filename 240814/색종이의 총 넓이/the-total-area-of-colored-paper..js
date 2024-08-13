const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);

const OFFSET = 100;
const MAXLENGTH = 200;
const chekced = Array.from( { length: MAXLENGTH + 1 }, () => Array(MAXLENGTH + 1).fill(0))

for ( let i = 1 ; i <= N ; i ++ ) {
    [x1, y1] = input[i].split(' ').map(Number);

    for ( let j = x1 ; j < x1 + 8 ; j ++ ) {
        for ( let k = y1 ; k < y1 + 8 ; k ++ ) {
            chekced[j + OFFSET][k + OFFSET] = i;
        }
    }
}

let count = 0;

for ( let i = 0; i < MAXLENGTH ; i ++ ) {
    for ( let j = 0 ; j < MAXLENGTH ; j ++ ) {
        if (chekced[i][j] !== 0) {
            count += 1
        }
    }
}

console.log(count)