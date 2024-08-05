const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
let stars;

for ( let i = 0; i < 2 * n ; i ++ ) {
    stars = ''
    if (i % 2 === 0) {
        for ( let j = 0; j < n - i / 2 ; j ++ ){
          stars += '* '  
        }
    }
    else {
        for ( let j = 0 ; j < (i + 1) / 2 ; j ++ ) {
            stars += '* '
        }
    }

    console.log(stars.trim())
}