const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const fires = input[1].split(" ").map(Number).sort((a, b) => a - b);
const stations = input[2].split(" ").map(Number).sort((a, b) => a - b);

// Please Write your code here.

let j = 0;
let ans = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < m ) {
        const now = Math.abs(fires[i] - stations[j]);
        const next = Math.abs(fires[i] - stations[j+1]);
    }
}