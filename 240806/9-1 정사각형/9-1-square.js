const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let arr
let cnt = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    arr = ''
    for ( let j = 0 ; j < n ; j ++ ) {
        arr += (9 - (cnt % 9))
        cnt += 1
        }
    console.log(arr)
}