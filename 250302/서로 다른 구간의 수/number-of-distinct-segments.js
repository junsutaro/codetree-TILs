const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    segments.push([a, b]);
}
segments.sort((a, b) => a[0] - b[0] )

// Please Write your code here.
let ans = 1;
let tempMax = segments[0][1]
for ( let i = 1 ; i < n ; i ++ ) {
    const [x1, x2] = segments[i]
    if ( x1 > tempMax )  {
        ans += 1;
    }
    tempMax = Math.max(tempMax, x2)
}
console.log(ans);