const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, T] = input[0].split(' ');


let filteredWords = [];

// for ( let i = 1; i <= n ; i ++ ) {
//     if (isStartWithT(input[i], T)) {
//         filteredWords.push(input[i])
//     }
// }  

for ( let i = 1; i <= n ; i ++ ) {
    if ( input[i].startsWith(T) ) {
        filteredWords.push(input[i])
    }
}

// console.log(filteredWords)

function isStartWithT(str, pattern) {
    for ( let i = 0; i < pattern.length ; i ++ ) {
        if (str[i] !== pattern[i]) {
            return false;
        }
    }
    return true;
}

console.log(filteredWords.sort()[k-1])