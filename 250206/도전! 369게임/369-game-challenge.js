const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

function count369(n) {
    let count = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit === 3 || digit === 6 || digit === 9) {
            count++;
        }
        n = Math.floor(n / 10);
    }
    return count;
}

function isMultipleOf3(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum % 3 === 0;
}

let ans = 0;
for (let i = 1; i <= n; i++) {
    if (count369(i) > 0 || isMultipleOf3(i)) {
        ans++;
    }
}

console.log(ans);
