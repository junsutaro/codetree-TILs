const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// 범위를 충분히 넓게 설정합니다. (-100~100)
const OFFSET = 100;
const arr = Array(201).fill(0); // 배열을 초기화합니다.

for (let i = 1; i <= n; i++) {
    const [start, end] = input[i].split(' ').map(Number);

    for (let j = start + OFFSET; j < end + OFFSET; j++) {
        arr[j]++;
    }
}

// 배열의 최대값을 찾습니다.
const maxBlocks = Math.max(...arr);
console.log(maxBlocks);