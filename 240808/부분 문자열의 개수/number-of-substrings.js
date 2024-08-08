const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const mainString = input[0];
const subString = input[1];

let cnt = 0 ; 

for ( let i = 0; i <= mainString.length - subString.length ; i ++ ) {
    let match = true;
    for ( let j = 0 ; j < subString.length ; j ++ ) {
        if ( mainString[i + j] !== subString[j] ) {
            match = false;
            break;
        }
    }
    if ( match ) {
        cnt += 1
    }
}

console.log(cnt)