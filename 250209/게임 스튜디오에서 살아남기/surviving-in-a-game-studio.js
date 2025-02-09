const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
const MOD = 10 ** 9 + 7;

const dp = Array.from({length : n + 1}, () => Array.from({length: 3}, () => Array(3).fill(0)));

dp[1] = [[ 1, 1, 0 ], [ 1, 0, 0 ], [ 0, 0, 0 ]];

for ( let i = 2 ; i <= n ; i ++ ) {
    for ( let j = 0 ; j < 3 ; j ++ ) {
        for ( let k = 0 ; k < 3 ; k ++ ) {            
            // dp[횟수][전체T][연속B]
            let score = 0;

            // G를 얻거나 T를 얻으면 k 가 0인곳으로만 갈 수 0
            if ( k === 0 ) {
                let getG = dp[i-1][j][0] + dp[i-1][j][1] + dp[i-1][j][2];
                score += getG;
                if ( j > 0) {
                    let getT = dp[i-1][j-1][0] + dp[i-1][j-1][1] + dp[i-1][j-1][2];
                    score += getT
                }
            }

            // B를 얻은 경우는?
            if ( k > 0 ) {
                getB = dp[i-1][j][k-1];
                score += getB;
            }

            dp[i][j][k] = score % MOD;
        }
    }
}


let ans = 0;
for ( let i = 0 ; i < 3 ; i ++ ) {
    for ( let j = 0 ; j < 3 ; j ++ ) {
        ans += dp[n][i][j];
    }
}

console.log(ans);