const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
let arr;

for ( let i = 0; i < n ; i ++ ) {
    arr = ''
    for ( let j = 0; j <= n - 1 - i ; j ++ ) {
        arr += `${i+1} * ${j+1} = ${(i+1)*(j+1)}`
        if ( j == n - 1 - i ) {
            arr += '\n'
        }
        else {
            arr += ' / '
        }
    }
    console.log(arr)
}