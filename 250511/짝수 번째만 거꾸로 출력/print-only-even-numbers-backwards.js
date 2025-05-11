const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim();
let len = givenStr.length;

let ans = '';

for (let i = len-1; i > 0; i--) {
    if ( i % 2 === 1 ) {
        ans += givenStr[i]
    } 
}

console.log(ans)
