const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const ots = input.slice(1).map(elem => elem.split(' ').map(Number));

const arr = Array.from({length : m+1}, () => Array(n).fill(-Infinity));
const dp = Array.from({length : m+1}, () => Array(n).fill(-Infinity));

ots.forEach((ot, idx) => {
    const [s, e, val] = ot;
    for ( let i = s ; i <= e ; i ++ ) {
        arr[i][idx] = val;
    }
})

for ( let i = 0 ; i < n ; i ++ ) {
    if ( arr[1][i] === -Infinity ) continue;
    else {
        dp[1][i] = 0;
    }
}

for ( let i = 1 ; i <= m ; i ++ ) {
    for ( let j = 0 ; j < n ; j ++ ) {
        if ( arr[i][j] === -Infinity ) continue;
        for ( let k = 0 ; k < n ; k ++ ) {
            if ( arr[i-1][k] === -Infinity ) continue
            dp[i][j] = Math.max(dp[i-1][k] + Math.abs(arr[i][j] - arr[i-1][k]), dp[i][j])
        }
    }
}

let ans = 0;

for ( let j = 0 ; j < n ; j ++ ) {
    ans = Math.max(ans, dp[m][j]);
}
console.log(ans);