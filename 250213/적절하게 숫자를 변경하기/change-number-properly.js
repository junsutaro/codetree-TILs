const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);


// dp[몇번째][바꾼횟수][숫자] = 유사도
const dp = Array.from({length: n}, () => Array.from({length : m+1}, () => Array(5).fill(0)));

let ans = 1;

for ( let k = 1 ; k < 5 ; k ++ ) {
    if ( k === nums[0] ) {
        dp[0][0][k] = 1
    }
}

for ( let i = 1 ; i < n ; i ++ ) {
    for ( let k = 1 ; k < 5 ; k ++ ) {
        dp[i][0][k] = dp[i-1][0][k]
        if ( k === nums[i] ) {
            dp[i][0][k] += 1
        }
        ans = Math.max(dp[i][0][k], ans);
    }
}


for ( let i = 1 ; i < n ; i ++ ) {
    for ( let j = 1 ; j <= m ; j ++ ) {
        for ( let bef = 1 ; bef < 5 ; bef ++ ) {
            for ( let now = 1 ; now < 5 ; now ++ ) {
                if ( now === nums[i] ) {
                    if ( now === bef ) {
                        dp[i][j][now] = Math.max(dp[i][j][now], dp[i-1][j][bef] + 1);
                    } else {
                        dp[i][j][now] = Math.max(dp[i][j][now], dp[i-1][j-1][bef] + 1);
                    }
                } else {
                    if ( now === bef ) {
                        dp[i][j][now] = Math.max(dp[i][j][now], dp[i-1][j][bef])
                    } else {
                        dp[i][j][now] = Math.max(dp[i][j][now], dp[i-1][j-1][bef]);

                    }
                }
                ans = Math.max(ans, dp[i][j][now])
            }
        }
    }
}


console.log(ans);
