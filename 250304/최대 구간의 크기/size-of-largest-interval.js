const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = input.slice(1).map(elem => elem.split(' ').map(Number));

// Please Write your code here.

segments.sort((a, b) => a[0] - b[0]);

let [start, temp] = segments[0];

let ans = 0;
for ( let i = 1 ; i < n ; i ++ ) {
    const [x1, x2] = segments[i];

    if ( x1 > temp ) {
        ans = Math.max(ans, (temp - start))
        start = x1;
    }

    temp = Math.max(x2, temp);
    ans = Math.max(ans, (temp - start))

}

console.log(ans);