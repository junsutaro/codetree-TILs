const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const checkPoints = input.slice(1).map((line) => line.split(' ').map(Number));

const MAX_VAL = Number.MAX_SAFE_INTEGER;

function manDistCal(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

let minVal = MAX_VAL;
for ( let i = 1 ; i < n - 1 ; i ++ ) {
    const newCourse = [];
    let tempSumVal = 0;
    for ( let j = 0 ; j < n ; j ++ ) {
        if ( j !== i ) {
            newCourse.push(checkPoints[j])
        }
    }
    for ( let j = 0 ; j < newCourse.length - 1 ; j ++ ) {
        const tempDist = manDistCal(newCourse[j], newCourse[j+1])
        tempSumVal += tempDist;
    }
    minVal = Math.min(minVal, tempSumVal)
}

console.log(minVal)