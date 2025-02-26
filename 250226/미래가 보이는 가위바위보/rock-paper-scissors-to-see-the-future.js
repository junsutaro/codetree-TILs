const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const moves = input.slice(1);
const moveMap = { H: 0, S: 1, P: 2 };

// 누적합 배열 초기화: 각 행은 H, S, P에 해당
const L = Array.from({ length: 3 }, () => Array(n).fill(0));
const R = Array.from({ length: 3 }, () => Array(n).fill(0));

for (let i = 0; i < n; i++) {
    const idx = moveMap[moves[i]];
    for (let j = 0; j < 3; j++) {
        L[j][i] = ( i === 0 ? 0 : L[j][i-1] )
        if ( (j === 0 && idx === 1) || ( j === 1 && idx === 2 ) || ( j === 2 && idx === 0 ) ) {
            L[j][i] += 1;
        }
    }
}

for ( let i = n-1 ; i >= 0 ; i -- ) {
    const idx = moveMap[moves[i]];
    for ( let j = 0 ; j < 3 ; j ++ ) {
        R[j][i] = ( i === n-1 ? 0 : R[j][i+1] )
        if ( (j === 0 && idx === 1) || ( j === 1 && idx === 2 ) || ( j === 2 && idx === 0 ) ) {
            R[j][i] += 1;
        }
    }
}

let ans = 0;

for ( let i = 1 ; i < n ; i ++ ) {
    for ( let j = 0 ; j < 3 ; j ++ ) {
        for ( let k = 0 ; k < 3 ; k ++ ) {
            ans = Math.max(ans, L[j][i-1] + R[k][i]);
        }
    }
}

console.log(ans);