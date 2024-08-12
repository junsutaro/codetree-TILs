const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);

// 먼저 두 배열의 길이가 동일한지 확인합니다.
if (A.length !== n || B.length !== n) {
    console.log('No');
} else {
    // 두 배열을 정렬합니다.
    A.sort((prev, cur) => prev - cur);
    B.sort((prev, cur) => prev - cur);

    // 배열이 동일한지 확인합니다.
    let ans = 'Yes';
    for (let i = 0; i < n; i++) {
        if (A[i] !== B[i]) {
            ans = 'No';
            break;
        }
    }

    console.log(ans);
}