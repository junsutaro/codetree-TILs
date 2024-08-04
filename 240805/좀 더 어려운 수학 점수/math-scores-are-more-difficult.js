const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A_math, A_eng] = input[0].split(' ').map(Number);
const [B_math, B_eng] = input[1].split(' ').map(Number);

let winner;

if (A_math > B_math) {
    winner = 'A'
} else if ( A_math < B_math ) {
    winner = 'B'
} else {
    if ( A_eng > B_eng ) {
        winner = 'A'
    } else {
        winner = 'B'
    }
}

console.log(winner)