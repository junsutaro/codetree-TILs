const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);


const stars = '*'.repeat(n);

for ( let i = 0 ; i < 2 ; i++ ) {
    for ( let j = 0 ; j < n ; j++ ) {
        console.log(stars)
    }
    console.log()
}