const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
// Please Write your code here.

// 이 숫자까지 moo가 몇개?
function countMoo(num) {
    const count3 = Math.floor(num / 3);
    const count5 = Math.floor(num / 5);
    const count15 = Math.floor(num / 15);
    return count3 + count5 - count15;
}

function findAns(n) {
    let left = 1;
    let right = 2 * n; 

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const mooCount = countMoo(mid);
        const realCount = mid - mooCount; // Moo를 제외한 숫자의 개수

        if (realCount < n) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

const ans = findAns(n);
console.log(ans);