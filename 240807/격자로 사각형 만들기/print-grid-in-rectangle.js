const fs = require('fs');
const input = fs.readFileSync(0).toString();

const n = Number(input);

let triangle = [];

for ( let i = 0; i < n ; i ++ ) {
    
    let row = Array(n).fill(1);

    if ( i > 0 ) {
        for ( let j = 1 ; j < n ; j ++ ) {

            row[j] = triangle[i-1][j] + triangle[i-1][j-1] + row[j-1]

        }
    }
    triangle.push(row)

}

for ( let elem of triangle ) {
    console.log(elem.join(' '))
}