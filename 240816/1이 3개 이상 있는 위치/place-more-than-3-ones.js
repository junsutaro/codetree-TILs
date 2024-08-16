const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(' ').map(Number))

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let ans = 0;

for ( let i = 0; i < n ; i ++ ) {
    for ( let j = 0; j < n ; j ++ ) {
        let [x, y] = [i, j]
        let count = 0;
        for ( let dir = 0; dir < dx.length ; dir ++ ) {
            const nx = x + dx[dir];
            const ny = y + dy[dir];
            if ( nx >= n || nx < 0 || ny >= n || ny < 0 ) {
                continue;
            }

            if ( arr[nx][ny] === 1 ) {
                count += 1
                // console.log(`${i} ${j} 일 때, count = ${count}`)
            }

        }
        if ( count >= 3 ) {
            ans += 1
        }
    }
}
console.log(ans)