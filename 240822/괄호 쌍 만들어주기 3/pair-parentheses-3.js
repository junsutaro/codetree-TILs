const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let ansCnt = 0;

for ( let i = 0 ; i < input.length - 1; i ++ ) {
    for ( let j = i + 1 ; j < input.length ; j ++ ) {
        if ( input[i] === '(' && input[j] === ')' ) {
            ansCnt += 1;
        }
    }
}
console.log(ansCnt)