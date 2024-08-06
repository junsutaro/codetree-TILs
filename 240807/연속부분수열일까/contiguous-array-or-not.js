const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n1, n2] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

function isSubsequence ( A, B ) {
    for ( let i = 0 ; i <= n1 - n2 ; i ++ ) {
        let isMatch = true;
        
        for ( let j = 0 ; j < n2 ; j ++ ) {
            if ( A[i + j] !== B[j] ) {
                isMatch = false;
                break;
            }
        }

        return isMatch;
    }
    return false;
}

const result = isSubsequence(A, B);
console.log(result ? 'Yes' : 'No')