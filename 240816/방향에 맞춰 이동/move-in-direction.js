const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
const direction = { 'E': 0, 'N': 3, 'W': 2, 'S': 1 };

let [ x, y ] = [ 0, 0 ]

for ( let i = 1; i <= n ; i ++ ) {
    const [polar, dist] = input[i].split(' ');
    const directionIndex = direction[polar];

    x = x + Number(dist) * dx[directionIndex];
    y = y + Number(dist) * dy[directionIndex];
}
    console.log(x, y)