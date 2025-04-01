const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

function canDevide(arr, maxVal) {
    let cnt = 0;
    for ( let i = 0 ; i < arr.length ; i ++ ) {
        let num = arr[i];
        while ( num >= maxVal ) {
            num -= maxVal;
            cnt += 1;
        }
        if ( cnt >= m ) return true;
    }
    return false;
}


let left = 1;
let right = 100000;

while ( left < right ) {
    const mid = Math.floor((left + right) / 2);
    if ( canDevide(arr, mid) ) {
        left = mid + 1;
    } else {
        right = mid;
    }
}

console.log(left - 1)
