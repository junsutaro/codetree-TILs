const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(' ').map(Number));

let maxCnt = 0;

for ( let i = 0 ; i < N ; i ++ ) {
    for ( let j = 0 ; j < N - 2 ; j ++ ) {
        for ( let k = 0 ; k < N ; k ++ ) {
            for ( let l = 0 ; l < N - 2 ; l ++ ) {

                if ( i === k && (Math.abs(j - l) <= 2) ) {
                    continue;
                }

                let tempCnt = 0;
                for ( let count = 0 ; count < 3 ; count += 1 ) {
                    if ( arr[i][j+ count] === 1 ) {
                        tempCnt += 1;  
                    } 
                    if ( arr[k][l + count] === 1 ) {
                        tempCnt += 1;
                    }
                }
                maxCnt = Math.max(tempCnt, maxCnt);

            }
        }
    }
}


console.log(maxCnt)