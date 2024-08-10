const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);


function printN(n) {
    let ans = ''

    if ( n === 0 ) {
        return;
    }

    for ( let i = 0 ; i < n ; i ++ ) {
        ans += '* '
    }
    console.log(ans)
    printN(n-1);
    console.log(ans)
}

printN(n);