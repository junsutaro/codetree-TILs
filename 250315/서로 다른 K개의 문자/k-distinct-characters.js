const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [word, kStr] = input[0].split(" ");
const k = Number(kStr);
const n = word.length;

// Please Write your code here.

let j = 0;
const wordMap = new Map();

let ans = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    while ( j <= n && wordMap.size <= k ) {
        wordMap.set(word[j], (wordMap.get(word[j]) || 0) + 1)
        j += 1;
    }

    ans = Math.max(ans, j - i - 1); 

    if (wordMap.get(word[i]) === 1) {
        wordMap.delete(word[i]);
    } else {
        wordMap.set(word[i], wordMap.get(word[i]) - 1);
    }
}

console.log(ans);