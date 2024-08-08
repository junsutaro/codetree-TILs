const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n")

const n = Number(input[0]);
const keyWord = input[input.length - 1];

let cnt = 0;
let sumLength = 0;

for ( let i = 1 ; i < n + 1 ; i ++ ) {
    const string = input[i];
    if ( string[0] === keyWord ) {
        cnt += 1;
        sumLength += string.length;
    }
}

const ans = ( sumLength / cnt ).toFixed(2)
console.log(cnt, ans)