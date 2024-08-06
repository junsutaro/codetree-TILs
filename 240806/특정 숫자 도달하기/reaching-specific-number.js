const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();


let arr = input.split(" ");

let sumVal = 0;
let avgVal = 0;
let cnt = 0;

for ( let elem of arr ) {
    if ( elem >= 250 ) {
        break
    }
    sumVal += Number(elem);
    cnt += 1
}

avgVal = ( sumVal / cnt ).toFixed(1)

console.log(sumVal, avgVal)