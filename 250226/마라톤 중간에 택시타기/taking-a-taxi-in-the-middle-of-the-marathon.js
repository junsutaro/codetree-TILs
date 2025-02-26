const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const x = new Array(n);
const y = new Array(n);

for (let i = 0; i < n; i++) {
    const parts = input[i + 1].split(" ").map(Number);
    x[i] = parts[0];
    y[i] = parts[1];
}

// Please Write your code here.

const L = Array(n).fill(0);
const R = Array(n).fill(0);

for ( let i = 1 ; i < n ; i ++ ) {
    L[i] = L[i-1] + Math.abs(x[i] - x[i-1]) + Math.abs(y[i] - y[i-1]);
}

for ( let i = n-2 ; i >= 0 ; i -- ) {
    R[i] = R[i+1] + Math.abs(x[i+1] - x[i]) + Math.abs(y[i+1] - y[i]);
}

let ans = Infinity;

for ( let i = 1 ; i < n-1 ; i ++ ) {
    const dist = L[i-1] + R[i+1] + Math.abs(x[i+1] - x[i-1]) + Math.abs(y[i+1] - y[i-1]);
    ans = Math.min(dist, ans);
}

console.log(ans);