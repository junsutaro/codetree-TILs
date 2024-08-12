const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input);
let A = input[1].split(' ').map(Number)
let B = input[2].split(' ').map(Number)

A.sort((prev, cur) => {
    return prev - cur;
})
B.sort((prev, cur) => {
    return prev - cur;
})

let ans = 'Yes'

for ( let i = 0 ; i < n ; i ++ ) {
    if (A[i] !== B[i]) {
        ans = 'No';
        break;
    }
}

console.log(ans)