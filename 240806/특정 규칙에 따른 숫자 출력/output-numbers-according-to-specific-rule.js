const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let cnt = 0;
let arr;

for ( let i = 0 ; i < n ; i ++ ) {
    arr = ''
    for ( let j = 0 ; j < n ; j ++ ) {
        if ( i > j ) {
            arr += '  '
        }
        else {
            cnt = (cnt % 9) + 1
            arr += cnt + ' '
        }
    }
    console.log(arr)
}