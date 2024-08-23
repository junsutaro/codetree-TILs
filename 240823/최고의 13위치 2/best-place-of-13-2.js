const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(' ').map(Number));

// console.log(arr)
const MIN_NUM = Number.MIN_SAFE_INTEGER
let ans = MIN_NUM;

for ( let i = 0; i < N ; i ++ ) {
    for ( let j = 0 ; j < N - 2 ; j ++ ) {

        let count = 0;
        for ( let k1 = 0 ; k1 < 2 ; k1 ++ ) {
            if (arr[i][j+k1] === 1) {
                count += 1;
            }
        }


        for ( let m = i + 1 ; m < N ; m ++ ) {
            for ( let n = 0 ; n < N ; n ++ ) {
                
                for ( let k2 = 0; k2 < 2 ; k2 ++ ) {
                    if ( arr[m][n+k2] === 1 ) {
                        count += 1;
                        // console.log('땡그랑')
                    }
                }
            }
        }

        ans = Math.max(count, ans)

    }
}

console.log(ans)