const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

N = Number(input);

let ans = '';

for ( let i = 0; i < N ; i ++ ) {
    for ( let j = 0 ; j < N ; j ++ ) {
        ans += `${( i * 4 + j ) % 9 + 1} ` 
    }
    ans += '\n'
}

console.log(ans)