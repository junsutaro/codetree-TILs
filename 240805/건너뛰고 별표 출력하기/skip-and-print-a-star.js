const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

for ( let i = 0 ; i < 2 * n ; i++ ) {
    let stars = '';
    for ( let j = 0 ; j < 2 + i ; j += 2 ) {
        if ( i % 2 === 0 ) {
            stars += '*'
        }
    }
    console.log(stars)
}

for ( let i = 2 * n - 2 ; i > 0 ; i-- ) {
    let stars = '';
    for ( let j = i ; j > 0 ; j -= 2 ) {
        if ( i % 2 === 0 ) {
            stars += '*'
        }
    }
    console.log(stars)
}