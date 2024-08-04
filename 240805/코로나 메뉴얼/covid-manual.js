const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const p1 = input[0].split(' ')
const p2 = input[1].split(' ')
const p3 = input[2].split(' ')

let cnt = 0;

if ( p1[0] == 'Y' && p1[1] >= 37 ) {
    cnt += 1
}
if ( p2[0] == 'Y' && p2[1] >= 37 ) {
    cnt += 1
}
if ( p3[0] == 'Y' && p3[1] >= 37 ) {
    cnt += 1
}


console.log( cnt >= 2 ? 'E' : 'N' )