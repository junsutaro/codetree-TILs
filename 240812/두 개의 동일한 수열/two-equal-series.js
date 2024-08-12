const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 배열을 읽어오는 부분
const n = Number(input[0]);
let A = input[1].split(' ').map(Number);  // 문자열을 숫자로 변환
let B = input[2].split(' ').map(Number);  // 문자열을 숫자로 변환

// 배열 정렬
A.sort((prev, cur) => prev - cur);
B.sort((prev, cur) => prev - cur);

// 배열 출력
console.log("Raw Input A:", input[1]);
console.log("Sorted A:", A.join(' '));
console.log("Sorted B:", B.join(' '));

// 배열 비교
let isEqual = true;
for (let i = 0; i < n; i++) {
    if (A[i] !== B[i]) {
        isEqual = false;
        break;
    }
}

console.log(isEqual ? 'Yes' : 'No');