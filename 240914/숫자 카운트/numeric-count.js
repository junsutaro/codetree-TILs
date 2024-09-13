const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

const tries = input.slice(1);

let possible = [];

// 1부터 9까지의 세 숫자로 구성된 모든 경우의 수를 생성
for (let i = 1; i <= 9; i++) { 
    for (let j = 1; j <= 9; j++) {
        for (let k = 1; k <= 9; k++) {
            if (i !== j && j !== k && i !== k) {
                possible.push([i, j, k]);
            }
        }
    }
}

for (let trying of tries) {
    const [number, a, b] = trying.split(' ');
    const numArr = number.split('').map(Number);

    possible = possible.filter((elem) => {

        let cnt1 = 0;
        let cnt2 = 0;

        // 같은 자리 비교 (1번 카운트)
        for (let i = 0; i < 3; i++) {
            if (numArr[i] === elem[i]) {
                cnt1 += 1;
            }
        }

        // 다른 자리 비교 (2번 카운트)
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (numArr[i] === elem[j] && i !== j) {
                    cnt2 += 1;
                    break;
                }
            }
        }

        // 주어진 조건과 맞지 않으면 제거
        return cnt1 === Number(a) && cnt2 === Number(b);
    });
}

// 가능한 수의 총 개수를 출력
console.log(possible.length);