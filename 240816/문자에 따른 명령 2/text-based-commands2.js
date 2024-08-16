const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let dir = 0;
let [x, y] = [0, 0]
for ( let i = 0 ; i < input.length ; i ++ ) {
    if ( input[i] === 'L' ) {
        dir = ( dir + 4 - 1) % 4 ;
    } else if ( input[i] === 'R' ) {
        dir = ( dir + 1 ) % 4
    } else {
        x = x + dx[dir];
        y = y + dy[dir];
    }
}

console.log(x, y)