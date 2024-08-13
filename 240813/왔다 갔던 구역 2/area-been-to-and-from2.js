const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array(201).fill(0);

let index = 100;

for ( let i = 1; i <= n ; i ++ ) {
    const [x, dir] = input[i].split(' ');
    const dist = Number(x);

    let start = index;
    let end = ( dir === 'R' ) ? index + dist : index - dist

    if ( start > end ) {
        [start, end] = [end, start] 
    }

    for ( let j = start ; j < end ; j ++ ) {
        arr[j] += 1;
    }

    index = ( dir === 'R' ) ? index + dist : index - dist;

}

let cnt = 0;

for ( let elem of arr ) {   
    if ( elem > 1 ) {
        cnt += 1
    }
}

console.log(cnt)