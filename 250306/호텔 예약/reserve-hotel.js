const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    segments.push([start, 1]);
    segments.push([end, -1])
}
// Please write your code here.

segments.sort((a, b) => a[0] - b[0] || b[1] - a[1] )

let ans = 0;
let temp = 0;
for ( const seg of segments ) {
    const [x, sign] = seg;
    temp += sign;
    ans = Math.max(ans, temp);
}

console.log(ans);