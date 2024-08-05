const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);



for ( let i = 0 ; i < 2 * n ; i++ ) {
    let stars = '';

    if ( i % 2 === 0 ) {
        for ( let j = 0 ; j < 1 + ( i / 2 ) ; j ++ ) {
            stars += '* '
        }
    }
    else {
        for ( let j = 0 ; j < n - (i - 1) / 2 ; j ++ ) {
            stars += '* '
        }
    }

    console.log(stars)
}