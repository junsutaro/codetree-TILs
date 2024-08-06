const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)
let ans = ''

if ( n >= 2 ) {
    ans += 2 + ' '
}
for ( let i = 1 ; i <= n ; i ++ ) {
    if ( n === 1 ) {
        break
    }
    for ( let j = 2 ; j < i ; j ++ ) {
        if ( i % j === 0 ) {
            break;
        }
        ans += i + ' ';
    }
}

console.log(ans)