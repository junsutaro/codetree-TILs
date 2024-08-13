const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const OFFSET = 20;
const arr = Array(41).fill(0);

let index = OFFSET;

for ( let i = 1; i <= n ; i ++ ) {
    const [x, dir] = input[i].split(' ');
    const dist = Number(x);

    let [start, end] = [0, 0]

    if ( dir === 'R' ) {
        start = index;
        end = index + dist;
        index = index + dist
    } else {
        start = index - dist ;
        end = index 
        index = index - dist 
    }

    for ( let j = start ; j < end ; j ++ ) {
        arr[j] += 1;
    }

}
let cnt = 0;

for ( let elem of arr ) {
    if ( elem > 1 ) {
        cnt += 1
    }
}

console.log(cnt)