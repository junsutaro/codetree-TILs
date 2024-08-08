const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input)
let res = ''


for ( let i = 0 ; i < n ; i ++ ) {
    res += `12345^&*()_\n`
}

console.log(res)