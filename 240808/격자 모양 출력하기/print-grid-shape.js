const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n , m] = input[0].split(' ').map(Number);

let arr2d = Array(n).fill(0).map(() => Array(n).fill(0));

for ( let i = 1 ; i < m + 1 ; i ++ ) {
    const [a, b] = input[i].split(' ').map(Number);
    arr2d[a-1][b-1] = a * b;
}

for ( let elem of arr2d ) {
    console.log(elem.join(' '))
}