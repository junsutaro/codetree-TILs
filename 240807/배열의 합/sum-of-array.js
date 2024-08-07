const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let arr2d = [];

let n = 4;
for ( let i = 0 ; i < n ; i ++ ) {
    arr2d.push(input[i].split(' ').map(Number))
}

for ( let i = 0 ; i < n ; i ++ ) {
    let sumValue = 0;
    for ( let j = 0 ; j < n ; j ++ ) {
        sumValue += arr2d[i][j];
    }
    console.log(sumValue);
}