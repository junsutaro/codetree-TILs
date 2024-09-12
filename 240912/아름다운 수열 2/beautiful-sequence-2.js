const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);

// 배열을 비교하는 함수
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // 길이가 다르면 다름
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false; // 하나라도 다르면 다름
    }
    return true; // 모두 같으면 true 반환
}

let cnt = 0;

for (let i = 0; i < n - m + 1; i++) {
    const newArr = [];
    for (let j = i; j < i + m; j++) {
        newArr.push(arrA[j]);
    }

    // 두 배열을 정렬한 후 비교
    if (arraysEqual(newArr.sort((a, b) => a - b), arrB.sort((a, b) => a - b))) {
        cnt += 1;
    }
}

console.log(cnt);