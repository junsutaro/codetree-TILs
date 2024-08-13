const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 첫 번째 직사각형 좌표
let [x1A, y1A, x2A, y2A] = input[0].split(' ').map(Number);
// 두 번째 직사각형 좌표
let [x1B, y1B, x2B, y2B] = input[1].split(' ').map(Number);

const OFFSET = 1000; // 음수 좌표를 다루기 위해
const MAXLENGTH = 2000; // 좌표평면 크기

// 2차원 배열 초기화
const checked = Array.from({ length: MAXLENGTH + 1 }, () => Array(MAXLENGTH + 1).fill(0));

// 첫 번째 직사각형을 1로 채우기
for (let i = x1A; i < x2A; i++) {
    for (let j = y1A; j < y2A; j++) {
        checked[i + OFFSET][j + OFFSET] = 1;
    }
}

// 두 번째 직사각형으로 덮기
for (let i = x1B; i < x2B; i++) {
    for (let j = y1B; j < y2B; j++) {
        if (checked[i + OFFSET][j + OFFSET] === 1) {
            checked[i + OFFSET][j + OFFSET] = 0; // 덮어짐
        }
    }
}

// 첫 번째 직사각형의 남은 부분에서 최소 직사각형의 좌표 찾기
let minX = MAXLENGTH, minY = MAXLENGTH, maxX = -1, maxY = -1;
for (let i = 0; i <= MAXLENGTH; i++) {
    for (let j = 0; j <= MAXLENGTH; j++) {
        if (checked[i][j] === 1) {
            minX = Math.min(minX, i);
            minY = Math.min(minY, j);
            maxX = Math.max(maxX, i);
            maxY = Math.max(maxY, j);
        }
    }
}

// 잔해물을 덮기 위한 최소 직사각형의 넓이 계산
if (minX > maxX || minY > maxY) {
    console.log(0); // 잔해물이 남지 않은 경우
} else {
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    const area = width * height;
    console.log(area);
}