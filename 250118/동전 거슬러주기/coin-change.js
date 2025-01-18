const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);




function solve(n, m, coins) {
    const dp = Array(m+1).fill(Infinity);
    dp[0] = 0;

    for ( let i = 0 ; i <= m ; i ++ ) {
        for ( let j = 0 ; j < n ; j ++ ) {
            if ( i < coins[j] ) continue
            dp[i] = Math.min(dp[i - coins[j]] + 1 , dp[i])
        }
    }

    return ( dp[m] !== Infinity ? dp[m] : -1 );
}


const ans =  solve(n, m, coins)

console.log(ans);

