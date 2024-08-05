const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

// 점점 증가하는 별 패턴 출력
for (let i = 1; i <= n; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
    console.log();  // 각 줄 사이에 빈 줄 추가
}

// 점점 감소하는 별 패턴 출력
for (let i = n - 1; i >= 1; i--) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
    console.log();  // 각 줄 사이에 빈 줄 추가
}