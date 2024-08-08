const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = input[0];
const B = input[1];
const len = A.length;

let result = -1;

// 문자열을 n번 밀어보면서 비교
for (let n = 1; n < len; n++) {
    // 문자열 A를 n번 우측으로 밀어봄
    let rotated = A.slice(-n) + A.slice(0, -n);
    if (rotated === B) {
        result = n;
        break;
    }
}

console.log(result);