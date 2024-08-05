const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

// const n = 7;
let stars;

for (let i = 0; i < n ; i ++ ) {
    stars = ''
    for ( let j = 0 ; j < n ; j ++ ) {
        if ( i === 0 ) {    
            stars += '* '
        }
        else {
            if (( j < i )) {
                stars += '  '
            }
            else if (( j % 2 === 0 )) {
                stars += '  '
            }
            else {
                stars += '* '
            }

        }
    }
    console.log(stars)
    
}