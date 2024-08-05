const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let cnt = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    arr = ''
    for ( let j = 0 ; j < n ; j ++ ) {
        if ( i % 2 === 0 ) {
            cnt += 1
            arr += cnt + ' '
        }
        else {
            cnt += 2;
            arr += cnt + ' '
        }
    }
    console.log(arr);
}