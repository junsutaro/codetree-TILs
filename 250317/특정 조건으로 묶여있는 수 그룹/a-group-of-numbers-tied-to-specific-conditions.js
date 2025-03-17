const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);
// Please Write your code here.

const prefix = Array(n).fill(0);
for ( let i = 0 ; i < n ; i ++ ) {
    
}

console.log(ans);