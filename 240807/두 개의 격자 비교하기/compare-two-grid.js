const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arrA = [];
const arrB = [];
for ( let i = 1 ; i < n + 1 ; i ++ ) {
    arrA.push(input[i].split(' ').map(Number))
}
for ( let i = n + 1 ; i < 2 * n + 1 ; i ++ ) {
    arrB.push(input[i].split(' ').map(Number))
}


let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

for ( let i = 0; i < n ; i ++ ){
    for ( let j = 0; j < n ; j ++ ) {
        if (arrA[i][j] !== arrB[i][j]) {
            arr2d[i][j] = 1
        }
    }
}

for ( elem of arr2d ) {
    console.log(elem.join(' '))
}