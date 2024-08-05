const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

for ( let i = 0 ; i < 2 ; i++ ) {
    for ( let j = 0 ; j < n ; j++ ) {
        let stars = ''
        for ( let k = 0; k < n ; k++ ) {
            stars += '*'
        }
        console.log(stars)
    }
    console.log()
}