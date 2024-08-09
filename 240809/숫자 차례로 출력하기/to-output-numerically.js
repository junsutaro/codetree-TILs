const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

function printAscending(current) {
    if (current > n) return;
    process.stdout.write(current + " ");
    printAscending(current + 1);
}

function printDescending(current) {
    if (current < 1) return;
    process.stdout.write(current + " ");
    printDescending(current - 1);
}

// 첫 번째 줄: 1부터 N까지 출력
printAscending(1);
console.log(); // 줄 바꿈

// 두 번째 줄: N부터 1까지 출력
printDescending(n);
console.log(); // 줄 바꿈