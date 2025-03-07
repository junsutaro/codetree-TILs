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
const ansList = Array(n).fill(0);

for ( let i = n - 2 ; i >= 0 ; i -- ) {
    let chargeAll = suffix[i] * cost[i]; // 여기서 다 채우기
    let fitted = dist[i] * cost[i] + ansList[i+1] // 앞에거 + 앞에까지만 가는 머시기
    ansList[i] = Math.min(chargeAll, fitted);
}

console.log(ansList[0])