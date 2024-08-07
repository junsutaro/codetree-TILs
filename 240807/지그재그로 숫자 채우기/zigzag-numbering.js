const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [n, m] = input.split(' ').map(Number);

let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

let temp = 0;

for ( let j = 0 ; j < m ; j ++ ) {
    if ( j % 2 === 0) {
        for ( let i = 0 ; i < n ; i ++ ) {
            arr2d[i][j] = temp;
            temp += 1;
        }
    }
    else {
        for ( let i = n - 1 ; i >= 0 ; i -- ) {
            arr2d[i][j] = temp;
            temp += 1;
        }
    }
}

for ( let elem of arr2d ) {
    console.log(elem.join(' '))
}