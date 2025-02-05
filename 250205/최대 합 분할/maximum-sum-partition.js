const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = [0].concat(input[1].trim().split(' ').map(Number));

const OFFSET = 100000;
const MIN = -Infinity;
const maxVal = nums.reduce((acc, cur) => acc + cur, 0);

const dp = Array.from({length: n + 1}, () => Array(2 * maxVal + 1 + OFFSET).fill(MIN));

function init() {
    for ( let i = 0 ; i <= n ; i ++ ) {
        for ( let j = -maxVal ; j <= maxVal ; j ++ ) {
            dp[i][j+OFFSET] = MIN
        }
    }
    dp[0][0+OFFSET] = 0;
}


init();


// dp[i][j] = sth 는 i번째 선택했을 때, A와 B 차이가 j라면 그 값은 sth ( a - b )
function update(i, j, prevI, prevJ, val) {
    if ( prevJ < -maxVal || prevJ > maxVal || dp[prevI][prevJ + OFFSET] == MIN ) return;

    dp[i][j+OFFSET] = Math.max(dp[i][j+OFFSET], dp[prevI][prevJ+OFFSET] + val);
}

for ( let i = 1 ; i <= n ; i ++ ) {
    // j 는 a - b 니까 , a를 선택 -> j-nums[i]에서 온다 , b를 선택 -> j + nums[i]에서 온다
    for ( let j = -maxVal ; j <= maxVal ; j ++ ) {
        update(i, j, i-1, j-nums[i], nums[i]); // a 에 저장하니까 a 에 넣은만큼 +
        update(i, j, i-1, j+nums[i], 0); // a에 저장하니까 b에 넣으면 0
        update(i, j, i-1, j, 0) // c에 추가하면 아무 변화 없이 i만 1증가
    }
}

console.log(dp[n][0+OFFSET]);