const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const word = input[0].trim();
const n = word.length;

// Please Write your code here.

let j = 0;
const wordMap = new Map();

let ans = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    // Is it work when get's result is undefined?
    while ( j < n && !wordMap.has(word[j]) ) { 
        wordMap.set(word[j], (wordMap.get(word[j]) || 0) + 1 )
        j += 1
    }
    // console.log(i, j);
    // console.log(wordMap)
    ans = Math.max(ans, j - i);
    wordMap.delete(word[i])
}
console.log(ans)
