const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const numbers = input.split(' ').map(Number);

let arr = [];

for ( let elem of numbers ) {
    if ( elem != 0 ) {
        arr.push(elem)
    }
    else {
        break
    }
}
console.log(arr.reverse().join(' '))