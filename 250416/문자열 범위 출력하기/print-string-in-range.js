const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let ans = ''
for ( let i = 2 ; i < 10 ; i ++ ) {
    ans += input[i]
}

console.log(ans)