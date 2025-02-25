const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input[0].split(' ').map(Number);
const arr = [0, ...input.slice(1, n+1).map(Number)];
const queries = input.slice(n+1, n+q+1).map(elem => elem.split(' ').map(Number))
const prefixSum = Array.from({length : 4} , () => Array(n+1).fill(0));

for ( let i = 1 ; i <= 3 ; i ++ ) {
    for ( let j = 1 ; j <= n ; j ++ ) {
        if ( arr[j] === i ) {
            prefixSum[i][j] = prefixSum[i][j-1] + 1;
        } else {
            prefixSum[i][j] = prefixSum[i][j-1];
        }
    }
}

function getAns(group, s, e) {
    return prefixSum[group][e] - prefixSum[group][s-1];
}

for ( const [s, e] of queries ) {
    console.log(getAns(1, s, e), getAns(2, s, e), getAns(3, s ,e))
}