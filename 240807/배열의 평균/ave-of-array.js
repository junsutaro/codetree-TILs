const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr2d = [];

for ( elem of input ) {
    arr2d.push(elem.split(' ').map(Number))
}

const numRows = arr2d.length;
const numCols = arr2d[0].length;

const rowAvgs = arr2d.map(row => {
    const sum = row.reduce((acc, curr) => acc + curr, 0);
    return ( (sum / numCols).toFixed(1) );
})

let colAvgs = []
for ( let j = 0 ; j < numCols ; j ++ ) { 
    let sum = 0;
    for ( let i = 0 ; i < numRows ; i ++ ) {
        sum += arr2d[i][j];
    }   
    colAvgs.push((sum/numRows).toFixed(1))
}


const totalSum = arr2d.flat().reduce((acc, curr) => acc + curr, 0);
const totalCount = arr2d[0].length * arr2d.length;
const totalAvg = ( totalSum / totalCount ).toFixed(1)

console.log(rowAvgs.join(' '));
console.log(colAvgs.join(' '));
console.log(totalAvg);