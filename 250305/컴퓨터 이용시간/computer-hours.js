const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
segments = [];
let idx = 0;
input.slice(1).map(line => {
    const [s, e] = line.split(' ').map(Number);
    idx += 1;
    segments.push([s, 1, idx])
    segments.push([e, -1, idx])
});
// Please write your code here.

segments.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
let nokori = [];
for ( let i = n ; i >= 1; i -- ) {
     nokori.push(i);
}

const ans = Array(n+1).fill(0);
for ( const [time, sign, num] of segments ) {
    // console.log(time, sign, num);
    if ( sign === 1 ) {
        let temp = nokori.pop();
        ans[num] = temp;
    } else {
        nokori.push(ans[num]);
    }
}

console.log(ans.slice(1).join(' '));

