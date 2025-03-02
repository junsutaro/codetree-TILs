const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    segments.push([a, 1]);
    segments.push([b, -1]);
}

segments.sort((a, b) => a[0] - b[0]);
// Please Write your code here.

let ans = 1;
let temp = segments[0][1];

for ( let i = 1 ; i < 2 * n - 1  ; i ++ ) {
    temp += segments[i][1];
    if ( temp >= 1 ) {
        ans += segments[i+1][0] - segments[i][0];
    }
}
console.log(ans);