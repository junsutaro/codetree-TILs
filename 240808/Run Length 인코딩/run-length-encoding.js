const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let currChar = input[0];
let numChar = 1;

let ans = '';

for ( let i = 1 ; i < input.length ; i ++ ) {
    let targetChar = input[i];
    if ( targetChar === currChar ) {
        numChar += 1;
    } else {
        ans += currChar;
        ans += numChar

        currChar = targetChar;
        numChar = 1;
    }
}

ans += currChar;
ans += numChar;

console.log(ans.length);
console.log(ans);