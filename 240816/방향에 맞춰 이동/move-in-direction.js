const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
let [ x, y ] = [ 0, 0 ]

for ( let i = 1; i <= n ; i ++ ) {
    const [polar, dist] = input[i].split(' ');
    let dir = 0;
    if ( polar === 'E' ) {
        dir = 0;
    } else if ( polar === 'N' ) {
        dir = 3;
    } else if ( polar === 'W' ) {
        dir = 2;
    } else {
        dir = 1;
    }

    x = x + dist * dx[dir];
    y = y + dist * dy[dir];
}
    console.log(x, y)