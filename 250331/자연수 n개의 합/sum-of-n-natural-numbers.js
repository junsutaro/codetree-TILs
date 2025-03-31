const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const s = BigInt(input[0].trim());

// Please Write your code here.

function findAns(s) {
    let left = 0n; let right = s + 1n;
    let answer = 0n
    while ( left < right ) {
        const mid = (left + right) / 2n;
        const sum = ((1n + mid) * mid) / 2n;
        if ( sum > s ) {
            right = mid
        } else {
            left = mid + 1n;
            answer = mid;
        }
    }
    return answer ;
}

const ans = Number(findAns(s));

console.log(ans);