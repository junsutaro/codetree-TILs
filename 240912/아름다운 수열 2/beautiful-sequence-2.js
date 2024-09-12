const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);

function isEqualArray(a, b) {
    for ( let i = 0 ; i < a.length ; i ++ ) {
        if ( a[i] !== b[i] ) {
            return false;
        }
    }
    return true;
}


let cnt = 0;

for ( let i = 0 ; i < n - m + 1 ; i ++ ) {
    const newArr = []; // m개 연속하는 A 부분배열
    for ( let j = i ; j < i + 3 ; j ++ ) {
        newArr.push(arrA[j]);
    }
    if (isEqualArray(newArr.sort(), arrB.sort()) ) {
        cnt += 1;
    }
}

console.log(cnt)