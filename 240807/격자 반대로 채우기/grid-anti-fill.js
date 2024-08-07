const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
// const n = 5;
let arr = Array(n).fill(0).map(() => Array(n).fill(0))

temp = 1;

for ( let j = n - 1 ; j >= 0 ; j -- ) {
    if ( n % 2 === 0 ) {
        if ( j % 2 === 1 ) {
            for ( let i = n - 1; i >= 0 ; i -- ) {
                arr[i][j] = temp;
                temp += 1
            }
        } else {
            for ( let i = 0; i < n ; i ++ ) {
                arr[i][j] = temp;
                temp += 1
            }
        }
    }
    if ( n % 2 === 1 ) {
        if ( j % 2 === 0 ) {
            for ( let i = n - 1; i >= 0 ; i -- ) {
                arr[i][j] = temp;
                temp += 1
            }
        } else {
            for ( let i = 0; i < n ; i ++ ) {
                arr[i][j] = temp;
                temp += 1
            }
        }
    }
}

for ( let elem of arr ) {
    console.log(elem.join(' '))
}