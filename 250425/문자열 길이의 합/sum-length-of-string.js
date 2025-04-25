const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

let sumLen = 0;
let aStart = 0;

for ( let i = 1 ; i <= n ; i ++ ) {
    const str = input[i];

    sumLen += str.length;
    if ( str[0] === 'a' ) {
        aStart += 1;
    }
}

console.log(sumLen, aStart)