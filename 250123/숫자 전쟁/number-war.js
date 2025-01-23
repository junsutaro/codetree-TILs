const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const you = input[1].trim().split(' ').map(Number);
const me = input[2].trim().split(' ').map(Number);

const p1Max = Math.max(...you);
const dp = Array.from({length: 2 * n - 1}, () => Array(n+1).fill([0, 0, 0]));

function isRange(i, j) {
    return 0 <= i && i <= n && 0 <= j && j <= n;
}

function game(i, j) {
    if ( me[i] < you[j] ) { 
        return [i+1, j, me[i]];
    }
    else if ( me[i] === you[j] ) {
        return [i+1, j+1, 0];
    } else {
        return [i, j+1, 0];
    }
}

dp[0][0] = [0, 0, 0]
// dp[0][0] = game(0, 0)


for ( let j = 1 ; j < n ; j ++ ) {
    const [bi, bj, score] = dp[0][j-1];
    dp[0][j] = [bi+1, bj+1, 0]
}

for ( let i = 1 ; i < 2 * n - 1 ; i ++ ) {
    const [bi, bj, nowScore] = dp[i-1][0];
    const [ni, nj, addScore] = game(bi, bj);
    dp[i][0] = [ni, nj, nowScore + addScore];
}


let ans = 0;

for ( let i = 1 ; i < 2 * n - 1 ; i ++ ) {
    for ( let j = 1 ; j < n ; j ++ ) { // 둘 다 버리는 횟수


        const [ui, uj, upScore] = dp[i-1][j]; // 위에서 온거
        const [ni1, nj1, addScore1] = game(ui, uj);

        const [li, lj, leftScore] = dp[i][j-1]; // 왼쪽에서 온거
        const [ni2, nj2, addScore2] = game(li, lj);

        if ( leftScore > upScore + addScore1 ) {
            dp[i][j] = [ni2, nj2, leftScore];
        } else {
            dp[i][j] = [ni1, nj1, upScore + addScore1];
        }
        ans = Math.max(ans, dp[i][j][2] )
    }
}

console.log(ans);


