const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

let flag = false;
const keyword = input[input.length - 1]

const strings = input.slice(0, -1);


for ( let elem of strings ) {
    if ( elem[elem.length - 1] === keyword ) {
        console.log(elem);
        flag = true;
    }
}

if ( flag === false ) {
    console.log('None')
}