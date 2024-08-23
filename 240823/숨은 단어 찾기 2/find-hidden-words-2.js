const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1)

const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0 ,-1, -1, -1, 0, 1];

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < m ;
}

const wordToFind = {
    1: 'L',
    2: 'E',
    3: 'E'
}


let ans = 0;
for ( let i = 0; i < n; i ++ ) {
    for ( let j = 0; j < m; j ++ ) {
        if ( arr[i][j] === 'L' ) {

            for ( let dir = 0 ; dir < 8 ; dir ++ ) {
                let curCount = 1;
                let curX = i;
                let curY = j;

                while (true) {
                    const nx = curX + dx[dir];
                    const ny = curY + dy[dir];
                    curCount += 1;

                    if ( !isRange(nx, ny) ) {
                        break;
                    }

                    if ( arr[nx][ny] !== wordToFind[curCount] ) {
                        break;
                    }
        
                    curX = nx;
                    curY = ny;

                    if ( curCount === 3 ) {
                        ans += 1 ;   
                        break;
                    }

                }

            }
        }
    }
}

console.log(ans)