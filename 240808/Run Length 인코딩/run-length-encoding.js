const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const string = input;

let resultLength = 0;
let afterEncoding = '';
let cnt = 1;

for ( let i = 1 ; i < string.length ; i ++ ) {
    if ( string[i] === string[i-1] ) {
        cnt += 1
    } else {
        afterEncoding += string[i-1] + cnt;
        resultLength += ( 1 + cnt.toString().length );
        cnt = 1;
    }
}

afterEncoding += string[string.length-1] + cnt;
resultLength += ( 1 + cnt.toString().length );

console.log(resultLength);
console.log(afterEncoding);