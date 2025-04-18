const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [n, m] = input.split(' ').map(Number);

const grid = [...Array(n)].map(() => Array(m).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dir = 0;

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

let x = 0, y = 0;
let charCode = 'A'.charCodeAt(0); 

for ( let i = 1 ; i <= n * m ; i ++ ) {
    grid[x][y] = String.fromCharCode((i-1 % 26) + 'A'.charCodeAt(0));

    const nx = x + dx[dir];
    const ny = y + dy[dir];
    if ( !isRange(nx, ny) || grid[nx][ny] !== 0 ) {
        dir = ( dir + 1 ) % 4; 
    }    
    x = x + dx[dir];
    y = y + dy[dir];
}

console.log(grid.map((line) => line.join(' ')).join('\n'))