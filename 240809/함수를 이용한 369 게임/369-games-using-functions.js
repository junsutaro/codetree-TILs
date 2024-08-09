const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

function isContain369(n) {
    while ( n > 0 ) {
        const digit = n % 10 ;
        if ( digit === 3 || digit === 6 || digit === 9 ) {
            return true
        }
        n = parseInt( n / 10 )
    }
}

function isMagicNumber(n) {
    if ( n % 3 === 0 || isContain369(n) ) {
        return true;
    }
}

const [a, b] = input.split(' ').map(Number);
let ans = 0;

for ( let i = a ; i <= b ; i ++ ) {
    if ( isMagicNumber(i) === true ) {
        ans += 1
        // console.log(i)
    }
}

console.log(ans)