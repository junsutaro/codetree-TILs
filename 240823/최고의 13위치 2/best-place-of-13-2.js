const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(' ').map(Number));

function isRange(x, y) {
    return 0 <= x && x < N && 0 <= y && y < N ;
}

function isNotOverlap(x1, y1, x2, y2) {
    return x1 === x2 && y1 + 3 < y2 && y2 < N;
}

// console.log(arr)
const MIN_NUM = Number.MIN_SAFE_INTEGER
let ans = MIN_NUM;

for ( let i = 0; i < N - 1 ; i ++ ) {
    for ( let j = 0 ; j < N ; j ++ ) {

        let count = 0;
        for ( let k1 = 0 ; k1 < 3 ; k1 ++ ) {
            if (arr[i][j+k1] === 1) {
                count += 1;
            }
        }

        if ( j < N - 5 ) {
            for ( let newJ = j + 3 ; newJ < N - 2 ; newJ ++ ) {
                let totalCount = count;
                for ( let count = 0; count < 3 ; count ++ ) {
                    if ( arr[i][newJ] === 1 ) {
                        totalCount += 1;
                    }
                }
                ans = Math.max(totalCount, ans)
            }
        }

        // console.log(count)

        for ( let m = i + 1 ; m < N ; m ++ ) {
            for ( let n = 0 ; n < N - 2 ; n ++ ) {
                let totalCount = count;
                // console.log(totalCount)
                for ( let k2 = 0; k2 < 3 ; k2 ++ ) {
                    if ( arr[m][n+k2] === 1 ) {
                        totalCount += 1;
                        // console.log('땡그랑', i, j ,m, n+k2)
                    }
                }
                ans = Math.max(totalCount, ans)

            }
        }



    }
}

console.log(ans)