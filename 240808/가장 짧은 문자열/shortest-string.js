const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let max = input[0].length;
let min = input[0].length;

for ( let i = 0 ; i < input.length ; i ++ ) {
    if (input[i].length > max) {
        max = input[i].length;
    }
    
    if ( input[i].length < min ) {
        min = input[i].length;
    }
}

let ans = max - min;
console.log(ans);