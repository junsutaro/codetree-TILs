const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const dx = [0, -1, 0, 1]; // 우 상 좌 하;
const dy = [1, 0, -1, 0];

const n = Number(input);
const grid = [...Array(n)].map(() => Array(n).fill(0));

const startX = parseInt(n / 2);
const startY = parseInt(n / 2);
let curDir = 0;

let x = startX;
let y = startY;
// 1 1 2 2 3 3 4 4 ...


function isRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

let count = 1;
grid[x][y] = count;

    for ( let i = 1 ; i <= n ; i ++ ) {
        // console.log(i)
        for ( let j = 0 ; j < i ; j ++ ) {
            count += 1;
            x = x + dx[curDir];
            y = y + dy[curDir];

            if ( !isRange(x, y) ) {
                break;
            }
            grid[x][y] = count;
            // console.log(grid)
        }
        curDir = (curDir + 1) % 4;
        for ( let j = 0 ; j < i  ; j ++ ) {
            count += 1;
            x = x + dx[curDir];
            y = y + dy[curDir];
            if ( !isRange(x, y) ) {
                break;
            }
            grid[x][y] = count;
        }
        curDir = (curDir + 1) % 4;
    }

    console.log(grid.map((line) => line.join(' ')).join('\n'));