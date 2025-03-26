const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
const queries = input.slice(2, 2 + M).map(Number);

// Please Write your code here.


let left = 0;
let right = n-1;
let mid = n;


function find(num) {
    let cnt = 0;
    while ( left < right ) {
        mid = Math.floor((left + right)/2)
    }

    return cnt
}