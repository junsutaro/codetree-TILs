const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const inputs = input.slice(1).map(elem => elem.split(' ').map(Number));

inputs.sort((a, b) => {
    return a[1] - b[1];
})

const dp = Array(n).fill(1);

for ( let i = 0 ; i < n ; i ++ ) {
    for ( let j = 0 ; j < i ; j ++ ) {
        if ( inputs[j][1] < inputs[i][1] ) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));