const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const dist = input[1].split(' ').map(Number);
const cost = input[2].split(' ').map(Number);

// Please Write your code here.

const suffix = Array(n).fill(0);
for ( let i = n-2 ; i >= 0 ; i -- ) {
    suffix[i] = suffix[i+1] + dist[i]
}

let minCost = Infinity

let ans = 0;
for ( let i = 0 ; i < n - 1 ; i ++ ) {
    minCost = Math.min(minCost, cost[i])
    ans = ans + dist[i] * minCost;
}

console.log(ans);