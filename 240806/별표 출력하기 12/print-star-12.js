const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

for (let i = 0; i < n; i++) {
    let stars = '';
    for (let j = 0; j < n; j++) {
        if (i === 0) {
            // 첫 번째 줄: n개의 '*'을 출력
            stars += '* ';
        } else {
            // 두 번째 줄부터: 규칙에 맞게 별표를 출력
            if (j < i) {
                // 앞부분 공백
                stars += '  ';
            } else if (j % 2 === 1) {
                // 홀수 인덱스에 '*' 추가
                stars += '* ';
            } else {
                // 짝수 인덱스는 공백
                stars += '  ';
            }
        }
    }
    console.log(stars.trim());
}