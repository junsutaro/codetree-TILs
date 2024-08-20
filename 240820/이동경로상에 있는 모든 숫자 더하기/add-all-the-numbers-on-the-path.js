const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const commands = input[1];

const grid = input.slice(2).map((line) => line.split(' ').map(Number));

const startX = parseInt(n / 2);
const startY = parseInt(n / 2);

let curX = startX;
let curY = startY;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let sum = grid[curX][curY];
let curDir = 0;

for (let i = 0 ; i < commands.length ; i ++ ) {
    if ( commands[i] === 'R') {
        curDir = ( curDir + 1 ) % 4;
    } else if ( commands[i] === 'L' ) {
        curDir = ( curDir + 3 ) % 4;
    } else {
        const nx = curX + dx[curDir];
        const ny = curY + dy[curDir];
        if ( 0 <= nx && nx < n && 0 <= ny && ny < n ) {
            curX = nx;
            curY = ny;
            sum += grid[curX][curY];
        }
    }
    console.log(sum)
}