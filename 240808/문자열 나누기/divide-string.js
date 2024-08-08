const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const string = input[1].split(' ').join('');

for ( let i = 0 ; i < string.length ; i += 5 ) {
    strPart = ''
    for ( let j = 0 ; j < 5 ; j ++ ) {
        if ( i + j < string.length ) { 
            strPart += string[i + j];
        }
    }
    console.log(strPart)
}