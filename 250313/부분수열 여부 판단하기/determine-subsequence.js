const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

// Please Write your code here.

function isSubsequence() {
    let i = 0;
    for ( let j = 0 ; j < m ; j ++ ) {
        while ( i < n && A[i] !== B[j] ) {
            i += 1
        }
        // 튀어나온다 ? i === n 이거나 A[i] === B[j];
        if ( i === n ) { return false }
        else {
            i += 1 // 같아도 i는 1 올려야 함 다음꺼부터 봐야하니까~
        }
    }

    return true; // j가 m-1까지 갔는데 false에 안걸림 ( i가 n보다 작음 )
}


console.log(isSubsequence() === true ? "Yes" : "No" )