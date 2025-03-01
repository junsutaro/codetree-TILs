const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input[0].split(" ").map(Number);
const arr = [0, ...input[1].split(" ").map(Number)];
const queries = input.slice(2, 2 + q).map(line => line.split(" ").map(Number));

// Please Write your code here.

const prefixMax = Array(n + 1).fill(0);
prefixMax[1] = arr[1]
for ( let i = 2 ; i <= n ; i ++ ) {
    prefixMax[i] = Math.max(arr[i], prefixMax[i-1]);
}
const suffixMax = Array(n+1).fill(0);
suffixMax[n] = arr[n];
for ( let i = n-1 ; i >= 1 ; i -- ) [
    suffixMax[i] = Math.max(suffixMax[i+1], arr[i])
]

queries.forEach(elem => {
    let ans = -Infinity
    ans = Math.max(ans, prefixMax[elem[0] - 1], suffixMax[elem[1] + 1]);
    console.log(ans);
})
