const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

let pp = 1;
let p = n;
let ans = 0;
let arr = `${pp} ${p}`

while ( ans < 100 ) {
    ans = pp + p;
    arr += ' ' + ans
    pp = p
    p = ans
} 

console.log(arr)