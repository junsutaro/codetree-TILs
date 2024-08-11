const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const N = Number(input);


function findAns(n) {
    if ( n < 1 ) {
        console.log('plz use more than 1');
        return;
    }
    if ( n === 1 ) {
        return 1;
    }

    if ( n === 2 ) {
        return 2;
    }

    return findAns(n-1) + findAns(parseInt(n / 3))
}

const ans = findAns(N)

console.log(ans)