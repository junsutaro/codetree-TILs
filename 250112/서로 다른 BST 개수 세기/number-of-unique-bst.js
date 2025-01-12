const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let plus = 1;

const dp = Array(n+1).fill(0);

dp[1] = 1;
dp[2] = 2;

for ( let i = 3 ; i <= n ; i ++ ) {

    let plus = 1;
    for ( let j = 1 ; j <= i - 2 ; j ++ ) {
        plus *= j;
    }

    dp[i] = dp[i-1] * 2 + plus;
    
}

console.log(dp[n])