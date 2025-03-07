const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let bombs = input.slice(1, Number(n) + 1).map(Number);

// Please Write your code here.
let ans = -1;

const frontK = Array(1000001).fill(0);
for ( let i = 0 ; i < k ; i ++ ) {
    const thisBomb = bombs[i]
    if ( frontK[thisBomb] ) { ans = Math.max(ans, thisBomb) }
    frontK[thisBomb] += 1;
}

for ( let i = k ; i < n ; i ++ ) {
    const thisBomb = bombs[i]
    const deleteBomb = bombs[i-k]
    if ( frontK[thisBomb] ) {
        ans = Math.max(thisBomb)
    }
    frontK[thisBomb] += 1;
    frontK[deleteBomb] -= 1;
}

console.log(ans);