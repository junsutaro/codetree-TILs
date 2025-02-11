const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
const MOD = 10 ** 9 + 7;

const dp = Array.from({length : n}, () => Array(10).fill(0));
for ( let i = 0 ; i < 10 ; i ++ ) {
    dp[0][i] = 1;
}
dp[0][0] = 0;

// console.log(dp);

for ( let i = 1 ; i < n ; i ++ ) {
    // j로 0~9 돌면서
    for ( let j = 0; j < 10 ; j ++ ) {
        for ( let k = 0 ; k < 10 ; k ++ ) {
            if ( Math.abs(j - k) !== 1 ) continue;
            dp[i][j] += dp[i-1][k]; 
            dp[i][j] %= MOD;
        }
    }
}

// console.log(dp);
let ans = 0;
for ( let i = 0 ; i < 10 ; i ++ ) {
    ans += dp[n-1][i];
}
ans %= MOD;
console.log(ans);