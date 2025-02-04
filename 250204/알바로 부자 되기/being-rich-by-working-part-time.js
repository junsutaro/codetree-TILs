const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const works = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array(n).fill(0);

for ( let i = 0 ; i < n ; i ++ ) {
    dp[i] = works[i][2];
}

function notDuple(work1, work2) {
    return ( work1[1] < work2[0] ) 
}

for ( let i = 0 ; i < n ; i ++ ) {
    for ( let j = 0 ; j < i ; j ++ ) {
        if ( notDuple(works[j], works[i])) {
            dp[i] = Math.max(dp[i], dp[j] + works[i][2]);
        }
    }
}

console.log(Math.max(...dp));