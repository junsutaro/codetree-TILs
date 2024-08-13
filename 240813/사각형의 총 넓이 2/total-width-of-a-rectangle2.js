const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);

// 좌표가 -100에서 100까지 가능하므로, 이를 양수로 변환하기 위해 100을 더해줌

const OFFSET = 100;

const grid = Array.from({ length : 201 }, () => Array(201).fill(0))

for ( let i = 1; i <= N; i ++ ) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);

    x1 += OFFSET;
    y1 += OFFSET;
    x2 += OFFSET;
    y2 += OFFSET;

    for (let x = x1; x < x2; x++) {
        for (let y = y1; y < y2; y++) {
            grid[x][y] = 1;
        }
    }
}

// 총 넓이 계산
let totalArea = 0;
for (let x = 0; x < 201; x++) {
    for (let y = 0; y < 201; y++) {
        if (grid[x][y] === 1) {
            totalArea += 1;
        }
    }
}

console.log(totalArea);