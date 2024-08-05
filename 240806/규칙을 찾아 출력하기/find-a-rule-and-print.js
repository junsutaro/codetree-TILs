const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
// const n = 5;

let stars;

for ( let i = 0; i < n; i ++) {
    stars = ''
    for ( let j = 0; j < n; j ++ ) {
        if ( (i === 0) || (i === n-1) || (j === 0) || (j === n-1)) {
            stars += '* '
        }
        else if ( i <= j ) {
            stars += '  '
        }
        else {
            stars += '* '
        }
    }    
    console.log(stars)
}