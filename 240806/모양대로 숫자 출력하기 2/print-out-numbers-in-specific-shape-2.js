const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let arr
let cnt = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    arr = ''
    for ( let j = 0 ; j < n ; j ++ ) {
        arr += (cnt % 8 + 2) + ' '
        cnt += 2
    }
    console.log(arr)
}