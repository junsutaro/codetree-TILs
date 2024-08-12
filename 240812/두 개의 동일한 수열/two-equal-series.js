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


console.log("Sorted A:", A.join(' '));
console.log("Sorted B:", B.join(' '));

let isEqual = true;
for (let i = 0; i < n; i++) {
    if (A[i] !== B[i]) {
        isEqual = false;
        break;
    }
}

console.log(isEqual ? 'Yes' : 'No');