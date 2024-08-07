const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let arr2d = [];

let n = input.length;

for ( let i = 0 ; i < n ; i ++ ) {
    arr2d.push(input[i].split(' ').map(Number))
}

for ( let i = 0 ; i < n ; i ++ ) {
    let sumValue = arr2d[i].reduce((acc, curr) => acc + curr, 0)
    console.log(sumValue);
}