const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));

const dp1 = Array.from({length: n}, () => Array.from({length: n}, () => [-Infinity, Infinity]));
const dp2 = Array.from({length: n}, () => Array.from({length: n}, () => -Infinity));

dp1[0][0] = [arr[0][0], arr[0][0]]

function dpUpdate(i, j, dp) {

    if ( i === 0 && j === 0 ) {
        return
    }

    // declare maxV, minV here.
    let maxValue = -Infinity
    let minValue = Infinity

    if (i > 0) {
        let candidateMax = Math.max(arr[i][j], dp[i-1][j][0]);
        let candidateMin = Math.min(arr[i][j], dp[i-1][j][1]);
        maxValue = candidateMax;
        minValue = candidateMin;
    }

    // and ... if out of Range, can skip
    // one of two cases must satisfy range condition

    if ( j > 0 ) {
        let candidateMax  = Math.max(arr[i][j], dp[i][j-1][0])
        let candidateMin  = Math.min(arr[i][j], dp[i][j-1][1])

        // just update max, min at once
        if (maxValue === -Infinity && minValue === Infinity) {
            maxValue = candidateMax;
            minValue = candidateMin;
        } else {
        // 두 경로(위, 왼) 중 최소 차이를 주는 쪽으로 선택
            const diffCurrent = maxValue - minValue;
            const diffLeft = candidateMax - candidateMin
            if (diffCurrent > diffLeft ||
               (diffCurrent === diffLeft && candidateMax < maxValue)) {
                maxValue = candidateMax;
                minValue = candidateMin;
            }
        }
    }

    dp[i][j] = [maxValue, minValue]

}


for ( let i = 0 ; i < n ; i ++ ) {
    for ( let j = 0 ; j < n ; j ++ ) {
        dpUpdate(i, j, dp1)
    }
}


console.log(dp1[n-1][n-1][0] - dp1[n-1][n-1][1] )