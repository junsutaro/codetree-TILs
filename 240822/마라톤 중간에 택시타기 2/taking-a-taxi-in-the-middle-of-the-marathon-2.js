const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const checkPoints = input.slice(1).map((line) => line.split(' ').map(Number));

const MAX_VAL = Number.MAX_SAFE_INTEGER;

let minVal = MAX_VAL;
for ( let i = 1 ; i < n - 1 ; i ++ ) {
    let prevIds = 0;
    let tempSumVal = 0;

    for ( let j = 1; j < n ; j ++ ) {
        if ( j === i ) {
            continue;
        }
        tempSumVal += (Math.abs(checkPoints[j][0] - checkPoints[prevIds][0]) + Math.abs(checkPoints[j][1] - checkPoints[prevIds][1]))
        prevIds = j;
    }
    minVal = Math.min(minVal, tempSumVal);
}

console.log(minVal)