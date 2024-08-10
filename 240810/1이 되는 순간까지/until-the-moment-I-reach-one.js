const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);


function f(n, cnt = 0) {
    if (n === 1) {
        return cnt;
    }

    if (n % 2 === 0) {
        return f(n / 2, cnt + 1);
    } else {
        return f(Math.floor(n / 3), cnt + 1);
    }
}


const result = f(n);

console.log(result)