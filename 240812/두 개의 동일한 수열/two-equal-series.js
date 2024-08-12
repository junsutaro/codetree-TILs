const fs = require('fs');

// 입력을 읽어오기
const input = fs.readFileSync(0).toString().trim().split('\n');

// 첫 번째 줄은 배열의 크기
const n = Number(input[0]);

// 두 번째 줄과 세 번째 줄은 배열 A와 B
let A = input[1].split(' ').map(Number); // 문자열을 숫자로 변환
let B = input[2].split(' ').map(Number); // 문자열을 숫자로 변환

// 디버깅 출력: 원본 데이터와 변환된 데이터 확인
console.log("Raw Input A:", input[1]);
console.log("Raw Input B:", input[2]);
console.log(input[1].length)
console.log(input[2].length)

// 배열 정렬
A.sort((prev, cur) => prev - cur);
B.sort((prev, cur) => prev - cur);

// 정렬된 배열 출력
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