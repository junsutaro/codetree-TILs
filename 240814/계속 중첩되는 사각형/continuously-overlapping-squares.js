const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const OFFSET = 100;
const MAXLENGTH = 200;
const checked = Array.from({ length: MAXLENGTH + 1 }, () => Array(MAXLENGTH + 1).fill(0));

for (let i = 1; i <= n; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);

    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            checked[j + OFFSET][k + OFFSET] = i % 2 === 0 ? 2 : 1;
        }
    }
}

let blueArea = 0;

for (let i = 0; i <= MAXLENGTH; i++) {
    for (let j = 0; j <= MAXLENGTH; j++) {
        if (checked[i][j] === 2) {
            blueArea += 1;
        }
    }
}

console.log(blueArea);