const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);


for ( let i = 0 ; i < 2 * n - 1 ; i++) {
    let stars = ''
    let numberOfStars = i < n ? i + 1 : 2 * n - i - 1;
    let spaceBeforeStars = Math.abs(n - 1 - i);

    for ( j = 0 ; j < spaceBeforeStars ; j ++ ) {
        stars += ' '
    }
    for ( j = 0 ; j < numberOfStars ; j ++ ) {
        stars += '*'
        if ( j < numberOfStars - 1 ) {
            stars += ' '
        }
    }
    console.log(stars)
}