const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);
const queries = input.slice(2).map(Number);


function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length;
    while ( left < right ) {
        const mid = Math.floor((left + right) / 2);
        if ( arr[mid] >= target ) { 
            right = mid;
        } else {
            left = mid + 1
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
    return right
}

for ( const num of queries ) {
    const ans = upperBound(arr, num) - lowerBound(arr, num);
    console.log(ans);
}