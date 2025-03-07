const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let bombs = input.slice(1, Number(n) + 1).map(Number);

// Please Write your code here.
let ans = -1;

const frontK = new Map();

for ( let i = 0 ; i < n ; i ++ ) {
    const thisBomb = bombs[i];
    if ( frontK.has(thisBomb) ) {
        ans = Math.max(ans, thisBomb);
    }
    frontK.set(thisBomb, (frontK.get(thisBomb) || 0) + 1 )
}

for ( let i = k ; i < n ; i ++ ) {
    const thisBomb = bombs[i];
    const deleteBomb = bombs[i-k];
    if ( frontK.has(thisBomb) ) {
        ans = Math.max(ans, thisBomb);
    }
    frontK.set(thisBomb, (frontK.get(thisBomb) || 0 ) + 1)
    if (frontK.get(deleteBomb) === 1) {
        frontK.delete(deleteBomb);
    } else {
        frontK.set(deleteBomb, frontK.get(deleteBomb) - 1);
    }
}

console.log(ans);