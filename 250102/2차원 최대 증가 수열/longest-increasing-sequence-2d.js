const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(elem => elem.split(' ').map(Number));


const MIN = -Infinity
const dp = Array.from( {length : n }, () => Array(m).fill(MIN) )


dp[0][0] = 1; // 시작 지점 포함

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        for (let k = 0; k < i; k++) {
            for (let l = 0; l < j; l++) {
                if (grid[k][l] < grid[i][j]) {
                    dp[i][j] = Math.max(dp[i][j], dp[k][l] + 1);
                }
            }
        }
        if (dp[i][j] === MIN) dp[i][j] = 1;
    }
}

let maxPath = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        maxPath = Math.max(maxPath, dp[i][j]);
    }
}

// console.log(dp)
console.log(maxPath);