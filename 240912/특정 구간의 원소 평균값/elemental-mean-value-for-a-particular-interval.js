const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// console.log(arr)

let cnt = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    for ( let j = i + 1 ; j <= n ; j ++ ) {
        const newArr = arr.slice(i, j);
        // console.log(newArr)

        let sumVal = 0;
        for ( let elem of newArr ) {
            sumVal += elem;
        }

        let avgVal = sumVal / newArr.length
        // console.log(avgVal)

        for ( let elem of newArr ) {
            if ( elem === avgVal ) {
                cnt += 1
                break;
            }
        }
    }

}

console.log(cnt)