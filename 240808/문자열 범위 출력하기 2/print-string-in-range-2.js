const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n")

const string = input[0];
const n = Number(input[1]);

const length = Math.min(n, string.length);

let result = '';

for ( let i = 0 ; i < length ; i ++ ) {
    result += string[string.length - 1 - i ];
}

console.log(result)