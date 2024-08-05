const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
let arr = ''

for ( let i = 0; i < n; i ++ ) {
    for ( let j = 0; j < n; j ++ ) {
        arr += `(${i+1}, ${j+1}) `
        if ( (i + j + 2) % 4 === 0 ) {
            arr += '\n'
        }
    }
}

console.log(arr)