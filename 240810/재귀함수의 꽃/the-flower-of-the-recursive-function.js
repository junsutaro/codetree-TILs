const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let ans = ''

function printN(n) {
    if ( n === 0 ) {
        return;
    }

    ans += n + ' '
    printN(n-1);
    ans += n + ' '
}

printN(n);
console.log(ans)