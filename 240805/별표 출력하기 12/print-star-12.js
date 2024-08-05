const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);
let stars;

for (let i = 0; i < n ; i ++ ) {
    stars = ''
    for ( let j = 0; j < n; j ++ ) {
        if ( (i === 0 ) || ( j % 2 === 1 )) {
            stars += '*'
        }
    }
    console.log(stars)
}