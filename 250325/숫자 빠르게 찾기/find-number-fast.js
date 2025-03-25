const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + m).map(Number);

// Please Write your code here.

function find(num) {
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        const i = Math.floor((low + high) / 2);
        if ( numbers[i] === num ) {
            return i;
        }
        if ( numbers[i] > num ) {
            high = i - 1;
        } else {
            low = i + 1;
        }
    }
    return -2
}


for ( const num of queries ) {
    console.log(find(num) + 1);
}