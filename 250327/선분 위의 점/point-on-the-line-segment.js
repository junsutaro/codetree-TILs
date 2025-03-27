const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);
const queries = input.slice(2).map(line => line.split(' ').map(Number));

// Please Write your code here.

function lowerBound(arr, target) {
    let left = 0; let right = arr.length;
    while ( left < right ) {
        const mid = Math.floor((left + right) / 2);
        if ( arr[mid] >= target ) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function upperBound(arr, target) {
    let left = 0; let right = arr.length;
    while ( left < right ) {
        const mid = Math.floor((left + right) / 2);
        if ( arr[mid] <= target ) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

for ( const [a, b] of queries ) {
    const ans = upperBound(arr, b) - lowerBound(arr, a);
    console.log(ans);
}