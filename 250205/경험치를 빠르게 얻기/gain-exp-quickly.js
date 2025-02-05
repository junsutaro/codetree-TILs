const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const quests = input.slice(1).map(elem => elem.split(' ').map(Number));

const maxTime = quests.reduce((acc, cur) => acc + cur[1], 0);
const dp = Array.from({length : maxTime + 1}, () => -1);
dp[0] = 0;

// dp : idx - time, val - exp

quests.forEach(([exp, time], _) => {
    for ( let i = maxTime ; i >= time ; i -- ) {
        if ( dp[i - time] === -1 ) continue;

        dp[i] = Math.max(dp[i-time] + exp, dp[i]);
    }
})

let ans = -1;

for ( let i = 0 ; i <= maxTime ; i ++ ) {
    if ( dp[i] >= m ) {
        ans = i;
        break
    }
}

console.log(ans);