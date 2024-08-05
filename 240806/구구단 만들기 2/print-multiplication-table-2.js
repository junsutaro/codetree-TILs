const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);
let arr;
for ( let i = 0 ; i < 4 ; i ++ ) {
    arr = ''
    for ( let j = b ; j >= a ; j -- ) {
        arr += j + ' * ' + (i + 1) * 2 + ' = ' + j * (i + 1) * 2;
        if ( j > a ) {
            arr += ' / '
        }
    }
    console.log(arr)
}