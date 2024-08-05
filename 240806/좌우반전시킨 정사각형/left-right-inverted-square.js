const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let arr
for ( let i = 0 ; i < n ; i ++ ) {
    arr = ''
    for ( let j = 0 ; j < n ; j ++ ) {
        arr += ((i + 1) * (n - j)) + ' '
    }
    console.log(arr)
}