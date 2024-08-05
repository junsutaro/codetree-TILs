const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

for ( let i = 1 ; i <= n ; i ++ ) {
    let stars = ''
    for ( let j = 1 ; j < i*2 ; j++ ) {
        stars += '*'
    }
    console.log(stars)
}