const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const grid = [...Array(n)].map(() => Array(n).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

for ( let i = 1 ; i <= m ; i ++ ) {
    const [tempX, tempY] = input[i].split(' ').map(Number);

    const x = tempX - 1;
    const y = tempY - 1;

    grid[x][y] = 1;

    let count = 0;
    for ( let j = 0; j < 4 ; j ++ ) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (isRange(nx, ny) && grid[nx][ny] === 1 ) {
            count += 1;
        }
    }
    if ( count === 3 ) {
        console.log(1);
    } else {
        console.log(0);
    }

    // console.log(grid)
}