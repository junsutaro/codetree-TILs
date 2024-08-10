const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

function sumAll(n) {
    if ( n === 1) {
        return 1
    }

    return sumAll(n-1) + n 
}

const ans = sumAll(n);

console.log(ans)