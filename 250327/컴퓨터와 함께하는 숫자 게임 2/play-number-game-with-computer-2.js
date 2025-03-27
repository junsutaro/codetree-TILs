const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const m = BigInt(input[0]);
const [a, b] = input[1].split(' ').map(BigInt);

// Please Write your code here.

function lowerBound(m, target) {
    let left = 1n; let right = m; let count = 0
    while ( left <= right ) {
        count += 1;
        const mid = (left + right) >> 1n;
        if ( mid === target ) return count;
        if ( mid < target ) {
            left = mid + 1n;
        } else {
            right = mid - 1n;
        }
    }
    return count;
}

let max = 0
let min = Infinity;

for ( let i = a ; i <= b ; i ++ ) {
    const temp = lowerBound(m, i);
    max = Math.max(max, temp);
    min = Math.min(min, temp);
}

console.log(min, max);

