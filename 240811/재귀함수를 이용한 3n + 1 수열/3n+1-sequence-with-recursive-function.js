const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

function findAns(n, cnt = 0) {
    if (n === 1) {
        return cnt
    }

    if (n % 2 === 0) {
        return findAns(n / 2, cnt + 1);
    } else {
        return findAns(n * 3 + 1, cnt + 1)
    }
}

const ans = findAns(n);

console.log(ans)