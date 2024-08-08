const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const string = input[1].split(' ').join('');


let strPart = ''

for ( let i = 0 ; i < string.length ; i ++ ) {
    strPart += string[i];
    if ( ( i + 1 ) % 5 === 0 ) {
        console.log(strPart)
        strPart = ''
    }
}

console.log(strPart)