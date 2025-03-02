const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const segments = []

input.slice(1).forEach(elem => {
    const [x1, x2] = elem.split(' ').map(Number);
    segments.push([x1, 1]);
    segments.push([x2, -1]);
})

segments.sort((a, b) => a[0] - b[0])

const len = segments[2*n-1][0];
const prefix = Array(len+1).fill(0);
const arr = Array(len + 1).fill(0);
for ( const [num, sign] of segments ) {
    arr[num] += sign;
}

prefix[0] = arr[0];
let ans = 0;
for ( let i = 1 ; i <= len ; i ++ ) {
    prefix[i] = prefix[i-1] + arr[i];
    ans = Math.max(ans, prefix[i]);
}

console.log(ans);