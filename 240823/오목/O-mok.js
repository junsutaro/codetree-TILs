const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.map((line) => line.split(' ').map(Number));

function isRange(x, y) {
    return 0 <= x && x < 19 && 0 <= y && y < 19;
}

const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0, -1, -1, -1, 0, 1];

for ( let i = 0 ; i < 19 ; i ++ ) {
    for ( let j = 0 ; j < 19 ; j ++ ) {
        if ( arr[i][j] === 0 ) {
            continue;
        }

        for ( let dir = 0 ; dir < 8 ; dir ++ ) {
            let curCount = 1;
            let curX = i;
            let curY = j;

            while (true) {
                const nx = curX + dx[dir];
                const ny = curY + dy[dir];
                
                if ( !isRange(nx, ny) ) {
                    break;
                }
                if ( arr[nx][ny] !== arr[curX][curY] ) {
                    break;
                }

                curCount += 1;
                curX = nx;
                curY = ny;

                if (curCount === 5) {
                    console.log(arr[i][j]);
                    console.log(i + 1 + dx[dir] * 2, j + 1 + dy[dir] * 2)
                    return;
                }
            }


        }
    }
}

console.log(0);