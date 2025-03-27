const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

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
    
    if ( arr[left] === target ) return left + 1
    else return -1;
    
}

for ( const num of queries ) {
    const ans = lowerBound(arr, num);
    console.log(ans);
}