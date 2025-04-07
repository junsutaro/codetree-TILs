const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const k = parseInt(input[1]);

// Please Write your code here.

function findCnt(num) {
    let cnt = 0;
    for ( let i = 1 ; i <= n ; i ++ ) {
        if ( i > num )  { break }
        cnt += Math.min(Math.floor(num / i), n);
    }
    return cnt // 더 작은거 찾는거임
}

function findAns(target) {
    let right = n * n;
    let left = 1;

    while ( left < right ) {
        const mid = Math.floor((left + right) / 2);
        if ( findCnt(mid) < target ) { 
            left = mid + 1; 
        } else {
            right = mid;
        }
    }
    return left; // idx, 번째
}

const ans = findAns(k);
console.log(ans);
