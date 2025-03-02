const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(" ").map(Number);
    segments.push([x1, 1]);
    segments.push([x2, -1]);
}
// Please Write your code here.

segments.sort((a, b) => a[0] - b[0]);

let temp = 0;
let ans = 0;
for ( let i = 0 ; i < n * 2 ; i ++ ) {
    temp += segments[i][1];
    ans = Math.max(temp, ans);
}
console.log(ans);
