const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [n, m] = input.split(' ').map(Number);

const grid = [...Array(n)].map(() => Array(m).fill(0));

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
} 

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let curDir = 0;
let x = 0, y = 0;

let temp = 1;
grid[x][y] = temp;

for ( let i = 0 ; i < n * m - 1; i ++ ) {
    temp += 1
    let nx = x + dx[curDir];
    let ny = y + dy[curDir];

    if (!isRange(nx, ny) || grid[nx][ny] !== 0) {
        curDir = (curDir + 1) % 4;
    }


    
    x += dx[curDir];
    y += dy[curDir];
    
    grid[x][y] = temp

}

for ( let i = 0; i < m ; i ++ ) {
    let print = ''
    for ( let j = 0 ; j < n ; j ++ ) {
        print += `${grid[i][j]} `
    }
    console.log(print);
}