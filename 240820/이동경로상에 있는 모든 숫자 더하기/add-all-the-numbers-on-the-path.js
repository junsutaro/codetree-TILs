const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const commands = input[1];

const grid = input.slice(2).map((line) => line.split(' ').map(Number));

const startX = parseInt(n / 2);
const startY = parseInt(n / 2);

let curX = startX;
let curY = startY;

let sum = grid[curX][curY];
let curDir = 0;

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}


function simulate() {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1]

    for (let command of commands) {
        if ( command === 'R' ) {
            curDir = ( curDir + 1) % 4;
        } else if ( command === 'L' ) {
            curDir = ( curDir + 3 ) % 4;
        } else { 
            const nx = curX + dx[curDir];
            const ny = curY + dy[curDir];
            if ( isRange(nx,ny) ) {
                curX = nx;
                curY = ny;
                sum += grid[curX][curY];
            }
        }
    }
}

simulate();

console.log(sum)