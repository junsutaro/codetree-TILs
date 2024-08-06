const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)
let ans = ''

if ( n >= 2 ) {
    ans += '2 '
}

for ( let i = 3 ; i <= n ; i += 2 ) {
    let isPrime = true;

    for ( let j = 2 ; j * j <= i ; j ++ ) {
        if ( i % j === 0 ) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        ans += i + ' '
    }
}

console.log(ans)