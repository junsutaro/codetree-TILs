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

        if (( i >= 1 ) && ( j % 2 === 0 )) {
            stars += '  '
        }

        if (( i >= 1 ) && ( j % 2 === 1 ) && ( j < i )) {
            stars += '  '
        }
        if (( i >= 1 ) && ( j % 2 === 1 ) && ( j >= i )) {
            stars += '* '
        }
    }
    console.log(stars)
    
}