const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let A = input[1].split(' ').map(Number)
let B = input[2].split(' ').map(Number)

A.sort((prev, cur) => {
    return prev - cur;
})
B.sort((prev, cur) => {
    return prev - cur;
})


// let ans = 'Yes'
// for ( let i = 0 ; i < n ; i ++ ) {
//     console.log(`A = ${A[i]}`)
//     console.log(`B = ${B[i]}`)
//     if (A[i] !== B[i]) {
//         ans = 'No';
//         break;
//     }
// }

const ans = A.join(' ') === B.join(' ') ? 'Yes' : 'No';
console.log(ans);