const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let cnt = 0;

function f(n) {
    if ( n === 1 ) {
        return cnt;
    }

    if ( n % 2 === 0 ) {
        n /= 2;
    } else {
        n = parseInt(n/3);
    }
    cnt += 1

    f(n)
}

f(n)
console.log(cnt)