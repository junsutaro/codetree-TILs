const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);


for ( let i = 0 ; i < n ; i ++ ) {
    let stars = ''
    for ( let j = 0 ; j < n - i ; j ++ ) {
        stars += '*';
    }
    for ( let j = 0 ; j < i ; j ++ ) {
        stars += '  ';
    }
    for ( let j = 0 ; j < n - i ; j ++ ) {
        stars += '*';
    }
    console.log(stars)
}